import styled from 'styled-components';
import { mainColor } from '../../variables';

export const MainWrapper = styled.div``;

export const Header = styled.header`
  background-color: ${mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Logo = styled.img`
  height: 15vmin;
  pointer-events: none;
`;
