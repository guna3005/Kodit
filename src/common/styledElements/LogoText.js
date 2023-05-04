import React from "react";
import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;

const LogoTextTItle = styled(Title)`
  margin-top: 15px;
  font-size: 24px;

  span:nth-child(1),
  span:nth-child(5) {
    color: white;
  }

  span:nth-child(2),
  span:nth-child(4) {
    color: red;
  }

  span:nth-child(3) {
    color: blue;
  }
`;

const LogoText = () => {
  return (
    <LogoTextTItle>
      <span>K</span>
      <span>O</span>
      <span>D</span>
      <span>I</span>
      <span>T</span>
    </LogoTextTItle>
  );
};

export default LogoText;
