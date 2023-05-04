import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Avatar, Button, Input, Modal, Tooltip, Upload } from "antd";
import { UserAddOutlined, UserOutlined } from "@ant-design/icons";
import Post from "../common/components/Post";
import Blog from "../common/components/Blog";
import { blogsData } from "../common/constants/BlogsFakeData";
import { postsData } from "../common/constants/PostsFakeData";
import { List } from "antd";

const ProfileContainer = styled.div`
  width: 90%;
  height: 100vh;
  overflow-y: scroll;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #282c34;
`;

const ProfileColumn = styled.div`
  width: 40%;
  padding: 20px;
  box-sizing: border-box;
  h1 {
    position: sticky;
    top: 20px;
    text-align: center;
    border: 1px solid #0000ff;
    color: #28a745;
    background-color: #333;
    border-radius: 10px;
    padding: 6px 0;
    width: 80%;
  }
`;

const ProfileColumnWrapper = styled.div`
  height: 44vh;
  box-sizing: border-box;
  overflow-y: scroll;
`;

const ProfileHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const PostsBlogContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ProfilePicture = styled.img`
  border-radius: 49%;
  height: 120px;
  width: 120px;
  margin: 12px 20px 0 0;
`;

const ProfileStats = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
`;

const StatIcon = styled.div`
  margin-right: 5px;
  color: #0000ff;
`;

const FollowersCount = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 20px;
  cursor: pointer;
`;

const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #28a745;
  cursor: pointer;
`;

const FollowingCount = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const ProfileDetails = styled.div`
  color: white;
  margin-right: -60px;
`;

const ProfileName = styled.h2`
  margin: 0;
`;

const ProfileBio = styled.p`
  margin: 0;
`;

const UploadButtonsContainer = styled.div`
  display: flex;
  margin-left: -120px;
  width: 20%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const UploadButton = styled(Button)`
  background-color: #1f1f1f;
  border-color: #222222;
  color: #ffffff;

  &:hover,
  &:focus {
    background-color: #252525;
    border-color: #218838;
  }
`;

const CustomModal = styled(Modal)`
  .ant-modal-header {
    text-align: center;
    background-color: #212529;
    padding: 12px 0;
    color: #fff;
  }
  .ant-modal-title {
    color: #fff;
  }
  .ant-modal-close-x {
    color: #fff;
    margin: 5px 25px 0 0;
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

const CustomInput = styled(Input)`
  background-color: #343a40;
  border: 1px solid #28a745;
  color: #fff;
  width: 100%;
`;

const CustomTextArea = styled(Input.TextArea)`
  background-color: #343a40;
  border: 1px solid #28a745;
  color: #fff;
  width: 100%;
`;

const InputLabel = styled.div`
  font-weight: bold;
  color: #040405;
  margin-bottom: 5px;
`;

const UserName = styled.span`
  color: #28a745;
  font-weight: bold;
`;

const UserDomain = styled.span`
  color: #888;
`;

const PROFILE_DATA = {
  name: "John Doe",
  bio: "Web developer",
  profilePictureUrl: "https://via.placeholder.com/100",
};

const FollowModal = ({ visible, title, data, onCancel }) => {
  return (
    <StyledModal
      open={visible}
      title={title}
      data={data}
      footer={null}
      onCancel={onCancel}
      centered
    >
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<UserName>{item.name}</UserName>}
              description={<UserDomain>{item.domain}</UserDomain>}
            />
          </List.Item>
        )}
      />
    </StyledModal>
  );
};

const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: #1c1c1c;
    color: white;
    border-radius: 10px;
    overflow-y: scroll;
    max-height: 60vh;

    .ant-modal-header {
      border-bottom: none;
      color: #28a745;
    }

    .ant-list-item-meta-title {
      color: #28a745;
      font-weight: bold;
      font-size: 16px;
    }

    .ant-list-item-meta-description {
      color: #888;
      font-size: 14px;
    }
  }
`;
const followersData = [
  { id: 1, name: "John Doe", domain: "Web Developer" },
  { id: 2, name: "Jane Doe", domain: "UI/UX Designer" },
  { id: 3, name: "Bob Smith", domain: "Software Engineer" },
  { id: 4, name: "Alice Johnson", domain: "Frontend Developer" },
  { id: 5, name: "Mike Williams", domain: "Backend Developer" },
  { id: 6, name: "Sarah Lee", domain: "Mobile Developer" },
  { id: 7, name: "Tom Brown", domain: "Full-stack Developer" },
  { id: 8, name: "Samantha Davis", domain: "Database Administrator" },
  { id: 9, name: "Max Wilson", domain: "DevOps Engineer" },
  { id: 10, name: "Emily Kim", domain: "Data Scientist" },
];
const followingData = [
  { id: 1, name: "John Doe", domain: "Web Developer" },
  { id: 2, name: "Bob Smith", domain: "Software Engineer" },
  { id: 3, name: "Mike Williams", domain: "Backend Developer" },
  { id: 4, name: "Tom Brown", domain: "Full-stack Developer" },
  { id: 5, name: "Emily Kim", domain: "Data Scientist" },
];

