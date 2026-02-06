import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { SectionTitle } from "../../components/SectionTitle";
import { CardSkill } from "./card-skill/CardSkill";

export const Skills = () => {
  return (
    <StyledSkillsSection>
      <SectionTitle>My Skills</SectionTitle>
      <FlexWrapper
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="center"
        gap="30px"
      >
        <CardSkill
          icon={"htmlSkill"}
          title="HTML5"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <CardSkill
          icon="cssSkiil"
          title="CSS3"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <CardSkill
          icon="reactSkills"
          title="REACT"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <CardSkill
          icon="typescriptSkill"
          title="REACT"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <CardSkill
          icon="styledComponentsSkill"
          title="STYLED COMPONENTS"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
        <CardSkill
          icon="figmaSkill"
          title="WEB DESIGN"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua Ut enim"
        />
      </FlexWrapper>
    </StyledSkillsSection>
  );
};

const StyledSkillsSection = styled.section`
  background-color: #85837b;
`;
