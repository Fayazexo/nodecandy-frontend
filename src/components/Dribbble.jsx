import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled(Link)`
  border-radius: 5px;
  background: transparent;
  white-space: nowrap;
  padding: 12px 40px;
  margin: 10px 10px;
  color: #111;
  font-size: 16px;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 3px 10px rgba(44, 44, 44, 0.2);
  }
`;
