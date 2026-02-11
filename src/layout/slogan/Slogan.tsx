import styled from "styled-components"
import { Button } from "../../components/Button"
import { SectionTitle } from "../../components/SectionTitle"
import { FlexWrapper } from "../../components/FlexWrapper";

export const Slogan = () => { 
  return (
    <SectionSlogan>
      <FlexWrapper flexDirection="column" alignItems="center">
        <SectionTitle>I Am Available For Freelance</SectionTitle>
        <Button>Hire Me</Button>
      </FlexWrapper>
    </SectionSlogan>
  );
}

const SectionSlogan = styled.section`
min-height: 20vh;
background-color: #83d6fc;
`