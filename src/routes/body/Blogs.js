import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "antd";
import  RemarkModal  from "../../common/components/RemarkModal";
import { blogsData } from "../../common/constants/BlogsFakeData";

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #252525;
  padding: 16px;
`;

const Header = styled.h2`
  color: #28a745;
  font-weight: bold;
  margin-bottom: 16px;
`;

const BlogContent = styled.div`
  overflow-y: scroll;
  flex: 1;
`;

const BlogPostButton = styled(Button)`
  background-color: #1f1f1f;
  border-color: #28a745;
  color: #fff;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #2c2c2c;
    border-color: #218838;
  }
`;

const BlogPostTitle = styled.span`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const BlogPostUpvotes = styled.span`
  display: flex;
  align-items: center;
  color: #28a745;
`;



const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogPostClick = (blogPost) => {
    setSelectedBlog(blogPost);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedBlog(null);
    setIsModalOpen(false);
  };

  return (
    <BlogContainer>
      <Header>Blog Posts</Header>
      <BlogContent>
        {blogsData.map((blogPost) => (
          <BlogPostButton
            key={blogPost.id}
            onClick={() => handleBlogPostClick(blogPost)}
          >
            <BlogPostTitle>{blogPost.title}</BlogPostTitle>
            <BlogPostUpvotes>
              <span>{blogPost.upvotes}</span>
              <span style={{ marginLeft: "5px" }}>👍</span>
            </BlogPostUpvotes>
          </BlogPostButton>
        ))}
      </BlogContent>
      <RemarkModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        markdown={selectedBlog ? selectedBlog.content : ""}
      />
    </BlogContainer>
  );
};

export default Blog;
