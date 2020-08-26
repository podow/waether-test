import React from 'react';

import { MainWrapper, Header, Logo } from './styles';

import logo from '@assets/images/logo.svg';

const Main: React.FC = () => {
  return (
    <MainWrapper>
      <Header>
        <Logo src={logo} alt="logo" />
      </Header>
    </MainWrapper>
  );
};

export default Main;
