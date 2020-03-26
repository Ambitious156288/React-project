import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import withContext from 'hoc/withContext';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 80px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 80px;
`;

const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 0;
  text-transform: capitalize;
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  right: 30px;
  bottom: 30px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50%;
  background-size: 30%;
  z-index: 1000;
`;

const GridTemplate = ({ children, pageContext }) => (
  <>
    <UserPageTemplate>
      <StyledWrapper>
        <StyledPageHeader>
          <Input search placeholder="Search" />
          <StyledHeading big as="h1">
            {pageContext}
          </StyledHeading>
          <StyledParagraph>6 {pageContext}</StyledParagraph>
        </StyledPageHeader>
        <StyledGrid>{children}</StyledGrid>
        <StyledButtonIcon icon={plusIcon} activeColor={pageContext} />
        <NewItemBar />
      </StyledWrapper>
    </UserPageTemplate>
  </>
);

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
