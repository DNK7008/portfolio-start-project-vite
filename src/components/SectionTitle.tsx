import styled from "styled-components";
import { Theme } from "../styles/Theme";

export const SectionTitle = styled.h2`
  position: relative;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 0.14em;
  text-align: center;
  margin-bottom: 90px;

  &::before {
    content: "";
    display: inline-block;
    width: 55px;
    height: 1px;
    background-color: ${Theme.color.accent};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -30px;
  }
`;
