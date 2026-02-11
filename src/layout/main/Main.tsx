import styled from "styled-components";
import photo from "../../assets/img/main-foto2.jpg";
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
            <span>Hi There</span>
            <h2>I am Denis Soroko</h2>
            <h1>A Web Developer.</h1>
          </div>
          <Photo src={photo} alt="foto" />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: ${Theme.color.primaryBg};
`;

const Photo = styled.img`
  width: 480px;
  height: 350px;
  object-fit: cover;
  border-radius: 23px;
`;
