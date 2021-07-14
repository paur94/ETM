import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonSecondary = styled(Link)`
  background: ${({secondary}) => (secondary ? "#38586e" : "#fff")};
  white-space: nowrap;
  border-radius: ${({round}) => (round ? "4px" : "none")};
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: ${({secondary}) => (secondary ? "#fff" : "#00b7d1")};
  font-size: 14px;
  outline: none;
  border: ${({border}) => (border ? "4px solid #38586e" : "none")};
  fill: #00b7d1;
  font-weight: normal;
  transition: all .3s;
  text-decoration: none !important;
  outline:none;

  &:hover {
    color: #38586e;
    background-color: #fff;
    cursor: pointer;
    border-color: #38586e;
  }
`