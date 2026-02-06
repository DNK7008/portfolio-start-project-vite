import styled from "styled-components";
import { SectionTitle } from "../../components/SectionTitle";
import { Menu } from "../../components/menu/Menu";

const workItems = ["All", "Landing page", "React", "SPA"];

export const Works = () => {
  return (
    <SectionWorks>
      <SectionTitle>My Works</SectionTitle>
      <Menu menuItems={workItems} />
    </SectionWorks>
  );
};

const SectionWorks = styled.section``;
