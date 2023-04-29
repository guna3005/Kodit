import React from "react";
import { Button, Layout, Typography } from "antd";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LogoText from "../common/styledElements/LogoText";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const HomePageContainer = styled(Layout)`
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


const NavContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ContentContainer = styled(Content)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  max-width: 800px;
  text-align: center;
`;

const Heading = styled(Title)`
  margin-bottom: 24px;
  text-align: center;
  color: white !important;
`;

const Subheading = styled(Paragraph)`
  margin-bottom: 24px;
  text-align: center;
  font-size: 18px;
  line-height: 1.5;
  color: #28a745;
`;

const Description = styled(Paragraph)`
  margin-bottom: 24px;
  text-align: center;
  font-size: 16px;
  line-height: 1.5;
  color: #28a745;
`;

const GetStartedButton = styled(Button)`
  background-color: #28a745;
  border-color: #28a745;

  &:hover,
  &:focus {
    background-color: #218838;
    border-color: #218838;
  }
`;

const HomePage = () => {
  const history = useHistory();
  const title = "Discover and share code with other developers.";
  const subheading =
    "KODIT is the perfect platform to connect with other developers and take your coding skills to the next level.";
  const description =
    "KODIT is a social media platform designed specifically for developers, coders, and programming enthusiasts. With an emphasis on community building, knowledge sharing, and fun, KODIT offers a unique and engaging way to learn, collaborate, and explore the world of coding.\nThe world of coding can often be a solitary one, with developers working in isolation for long hours. KODIT aims to change that by providing a platform where developers can connect with like-minded individuals from all over the world. Whether youre a seasoned pro or just starting out, KODIT offers a supportive community where you can learn, share, and grow.\nOur platform features a user-friendly interface that makes it easy to explore new ideas, share code snippets, and collaborate on projects with others. We believe that learning programming should be fun and engaging, which is why we've created a platform that encourages exploration and experimentation.\nKODIT also provides an opportunity for professionals to showcase their skills and knowledge, and for newcomers to learn from the best. With access to a wide range of programming languages, tools, and frameworks, KODIT offers a one-stop-shop for all your coding needs.\nSo whether you're looking to learn something new, collaborate with others, or simply explore the world of programming, KODIT is the perfect platform for you. Join us today and start your coding journey with a supportive and engaging community.";

  return (
    <HomePageContainer>
      <HeaderContainer>
        <LogoContainer>
          <Logo>K</Logo>
          <LogoText />
        </LogoContainer>
        <NavContainer>
          <Button type="primary" onClick={() => history.push("/login")}>
            Login
          </Button>
          <Button onClick={() => history.push("/register")}>Register</Button>
        </NavContainer>
      </HeaderContainer>
      <ContentContainer>
        <TextContainer>
          <Heading level={1}>{title}</Heading>
          <Subheading>{subheading}</Subheading>
          <Description>{description}</Description>
          <GetStartedButton size="large" onClick={() => history.push("/register")}>
            Get Started
          </GetStartedButton>
        </TextContainer>
      </ContentContainer>
    </HomePageContainer>
  );
};

export default HomePage;
