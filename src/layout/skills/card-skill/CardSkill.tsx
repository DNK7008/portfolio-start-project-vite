import styled from "styled-components";
import { Icon } from "../../../components/icon/Icon";
type CardSkillPropsType = {
  icon: string;
  title: string;
  text: string;
};
export const CardSkill = (props: CardSkillPropsType) => {
  return (
    <StyledCardSkill>
      <Icon iconId={props.icon} />
      <TitleSkill>{props.title}</TitleSkill>
      <TextSkill>{props.text}</TextSkill>
    </StyledCardSkill>
  );
};
const StyledCardSkill = styled.div`
  max-width: 380px;
  min-height: 338px;
`;
const TitleSkill = styled.h3``;
const TextSkill = styled.p``;
