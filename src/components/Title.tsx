import React from 'react';
import styled from 'styled-components';
import { device } from 'utils/deviceMedia';

const TitleStyle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  @media ${device.mobile} {
    text-align: center;
  }
`;

interface ITitle {
  children: React.ReactNode;
}

export const Title: React.FC<ITitle> = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};
