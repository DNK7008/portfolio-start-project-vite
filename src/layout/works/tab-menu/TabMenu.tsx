import styled from "styled-components";
import { Link } from "../../../components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link href="#">{item}</Link>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 40px;
  }
`;

