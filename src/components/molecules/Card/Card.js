import React from 'react';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

const StyledWrapper = styled.div`
  box-shadow: 0 10px 30px -10px gray;
`;

const InnerWrapper = styled.div`
  padding: 15px 30px 10px;
  background-color: ${({ yellow, theme }) => (yellow ? theme.primary : 'white')};
`;

const Card = () => (
  <StyledWrapper>
    <InnerWrapper yellow>
      <Heading>Hello</Heading>
    </InnerWrapper>
    <InnerWrapper>
      <Paragraph>
        sdjasjhdiuashndcuijsahudhsauidxhujasihdnuashdsdjasjhdiuashndcuijsahudhsauidxhujasihdnuashduiasuias
      </Paragraph>
    </InnerWrapper>
    <Button secondary>REMOVE</Button>
  </StyledWrapper>
);

export default Card;
