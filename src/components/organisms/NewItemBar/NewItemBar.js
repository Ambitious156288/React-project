import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

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
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 100;
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.2s;
`;

const StyledTextArea = styled(Input)`
  height: 30vh;
  border-radius: 20px;
  margin: 30px 0 100px;
`;

const StyledInput = styled(Input)`
  margin: 20px 0;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big> Create new {pageContext}</Heading>
    <StyledInput placeholder={pageContext === 'twitters' ? 'Account Name' : 'title'} />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="title" />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: 'aa',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectu',
        })
      }
      activeColor={pageContext}
    >
      Add Note
    </Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
