import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";

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
        <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </SectionFooter>
  );
};

const SectionFooter = styled.footer`
  min-height: 20vh;
`;
const Name = styled.span``;
const SocialList = styled.ul`
  display: flex;
`;
const SocialItem = styled.li`
  list-style: none;
`;
const SocialIconLink = styled.a``;
const Copyright = styled.small``;
