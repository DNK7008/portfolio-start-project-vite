import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { Slider } from "../../components/slider/Slider";
import { FlexWrapper } from "../../components/FlexWrapper";
import { IconWrapper } from "../skills/card-skill/CardSkill";

export const Testimony = () => {
  return (
    <SectionTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <FlexWrapper alignItems="center" flexDirection="column">
        <IconWrapper>
          <Icon iconId="quote" />
        </IconWrapper>
        <Slider />
      </FlexWrapper>
    </SectionTestimony>
  );
};

const SectionTestimony = styled.section`
  /* min-height: 50vh; */

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`;

