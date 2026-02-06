import styled from "styled-components";
import photo from "../../assets/img/main-foto2.jpg";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      >
        <div>
          <span>Hi There</span>
          <h2>I am Denis Soroko</h2>
          <h1>A Web Developer.</h1>
        </div>
        {/* BOXPHOTO для позиционирования контента по центру */}
        {/* <BoxPhoto> */} 
          <Photo src={photo} alt="foto" />
        {/* </BoxPhoto> */}
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.main`
  min-height: 100vh;
  background-color: #685e54;
`;

// Стили для BOXPHOTO
// const BoxPhoto = styled.div`
//   position: relative;
//   overflow: hidden;
//   width: 350px;
//   height: 350px;
// `;
const Photo = styled.img`
  width: 480px;
  height: 350px;
  object-fit: cover;
  /* стили для позиционирования BOXPHOTO */
  /* position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 350px;
  object-fit: cover; */
  /* стили для позиционирования BOXPHOTO */
  border-radius: 23px;
`;

// const MainTitle = styled.h1``;
// const MainName = styled.h2``;
