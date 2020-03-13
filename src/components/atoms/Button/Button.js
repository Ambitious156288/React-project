import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  /* background-color: ${({ color }) => color || 'yellow'}; */
  background-color: ${({ theme }) => theme.tertiary};
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: gray;
      width: 100px;
      height: 30px;
      font-size: 10px;
    `}
`;

export default Button;
