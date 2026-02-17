import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { TabMenu } from "./tab-menu/TabMenu";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Work } from "./card-work/Work";
import cardImageSocial from "./../../assets//img/social-work_1.webp";
import cardImageTimer from "./../../assets//img/timer_1.webp";
import { Container } from "../../components/Container";

const workItems = ["All", "Landing page", "React", "SPA"];

export const Works = () => {
  return (
    <SectionWorks>
      <Container>
        <SectionTitle>My Works</SectionTitle>
        <TabMenu menuItems={workItems} />
        <FlexWrapper justifyContent="space-between" alignItems="flex-start">
          <Work
            src={cardImageSocial}
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
          <Work
            src={cardImageTimer}
            title="Social Network"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
          />
        </FlexWrapper>
      </Container>
    </SectionWorks>
  );
};

const SectionWorks = styled.section``;
