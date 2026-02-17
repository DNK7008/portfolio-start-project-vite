import styled from "styled-components";
import { Link } from "../../../components/Link";
import { Theme } from "../../../styles/Theme";

type WorkPropsType = {
  src: string;
  title: string;
  text: string;
};
export const Work = (props: WorkPropsType) => {
  return (
    <BoxCard>
      <WrapperImage>
        <Image src={props.src} alt="image" />
      </WrapperImage>
      <WrapperAbout>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href="#">Demo</Link>
        <Link href="#">Code</Link>
      </WrapperAbout>
    </BoxCard>
  );
};

const BoxCard = styled.div`
  background-color: ${Theme.color.secondaryBg};
  max-width: 540px;
  height: 100%;

  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`;
const WrapperImage = styled.div`
  position: relative;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      fill: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(8px);
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
`;

const WrapperAbout = styled.div`
  padding: 25px;
`;
const Title = styled.h3``;
const Text = styled.p`
  padding: 10px 0 14px;
`;
