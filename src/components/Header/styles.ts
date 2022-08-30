import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-height: 15%;

  display: flex;
  justify-content: space-between;

  padding: 1.5rem 3rem;

  position: relative;
  z-index: 10;
  
  background-color: #000;
  box-shadow: 0 .1rem 1rem .01rem #ff0000;
`;

export const Menu = styled.nav`
  font-size: 2rem;

  display: flex;
  align-items: center;
  gap: 7rem;

  list-style: none;

  & li a{
    color: #707070;
  }

  & div{
    display: flex;
    align-items: center;
    gap: 1rem;

    margin-right: 4rem;

    & a{
      font-family: 'axiformaLight';
      font-size: 1.25rem;
      color: #707070;
    }
  }
`;

export const MarvelLogo = styled.h1`
  font-family: 'marvel';
  font-size: 4rem;
  font-weight: normal;
  color: #fff;
  
  align-self: center;
  
  height: 3.6rem;
  padding: 0 .5rem;
  background-color: #ff0000;
`;
