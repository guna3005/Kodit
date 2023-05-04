import React, { useState } from "react";
import styled from "styled-components";
import { Avatar, Button, Modal } from "antd";
import CodePost from "../../routes/body/CodePost";
import { List } from "rc-field-form";
import { UserOutlined } from "@ant-design/icons";

const PostContainer = styled(Button)`
  background-color: #1f1f1f;
  border-color: #28a745;
  color: #fff;
  width: 80%;
  height: 40px;
  margin-bottom: 8px;

  &:hover,
  &:focus {
    background-color: #2c2c2c;
    border-color: #218838;
  }
`;

const CustomModal = styled(Modal)`
  .ant-modal-header {
    text-align: center;
    background-color: #212529;
    border-bottom: none;
    color: #fff;
  }

  .ant-modal-content {
    background-color: #343a40;
    color: #fff;
  }

  .ant-modal-footer {
    border-top: none;
    background-color: #343a40;
    display: flex;
    justify-content: center;

    button {
      background-color: #28a745;
      border-color: #28a745;
      margin-right: 10px;

      &:hover {
        background-color: #218838;
        border-color: #218838;
      }
    }
  }
`;

const PostTitle = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
`;



const Post = ({ post }) => {
  const [isPostModalVisible, setIsPostModalVisible] = useState(false);

  return (
    <>
      <PostContainer onClick={() => setIsPostModalVisible(true)}>
        <PostTitle>{post.title}</PostTitle>
      </PostContainer>
      <CustomModal
        title={post.title}
        open={isPostModalVisible}
        onCancel={() => setIsPostModalVisible(false)}
        onOk={() => setIsPostModalVisible(false)}
      >
        <CodePost
          profileName={post.profileName}
          description={post.description}
          code={post.code}
          likeCount={post.likeCount}
          comments={post.comments}
        />
      </CustomModal>
    </>
  );
};

export default Post;
