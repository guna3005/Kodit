import React from "react";
import NavBar from "../common/components/NavBar";
import styled from "styled-components";
import Favorites from "./body/Favorites";
import Hashtags from "./body/HashTags";
import CodePost from "./body/CodePost";
import Blog from "./body/Blogs";
import { postsData } from "../common/constants/PostsFakeData";

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 60% 20%;
  grid-template-rows: 50% 50%;
  height: 87vh;
`;

const FavoritesContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
`;

const HashtagsContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
`;

const BodyContentContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  overflow: scroll;
  height: 90vh;
`;

const BlogsContainer = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
`;

const Main = () => {
  return (
    <>
      <NavBar />
      <BodyContainer>
        <FavoritesContainer>
          <Favorites />
        </FavoritesContainer>
        <HashtagsContainer>
          <Hashtags />{" "}
        </HashtagsContainer>
        <BodyContentContainer>
          {postsData.map((post) => (
            <CodePost
              profileName={post.profileName}
              description={post.description}
              code={post.code}
              likeCount={post.likeCount}
              comments={post.comments}
            />
          ))}
        </BodyContentContainer>
        <BlogsContainer>
          <Blog />{" "}
        </BlogsContainer>
      </BodyContainer>
    </>
  );
};

export default Main;
