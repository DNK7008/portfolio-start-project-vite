import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Icon } from "../../components/icon/Icon";

export const Skills = () => {
  return (
    <StyledSectionSkills>
      <StyledSectionTitle></StyledSectionTitle>
      <FlexWrapper>
        <StyledSkillCard>
          <Icon iconId={"htmlSkill"} />
        </StyledSkillCard>
      </FlexWrapper>
    </StyledSectionSkills>
  );
};

const StyledSectionSkills = styled.section``;
const StyledSectionTitle = styled.div``;
const StyledSkillCard = styled.div``;
