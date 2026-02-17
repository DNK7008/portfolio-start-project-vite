import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
import { FlexWrapper } from "../../../components/FlexWrapper";
type CardSkillPropsType = {
  icon: string;
  title: string;
  text: string;
};
export const CardSkill = (props: CardSkillPropsType) => {
  return (
    <StyledCardSkill>
      <FlexWrapper flexDirection="column" alignItems="center">
        <IconWrapper>
          <Icon iconId={props.icon} />
        </IconWrapper>
        <TitleSkill>{props.title}</TitleSkill>
        <TextSkill>{props.text}</TextSkill>
      </FlexWrapper>
    </StyledCardSkill>
  );
};
const StyledCardSkill = styled.div`
  width: 380px;
  padding: 68px 20px 42px;
`;

export const IconWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(-45deg) translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform-origin: top left;
  }
`;
const TitleSkill = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;
const TextSkill = styled.p`
  text-align: center;
`;
