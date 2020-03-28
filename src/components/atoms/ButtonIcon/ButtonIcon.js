import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border: none;
  margin-bottom: 10px;
  background-color: ${({ active }) => (active ? 'white' : 'transparent')};

  &.active {
    background-color: white;
  }
`;

export default ButtonIcon;
