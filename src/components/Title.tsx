import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.h2`
  font-weight: 700;
  font-size: 32px;
`;

interface ITitle {
  children: React.ReactNode;
}

const Title: React.FC<ITitle> = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default Title;
