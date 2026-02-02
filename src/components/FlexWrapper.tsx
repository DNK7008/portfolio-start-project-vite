import styled from "styled-components";

type FlexWrapperPropsTypes = {
  display?: string;
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  flexWrap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsTypes>`
  display: ${(props) => props.display || "flex"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "stretch"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
`;
