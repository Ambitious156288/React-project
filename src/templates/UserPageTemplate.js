import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';
// import styled from 'styled-components';
// import Input from 'components/atoms/Input/Input';
// import Heading from 'components/atoms/Heading/Heading';
// import Paragraph from 'components/atoms/Paragraph/Paragraph';

// const StyledWrapper = styled.div`
//   padding: 25px 150px 25px 80px;
// `;

// const StyledGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   grid-gap: 80px;
// `;

// const StyledPageHeader = styled.div`
//   margin: 25px 0 50px 0;
// `;

// const StyledHeading = styled(Heading)`
//   margin: 0;
//   text-transform: capitalize;
// `;

// const StyledParagraph = styled(Paragraph)`
//   margin: 0;
//   font-weight: ${({ theme }) => theme.bold};
// `;

const UserPageTemplate = ({ children, pageType }) => (
  <>
    <Sidebar pageType={pageType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  children: PropTypes.oneOf([(PropTypes.element, PropTypes.node)]).isRequired,
  pageType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  pageType: 'notes',
};

export default UserPageTemplate;
