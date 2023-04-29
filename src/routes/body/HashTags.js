import React from "react";
import { Button } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const HashtagsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #252525;
  padding: 16px;
  overflow-y: scroll;
`;

const Header = styled.div`
  position: sticky;
  top: 0;
  color: #28a745;
  background-color: #252525;
  padding: 16px;
  z-index: 1;
`;

const HashtagButton = styled(Button)`
  background-color: #1f1f1f;
  border-color: #28a745;
  color: #fff;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;

  &:hover,
  &:focus {
    background-color: #2c2c2c;
    border-color: #218838;
  }
`;

const Hashtags = () => {
  const history = useHistory();
  const hashtags = [
    { id: 1, name: "#ReactJS" },
    { id: 2, name: "#NodeJS" },
    { id: 3, name: "#JavaScript" },
    { id: 4, name: "#Python" },
    { id: 5, name: "#MongoDB" },
    { id: 6, name: "#TypeScript" },
    { id: 7, name: "#CSS" },
    { id: 8, name: "#HTML" },
  ];

  const handleHashtagClick = (id) => {
    history.push(`/hashtag/${id}`);
  };

  return (
    <HashtagsContainer>
      <Header>
        <h2>Hashtags</h2>
      </Header>
      {hashtags.map((hashtag) => (
        <HashtagButton
          key={hashtag.id}
          onClick={() => handleHashtagClick(hashtag.id)}
        >
          {hashtag.name}
        </HashtagButton>
      ))}
    </HashtagsContainer>
  );
};

export default Hashtags;
