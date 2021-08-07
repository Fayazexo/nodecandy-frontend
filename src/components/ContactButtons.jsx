import { Link } from 'react-scroll';
import styled from 'styled-components';

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary ?  '#B9189B' : '#010606')};
  white-space: nowrap;
  padding: 12px;
  color: ${({dark}) =>  (dark ? '#fff' : '#fff')};
  font-size:${({fontBig}) =>  (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  font-size: 30px;
  margin-right: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
  }
`