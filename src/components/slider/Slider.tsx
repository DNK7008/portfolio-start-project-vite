import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";

export const Slider = () => {
  return (
    <BoxSlider>
      <Slide>
        <FlexWrapper flexDirection="column">
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
          <Author>@ivan ivanow</Author>
        </FlexWrapper>
        <Pagination>
          <span></span>
          <span></span>
          <span></span>
        </Pagination>
      </Slide>
    </BoxSlider>
  );
};

const BoxSlider = styled.div`
  border: 1px solid red;
  max-width: 500px;
`;
const Slide = styled.div`
  text-align: center;
`;
const Text = styled.p``;
const Author = styled.span``;
const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 10px;
    background-color: #47a864;
  }
`;
