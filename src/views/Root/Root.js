import React from 'react';
// import styled from 'styled-components';
// import logo from '../../logo.svg';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <>
    <GlobalStyle />
    <Button>Close / Save</Button>
    <Button secondary>Remove</Button>
  </>
);

export default Root;
