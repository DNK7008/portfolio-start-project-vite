import styled from "styled-components";

type WorkPropsType = {
  src: string;
  title: string;
  text: string;
};
export const Work = (props: WorkPropsType) => {
  return (
    <BoxCard>
      <Image src={props.src} alt="image" />
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <Link href="#">Demo</Link>
      <Link href="#">Code</Link>
    </BoxCard>
  );
};

const BoxCard = styled.div``;
const Image = styled.img``;
const Title = styled.h3``;
const Text = styled.p``;
const Link = styled.a``;
