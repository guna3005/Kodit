import React, { useState } from "react";
import styled from "styled-components";
import { Button, Modal, Tooltip } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import RemarkModal from "./RemarkModal";

const BlogContainer = styled(Button)`
  background-color: #1f1f1f;
  border-color: #28a745;
  color: #fff;
  width: 80%;
  height: 40px;
  text-align: center;
  margin-bottom: 8px;

  &:hover,
  &:focus {
    background-color: #2c2c2c;
    border-color: #218838;
  }
`;

const BlogTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;

const BlogDescription = styled.p`
  margin-bottom: 10px;
`;

const BlogLikes = styled.span`
  margin-right: 10px;
`;

const Blog = ({ blog }) => {
  const [isBlogModalVisible, setIsBlogModalVisible] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogPostClick = (blogPost) => {
    setSelectedBlog(blogPost);
    setIsBlogModalVisible(true);
  };

  return (
    <>
      <BlogContainer
        onClick={() => {
          setIsBlogModalVisible(true);
          handleBlogPostClick(blog);
        }}
      >
        <BlogTitle>{blog.title}</BlogTitle>
      </BlogContainer>
      <RemarkModal
        isOpen={isBlogModalVisible}
        onClose={() => setIsBlogModalVisible(false)}
        markdown={selectedBlog ? selectedBlog.content : ""}
      />
    </>
  );
};

export default Blog;
