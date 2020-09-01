import React from 'react';
import { Layout } from 'antd';

import { LayoutWrapper, Logo } from './styles';
import logo from '@assets/images/logo.svg';

const { Header, Content } = Layout;

const Wrapper: React.FC = ({ children }) => (
  <LayoutWrapper>
    <Header>
      <Logo src={logo} alt="Logo" title="Logo" />
    </Header>
    <Content>{children}</Content>
  </LayoutWrapper>
);

export default Wrapper;
