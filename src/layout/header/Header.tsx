import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";

const menuItems = ["Home", "Skills", "Works", "Testimony", "Contact"];
export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justifyContent="space-between" alignItems="center">
          <Logo />
          <Menu menuItems={menuItems} />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgba(31, 31, 32, 90%);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`;
