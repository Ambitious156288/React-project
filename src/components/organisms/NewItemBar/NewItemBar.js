import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import withContext from 'hoc/withContext';
import Heading from 'components/atoms/Heading/Heading';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import { Formik, Form } from 'formik';

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

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const StyledTextArea = styled(Input)`
  height: 30vh;
  border-radius: 20px;
  margin: 30px 0 100px;
`;

const StyledInput = styled(Input)`
  margin: 20px 0;
`;

const NewItemBar = ({ pageContext, isVisible, addItem, handleClose }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <Formik
      initialValues={{ title: '', content: '', articleUrl: '', twitterName: '', created: '' }}
      onSubmit={values => {
        addItem(pageContext, values);
        handleClose();
      }}
    >
      {({ values, handleChange, handleBlur }) => (
        <StyledForm>
          <StyledInput
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.title}
          />
          {pageContext === 'twitters' && (
            <StyledInput
              placeholder="twitter name eg. hello_roman"
              type="text"
              name="twitterName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.twitterName}
            />
          )}
          {pageContext === 'articles' && (
            <StyledInput
              placeholder="link"
              type="text"
              name="articleUrl"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.articleUrl}
            />
          )}
          <StyledTextArea
            name="content"
            as="textarea"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.content}
          />
          <Button type="submit" activeColor={pageContext}>
            Add Note
          </Button>
        </StyledForm>
      )}
    </Formik>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
  isVisible: PropTypes.bool,
  addItem: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = dispatch => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
