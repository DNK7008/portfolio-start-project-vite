import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Icon } from "../../components/icon/Icon";
import { Slider } from "../../components/slider/Slider";
import { FlexWrapper } from "../../components/FlexWrapper";
import { IconWrapper } from "../skills/card-skill/CardSkill";
import { Container } from "../../components/Container";

export const Testimony = () => {
  return (
    <SectionTestimony>
      <Container>
        <SectionTitle>Testimony</SectionTitle>
        <FlexWrapper alignItems="center" flexDirection="column">
          <IconWrapper>
            <Icon iconId="quote" />
          </IconWrapper>
          <Slider />
        </FlexWrapper>
      </Container>
    </SectionTestimony>
  );
};

const SectionTestimony = styled.section`

  ${IconWrapper} {
    margin: 40px 0 72px;
  }
`;

