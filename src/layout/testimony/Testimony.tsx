import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { Slider } from "../../components/slider/Slider";
import { FlexWrapper } from "../../components/FlexWrapper";

export const Testimony = () => {
  return (
    <SectionTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper alignItems="center" flexDirection="column" >
        <Icon iconId="quote" />
        <Slider />
      </FlexWrapper>
    </SectionTestimony>
  );
};

const SectionTestimony = styled.section`
min-height:30vh;
background-color: #edf88c`;
