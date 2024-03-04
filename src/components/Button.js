import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

function Button({ text, link }) {
  return (
    <Link to={link}>
      {' '}
      <Container>{text}</Container>
    </Link>
  );
}
const Container = styled.button`
  color: ${theme.colors.white};
  background: ${theme.colors.black};
  width: 140px;
  height: 55px;
  border-radius: 12px;
  cursor: pointer;
`;
export default Button;
