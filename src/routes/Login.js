import React from "react";
import { Button, Form, Input, Layout, Typography } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LogoText from "../common/styledElements/LogoText";


const { Header, Content } = Layout;
const { Title } = Typography;

const LoginContainer = styled(Layout)`
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

// const LogoText = styled(Title)`
//   margin-top: 15px;
//   font-size: 24px;
// `;

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



const LoginPage = () => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo); // Handle form validation errors
  };

  return (
    <LoginContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo>K</Logo>
          <LogoText />
        </LogoContainer>
        <NavContainer>
          <Button onClick={() => history.push("/")}>Home</Button>
          <Button type="primary" onClick={() => history.push("/register")}>
            Register
          </Button>
        </NavContainer>
      </HeaderContainer>
      <FormContainer>
        <FormWrapper
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <FormTitle level={3}>Login to your account</FormTitle>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <FormButton htmlType="submit">Login</FormButton>
          </Form.Item>
        </FormWrapper>
      </FormContainer>
    </LoginContainer>
  );
};

export default LoginPage;
