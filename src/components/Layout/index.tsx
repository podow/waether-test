import React from 'react';

import { MainWrapper, Header, Logo } from './styles';

import Container from '../Container';

import logo from '@assets/images/logo.svg';

const Layout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <Header>
        <Container>
          <Logo src={logo} alt="logo" />
        </Container>
      </Header>
      <main>{children}</main>
    </MainWrapper>
  );
};

export default Layout;
