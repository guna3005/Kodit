import React from "react";
import { Button, Input, Layout, Typography } from "antd";
import styled from "styled-components";
import LogoText from "../styledElements/LogoText";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

const SearchBar = styled(Input.Search)`
  max-width: 400px;
  width: 100%;
`;

const ProfileButton = styled(Button)`
  background-color: #28a745;
  border-color: #28a745;

  &:hover,
  &:focus {
    background-color: #218838;
    border-color: #218838;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #dc3545;
  margin-left: 10px;
  border-color: #dc3545;

  &:hover,
  &:focus {
    background-color: #c82333;
    border-color: #c82333;
  }
`;

const NavContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #28a745;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  height: 32px;
  width: 32px;
  background-color: #28a745;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  color: darkgreen;
`;



const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;


const NavBar = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo>K</Logo>
        <LogoText />
      </LogoContainer>
      <SearchBar placeholder="Search" />
      <NavMenu>
        <ProfileButton icon={<UserOutlined />}>Profile</ProfileButton>
        <LogoutButton icon={<LogoutOutlined />}>Logout</LogoutButton>
      </NavMenu>
    </NavContainer>
  );
};

export default NavBar;
