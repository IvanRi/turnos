import React from 'react';
import styled, { css } from 'styled-components';

const Button = props => {
  return <StyledComponent
    {...props} >
    {props.children}
  </StyledComponent>;
};

const StyledComponent = styled.button`
  position: relative;
  overflow: hidden;
  border-radius: .8rem;
  border: none;
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  transition: all .3s ease;
  font-size:1.1rem;
  display:flex;
  align-items:center;
  &:focus {
    outline: none;
  };

  ${({ type }) => type === 'primary' ?
    css`
      background-color: ${({ theme }) => theme.palette.green};
      color: white;
    ` : css`
      background-color: ${({ theme }) => theme.palette.grey};
      color: white;
    `
  }
`;

export default Button;
