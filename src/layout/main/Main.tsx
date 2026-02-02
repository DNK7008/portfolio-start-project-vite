import styled from "styled-components";
import photo from "../../assets/img/main-foto.webp";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Main = () => {
  return (
    <MainContainer>
      <FlexWrapper
        justifyContent="space-around"
        alignItems="center"
        flexWrap="nowrap"
      >
      <div>
        <span>Hi There</span>
        <h2>I am Svetlana Dyablo</h2>
        <h1>A Web Developer.</h1>
      </div>
      <Photo src={photo} alt="foto" />
      </FlexWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.main`
  min-height: 100vh;
  background-color: #fdc4c4;
`;
const Photo = styled.img`
  width: 350px;
  min-height: 350px;
  object-fit: cover;
`;

const MainTitle = styled.h1``;
const MainName = styled.h2``;
