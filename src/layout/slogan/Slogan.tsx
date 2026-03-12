import styled from "styled-components"
import { Button } from "../../components/Button"
import { SectionTitle } from "../../components/SectionTitle"
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";

export const Slogan = () => { 
  return (
    <SectionSlogan>
      <Container>
        <FlexWrapper flexDirection="column" alignItems="center">
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire Me</Button>
        </FlexWrapper>
      </Container>
    </SectionSlogan>
  );
}

const SectionSlogan = styled.section`
`