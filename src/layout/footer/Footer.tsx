import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <SectionFooter>
      <FlexWrapper flexDirection="column" alignItems="center">
        <Name>Denis</Name>
        <SocialList>
          <SocialItem>
            <SocialIconLink>
              <Icon width="30px" height="30px" viewBox="0 0 30 30" iconId="instagramm" />
            </SocialIconLink>
          </SocialItem>
          <SocialItem>
            <SocialIconLink>
              <Icon width="30px" height="30px" viewBox="0 0 30 30" iconId="telegramm" />
            </SocialIconLink>
          </SocialItem>
          <SocialItem>
            <SocialIconLink>
              <Icon width="30px" height="30px" viewBox="0 0 30 30" iconId="vkLogo" />
            </SocialIconLink>
          </SocialItem>
          <SocialItem>
            <SocialIconLink>
              <Icon width="30px" height="30px" viewBox="0 0 30 30" iconId="linkedin" />
            </SocialIconLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2026 Denis Soroko, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </SectionFooter>
  );
};

const SectionFooter = styled.footer`
background-color: ${Theme.color.primaryBg};
padding: 40px 0;
`;

const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 700;
  font-size: 22px;
  letter-spacing: 0.14em;
  
`;

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 30px 0;
`;

const SocialItem = styled.li`
`;

const SocialIconLink = styled.a`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 35px;
  height: 35px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${Theme.color.accent};

  &:hover {
    color: ${Theme.color.primaryBg};
    transform: translateY(-4px);
  }
`;

const Copyright = styled.small`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  opacity: 0.5;
`;
