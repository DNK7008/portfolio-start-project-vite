import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Theme } from "../../styles/Theme";

export const Contact = () => {
  return (
    <SectionContact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <BoxForm>
          <FlexWrapper flexDirection="column" alignItems="center" gap="16px">
            <Field placeholder="Name"/>
            <Field placeholder="Subject"/>
            <Field placeholder="Message" as="textarea" />
            <Button type="submit">Send Message</Button>
          </FlexWrapper>
        </BoxForm>
      </Container>
    </SectionContact>
  );
};

const SectionContact = styled.section``;

const BoxForm = styled.form`
margin: 0 auto;
max-width: 540px;
width: 100%;

textarea {
  resize: none;
}
`;
const Field = styled.input`
  width: 100%;
  padding: 7px 15px;
  background-color: ${Theme.color.secondaryBg};
  border: 1px solid ${Theme.color.borderColor};
  font-family: "Popins", sans-serif;
  font-size: 12px;
  letter-spacing: 0.05em;
  color: ${Theme.color.font};
  &::placeholder {
    color: ${Theme.color.placeholderColor};
    text-transform: capitalize;
  }
  &:focus-visible {
    outline: 1px solid ${Theme.color.borderColor}
  }


`;
