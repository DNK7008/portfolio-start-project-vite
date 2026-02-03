import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Skills = () => {
  return (
    <StyledSkillsSection>
      <StyledSkillsTitle>My Skills</StyledSkillsTitle>
      <FlexWrapper flexWrap="wrap" justifyContent="center" alignItems="center">
        <StyledCardSkill>
          <Icon iconId={"htmlSkill"} />
          <TitleCard>html5</TitleCard>
          <AboutTextCard>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </AboutTextCard>
        </StyledCardSkill>
        <StyledCardSkill>
          <Icon iconId={"htmlSkill"} />
          <TitleCard>html5</TitleCard>
          <AboutTextCard>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </AboutTextCard>
        </StyledCardSkill>
        <StyledCardSkill>
          <Icon iconId={"htmlSkill"} />
          <TitleCard>html5</TitleCard>
          <AboutTextCard>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </AboutTextCard>
        </StyledCardSkill>
        <StyledCardSkill>
          <Icon iconId={"htmlSkill"} />
          <TitleCard>html5</TitleCard>
          <AboutTextCard>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </AboutTextCard>
        </StyledCardSkill>
        <StyledCardSkill>
          <Icon iconId={"htmlSkill"} />
          <TitleCard>html5</TitleCard>
          <AboutTextCard>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </AboutTextCard>
        </StyledCardSkill>
        <StyledCardSkill>
          <Icon iconId={"htmlSkill"} />
          <TitleCard>html5</TitleCard>
          <AboutTextCard>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </AboutTextCard>
        </StyledCardSkill>
      </FlexWrapper>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.section``;
const StyledSkillsTitle = styled.div``;
const StyledCardSkill = styled.div`
  max-width: 380px;
  min-height: 338px;
`;
const TitleCard = styled.h3``;
const AboutTextCard = styled.p``;

