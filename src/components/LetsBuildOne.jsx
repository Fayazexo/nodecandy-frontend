import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled(Link)`
  border-radius: 5px;
  background: rgba(185, 24, 155, 1);
  white-space: nowrap;
  padding: 12px 40px;
  margin: 0 10px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: 1px rgba(185, 24, 155, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(185, 24, 155, 0.9);
    box-shadow: 0 3px 10px rgba(185, 24, 155, 0.2);
  }
`;
