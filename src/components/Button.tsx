import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  background-color: #fb9300;
  color: #fff;
  font-size: 20px;
  padding: 15px 27px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  transition: all 0.1s ease;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
    transform: translateY(5px);
  }
`;

interface IButton {
  children: React.ReactNode;
  onClick?: React.ReactEventHandler;
}

export const Button: React.FC<IButton> = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};
