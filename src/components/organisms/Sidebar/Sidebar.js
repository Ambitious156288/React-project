import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import penIcon from 'assets/icons/pen.svg';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 190px;
  height: 100vh;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
  position: fixed;
  left: 0;
  top: 0;
`;

const Words = styled.p`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.bold};
  transform: rotate(25deg);
  letter-spacing: 2px;
  margin-top: 20px;
  margin-left: 0;
  text-decoration: underline;
`;

const NewWords = styled(Words)`
  transform: rotate(-10deg);
  margin-left: 50px;
`;

const Sidebar = ({ pageContext }) => (
  <StyledWrapper activeColor={pageContext}>
    <div>
      <NewWords>RELIEVE THE </NewWords>
      <Words>BOREDOM !!!</Words>
    </div>

    <div>
      <ButtonIcon exact as={NavLink} to="/notes" icon={penIcon} activeClassName="active" />
      <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeClassName="active" />
      <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeClassName="active" />
    </div>

    <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