const Profile = () => {
  const [postTitle, setPostTitle] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [postCode, setPostCode] = useState("");
  const [postHashtags, setPostHashtags] = useState("");
  const [isPostModalVisible, setIsPostModalVisible] = useState(false);
  const [isBlogModalVisible, setIsBlogModalVisible] = useState(false);
  const [blogTitle, setBlogTitle] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [blogHashtags, setBlogHashtags] = useState("");
  const [isFollowersModalVisible, setIsFollowersModalVisible] = useState(false);
  const [isFollowingModalVisible, setIsFollowingModalVisible] = useState(false);

  const handlePostUpload = () => {
    // Upload the post data to the server
    const postData = {
      title: postTitle,
      description: postDescription,
      code: postCode,
      hashtags: postHashtags,
    };
    console.log(postData);

    // Clear the input fields and hide the modal
    setPostTitle("");
    setPostDescription("");
    setPostCode("");
    setPostHashtags("");
    setIsPostModalVisible(false);
  };

  const handleBlogUpload = () => {
    // Upload the blog data to the server
    const blogData = {
      title: "Blog Title",
      description: "Blog Description",
      hashtags: ["#blog", "#antdesign"],
    };
    console.log(blogData);

    // Clear the input fields and hide the modal
    setIsBlogModalVisible(false);
  };

  return (
    <div style={{ backgroundColor: "#272822" }}>
      <ProfileContainer>
        <ProfileHeader>
          <ProfilePicture
            src={PROFILE_DATA.profilePictureUrl}
            alt="Profile Picture"
          />
          <ProfileDetails>
            <ProfileName>{PROFILE_DATA.name}</ProfileName>
            <ProfileBio>{PROFILE_DATA.bio}</ProfileBio>
          </ProfileDetails>
          <ProfileStats>
            <Followers onClick={() => setIsFollowersModalVisible(true)}>
              <StatIcon>
                <UserAddOutlined />
              </StatIcon>
              <FollowersCount>1,000 Followers</FollowersCount>
            </Followers>
            <Followers onClick={() => setIsFollowingModalVisible(true)}>
              <StatIcon>
                <UserOutlined />
              </StatIcon>
              <FollowingCount>500 Following</FollowingCount>
            </Followers>
          </ProfileStats>
          <FollowModal
            visible={isFollowersModalVisible}
            title="Followers"
            onCancel={() => setIsFollowersModalVisible(false)}
            data={followersData}
          />
          <FollowModal
            visible={isFollowingModalVisible}
            title="Following"
            data={followingData}
            onCancel={() => setIsFollowingModalVisible(false)}
          />
        </ProfileHeader>
        <UploadButtonsContainer>
          <UploadButton onClick={() => setIsPostModalVisible(true)}>
            Upload Post
          </UploadButton>
          <UploadButton onClick={() => setIsBlogModalVisible(true)}>
            Upload Blog
          </UploadButton>
        </UploadButtonsContainer>
        <PostsBlogContainer>
          <ProfileColumn>
            <h1>Posts</h1>
            <ProfileColumnWrapper>
              {postsData.map((post) => (
                <Post key={post.id} post={post} />
              ))}
            </ProfileColumnWrapper>
          </ProfileColumn>
          <ProfileColumn>
            <h1>Blogs</h1>
            <ProfileColumnWrapper>
              {blogsData.map((blog) => (
                <Blog key={blog.id} blog={blog} />
              ))}
            </ProfileColumnWrapper>
          </ProfileColumn>
        </PostsBlogContainer>
        <CustomModal
          title="Upload Post"
          open={isPostModalVisible}
          onCancel={() => setIsPostModalVisible(false)}
          centered={true}
          style={{ maxWidth: "100vw" }}
          bodyStyle={{
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
          }}
          footer={[
            <Button key="cancel" onClick={() => setIsPostModalVisible(false)}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handlePostUpload}>
              Upload
            </Button>,
          ]}
        >
          <InputLabel>Enter Title</InputLabel>
          <CustomInput
            placeholder="Title"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <InputLabel>Enter Description</InputLabel>
          <CustomTextArea
            rows={3}
            placeholder="Description"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <InputLabel>Enter Code</InputLabel>
          <CustomTextArea
            rows={10}
            placeholder="Code"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <InputLabel>Enter Hashtags</InputLabel>
          <CustomInput
            placeholder="Hashtags"
            value={postHashtags}
            onChange={(e) => setPostHashtags(e.target.value)}
            style={{ marginBottom: 10 }}
          />
        </CustomModal>
        <CustomModal
          title="Upload Blog"
          onCancel={() => setIsBlogModalVisible(false)}
          open={isBlogModalVisible}
          centered={true}
          style={{ maxWidth: "100vw" }}
          bodyStyle={{
            height: "fit-content",
            display: "flex",
            flexDirection: "column",
            backdropFilter: "blur(50px)",
          }}
          footer={[
            <Button key="cancel" onClick={() => setIsBlogModalVisible(false)}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" onClick={handleBlogUpload}>
              Upload
            </Button>,
          ]}
        >
          <InputLabel>Enter Title</InputLabel>
          <CustomInput
            placeholder="Title"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <InputLabel>Enter Description</InputLabel>
          <CustomTextArea
            rows={10}
            placeholder="Description"
            value={blogDescription}
            onChange={(e) => setBlogDescription(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <InputLabel>Enter Hashtags</InputLabel>
          <CustomInput
            placeholder="Hashtags"
            value={blogHashtags}
            onChange={(e) => setBlogHashtags(e.target.value)}
            style={{ marginBottom: 10 }}
          />
        </CustomModal>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
