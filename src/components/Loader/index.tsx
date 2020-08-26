import React from 'react';

import { LoaderWrapper } from './styles';

const Loader = () => (
  <LoaderWrapper>
    <div className="caption">
      <div className="cube-loader">
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
        <div className="cube" />
      </div>
    </div>
  </LoaderWrapper>
);

export default Loader;
