import React from "react";
import { Button, Form, Input, Layout, Typography } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LogoText from "../common/styledElements/LogoText";

const { Header, Content } = Layout;
const { Title } = Typography;

const RegistrationContainer = styled(Layout)`
  height: 100vh;
  background-color: #000;
  color: #28a745;
`;

const HeaderContainer = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

const FormContainer = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled(Form)`
  max-width: 400px;
  width: 100%;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled(Title)`
  margin-bottom: 24px;
  text-align: center;
  /* color: white !important; */
`;

const NavContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const FormButton = styled(Button)`
  background-color: #28a745;
  border-color: #28a745;
  margin-top: 16px;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #218838;
    border-color: #218838;
  }
`;

const HomePageButton = styled(Button)`
  background-color: #28a745;
  border-color: #28a745;

  &:hover,
  &:focus {
    background-color: #218838;
    border-color: #218838;
  }
`;

const RegistrationPage = () => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo); // Handle form validation errors
  };

  return (
    <RegistrationContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo>K</Logo>
          <LogoText />
        </LogoContainer>
        <NavContainer>
          <HomePageButton onClick={() => history.push("/")}>
            Home
          </HomePageButton>
          <Button type="primary" onClick={() => history.push("/login")}>
            Login
          </Button>
        </NavContainer>
      </HeaderContainer>
      <FormContainer>
        <FormWrapper
          name="registration"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormTitle level={3}>Create an account</FormTitle>
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <FormButton htmlType="submit">Register</FormButton>
          </Form.Item>
        </FormWrapper>
      </FormContainer>
    </RegistrationContainer>
  );
};

export default RegistrationPage;
