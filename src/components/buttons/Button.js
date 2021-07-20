import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({primary}) => (primary ? "#fff" : "#00d353")};
  white-space: nowrap;
  border-radius: ${({round}) => (round ? "4px" : "none")};
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: ${({primary}) => (primary ? "#00b7d1" : "#fff")};
  font-size: 14px;
  outline: none;
  border: ${({border}) => (border ? "1px solid #00b7d1" : "none")};
  fill: #00b7d1;
  font-weight: normal;
  transition: all .3s;
  text-decoration: none !important;
  outline:none;

  &:hover {
    color: #ffffff;
    background-color: #00b7d1;
    cursor: pointer;
  }
`
