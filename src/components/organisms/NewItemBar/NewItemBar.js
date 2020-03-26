import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  padding: 100px 50px;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0px 10px 1px ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 100;
`;

const StyledTextArea = styled(Input)`
  height: 30vh;
  border-radius: 20px;
  margin: 30px 0 100px;
`;

const NewItemBar = ({ pageContext }) => (
  <StyledWrapper>
    <Heading big> Create new {pageContext}</Heading>
    <Input placeholder="title" />
    <StyledTextArea as="textarea" placeholder="title" />
    <Button activeColor={pageContext}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.string.isRequired,
};

export default withContext(NewItemBar);
