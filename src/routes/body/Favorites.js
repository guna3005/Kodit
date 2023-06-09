import React from "react";
import { Button, Modal } from "antd";
import styled from "styled-components";
import { DeleteOutlined } from "@ant-design/icons";

const FavoritesContainer = styled.div`
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

const FavoritesContent = styled.div`
  overflow-y: scroll;
  flex: 1;
`;

const FavoriteButton = styled(Button)`
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

const DeleteButton = styled(Button)`
  background-color: transparent;
  border-color: transparent;
  color: #dc3545;
  margin-left: auto;
  float: right;

  &:hover,
  &:focus {
    background-color: transparent;
    border-color: transparent;
    color: #c82333;
  }
`;

const FavoritesContentContainer = styled.div`
display: flex;
flex-direction: row;
height: fit-content;
`

const Favorites = () => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [selectedFavorite, setSelectedFavorite] = React.useState("");

  const handleFavoriteClick = (favorite) => {
    setSelectedFavorite(favorite);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setSelectedFavorite("");
    setModalVisible(false);
  };

  const favorites = [
    "React Hooks: A Guide for Beginners",
    "10 Tips for Writing Clean Code",
    "How to Build a RESTful API with Node.js",
    "React vs Angular: Which One to Choose?",
    "Getting Started with Python",
    "10 JavaScript Libraries You Should Know About",
    "Extra stuff for scrolabbility 1",
    "Extra stuff for scrolabbility 2",
    "Extra stuff for scrolabbility 3",
    "Extra stuff for scrolabbility 4",
    "Extra stuff for scrolabbility 5",
    "Extra stuff for scrolabbility 6",
  ];

  return (
    <FavoritesContainer>
      <Header>Favorites</Header>
      <FavoritesContent>
        {favorites.map((favorite) => (
          <FavoritesContentContainer>
            <FavoriteButton
              key={favorite}
              onClick={() => handleFavoriteClick(favorite)}
            >
              {favorite.length > 20
                ? `${favorite.substring(0, 20)}...`
                : favorite}
            </FavoriteButton>
            <DeleteButton icon={<DeleteOutlined />} />
          </FavoritesContentContainer>
        ))}
      </FavoritesContent>
      <Modal
        title="Favorite"
        open={modalVisible}
        onCancel={handleModalCancel}
        footer={[
          <Button key="cancel" onClick={handleModalCancel}>
            {" "}
            Close{" "}
          </Button>,
        ]}
      >
        {selectedFavorite}
      </Modal>
    </FavoritesContainer>
  );
};

export default Favorites;
