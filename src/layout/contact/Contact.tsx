import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Button } from "../../components/Button";

export const Contact = () => {
  return (
    <SectionContact>
      <SectionTitle>Contact</SectionTitle>
      <BoxForm>
        <FlexWrapper flexDirection="column" gap="10px">
          <Field placeholder="Name"/>
          <Field placeholder="Subject"/>
          <Field placeholder="Message" as="textarea" />
          <Button type="submit">Send Message</Button>
        </FlexWrapper>
      </BoxForm>
    </SectionContact>
  );
};

const SectionContact = styled.section`
height: 30vh`;
const BoxForm = styled.div`
margin: 0 auto;
max-width: 560px;
`;
const Field = styled.input``;
