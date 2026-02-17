import styled from "styled-components";
import photo from "../../assets/img/main-foto4.jpg";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";
import { Container } from "../../components/Container";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <div>
            <SmallText>Hi There</SmallText>
            <NameText>
              I am <span>Denis Soroko</span>
            </NameText>
            <MainTitle>A Web Developer.</MainTitle>
          </div>
          <PhotoWrapper>
            <Photo src={photo} alt="foto" />
          </PhotoWrapper>
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: ${Theme.color.primaryBg};
`;

const SmallText = styled.h2`
  font-weight: 400;
  font-size: 14px;
`;

const NameText = styled.h2`
  font-family: "Josefin Sans", sans-serif;
  font-weight: 700;
  font-size: 50px;
  letter-spacing: 0.05em;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 1;
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      bottom: 0px;
      z-index: -1;
      width: 100%;
      height: 20px;
      background-color: ${Theme.color.accent};
    }
  }
`;

const MainTitle = styled.h1`
  font-weight: 400;
  font-size: 27px;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    width: 360px;
    height: 470px;
    border: 5px solid ${Theme.color.accent};

    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`;
const Photo = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  border-radius: 23px;
`;
