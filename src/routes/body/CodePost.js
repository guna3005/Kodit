import React, { useState } from "react";
import {
  Card,
  Avatar,
  Button,
  Tooltip,
  Modal,
  List,
  Comment,
  Form,
  Input,
} from "antd";
import {
  HeartOutlined,
  HeartFilled,
  MessageOutlined,
  HeartTwoTone,
  ExpandAltOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { monokai } from "react-syntax-highlighter/dist/esm/styles/hljs";

const { Meta } = Card;

const ViewFullButton = styled(Button)`
  position: absolute;
  right: 10px;
  top: 30;
  border: none;
  background: transparent;
  color: #a6e22e;
`;

const CommentsModal = styled(Modal)`
  background-color: #252525;
  color: #fff;
  border-radius: 4px;
  overflow: scroll;
  max-height: 70vh;
  padding: 16px;

  .ant-modal-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const CommentsList = styled(List)`
  overflow: scroll;
  height: 40vh;
`;

const TooltipContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10;
`;

const PostCode = styled(SyntaxHighlighter)`
  white-space: pre-wrap;
  background-color: #1c1c1c;
  color: #28a745;
  border-radius: 4px;
  height: 300;
`;

const CodePost = ({
  profileName,
  description,
  code,
  likeCount,
  comments,
  onViewFullCode,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [likesCount, setLikesCount] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [commentsList, setCommentsList] = useState(comments);

  const isLongCode = code.split("\n").length > 12;
  const handleViewFullCode = () => {
    Modal.info({
      title: "Code Snippet",
      content: (
        <pre style={{ maxHeight: "60vh", overflow: "scroll" }}>
          <div>Description : {description}</div>
          <SyntaxHighlighter language="python" style={monokai}>
            {code}
          </SyntaxHighlighter>
        </pre>
      ),
      centered: true,
      maskClosable: true,
      width: "60vw",
      height: "40vh",
      okText: "Close",
      onOk() {},
    });
  };

  const truncatedCode = isLongCode
    ? `${code.split("\n").slice(0, 12).join("\n")}.....`
    : code;

  const viewFullCodeButton = (
    <ViewFullButton onClick={handleViewFullCode}>
      View Full Code
      <ExpandAltOutlined style={{ fontSize: 20 }} />
    </ViewFullButton>
  );

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = () => {
    // TODO: handle comment submission
    console.log(`Submitting comment: ${commentValue}`);
    const newComment = {
      actions: [<span key="comment-list-reply-to-0">Reply to</span>],
      author: "Han Solo",
      avatar: "https://joeschmoe.io/api/v1/random",
      content: <p>{commentValue}</p>,
      datetime: (
        <Tooltip title="2016-11-22 10:22:33">
          <span>2 minutes ago</span>
        </Tooltip>
      ),
    };
    setCommentsList([...commentsList, newComment]);
    setCommentValue("");
    setIsModalVisible(false);
  };

  return (
    <>
      <Card style={{ background: "#252525", color: "white" }}>
        <Meta
          avatar={<Avatar>{profileName[0]}</Avatar>}
          title={profileName}
          description={description}
          style={{ color: "#28a745", position: "relative" }}
        />
        {isLongCode ? viewFullCodeButton : null}
        <PostCode language="javascript" style={monokai}>
          {truncatedCode}
        </PostCode>
        <TooltipContainer>
          <Tooltip
            title="Like"
            onClick={() => {
              setLikesCount((count) => {
                const newCount = isLiked ? count - 1 : count + 1;
                setIsLiked(!isLiked);
                return newCount;
              });
            }}
            style={{ fontSize: "20px", color: "red" }}
          >
            {isLiked ? (
              <HeartFilled
                style={{
                  fontSize: "24px",
                  transition: "all 0.3s ease",
                  color: "red",
                }}
              />
            ) : (
              <HeartOutlined
                style={{
                  fontSize: "20px",
                  transition: "all 0.3s ease",
                  color: "inherit",
                }}
              />
            )}
            <span style={{ marginLeft: 5, color: isLiked ? "red" : "inherit" }}>
              {likesCount}
            </span>
          </Tooltip>
          <Tooltip title="Comment" onClick={() => setIsModalVisible(true)}>
            <MessageOutlined />
            <span style={{ marginLeft: 5 }}>{comments.length}</span>
          </Tooltip>
        </TooltipContainer>
      </Card>
      <CommentsModal
        title="Comments"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleCommentSubmit}>
            Submit
          </Button>,
        ]}
        centered={true}
        maskClosable={true}
        width="50vw"
        okText="Close"
      >
        <CommentsList
          className="comment-list"
          header={`${comments.length} ${
            comments.length > 1 ? "replies" : "reply"
          }`}
          itemLayout="horizontal"
          dataSource={commentsList}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{item.author[0]}</Avatar>}
                title={item.author}
                description={item.content}
              />
            </List.Item>
          )}
        />
        <Form.Item>
          <p style={{ fontWeight: "bold" }}>Add Comment :</p>
          <Input.TextArea
            rows={1}
            placeholder="Add a comment"
            value={commentValue}
            onChange={handleCommentChange}
          />
        </Form.Item>
      </CommentsModal>
    </>
  );
};

export default CodePost;
