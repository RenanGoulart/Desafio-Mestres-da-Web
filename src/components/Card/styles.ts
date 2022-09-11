import styled from "styled-components";
import { CardProps, CardDescriptionProps } from "./Card";

export const CardContainer = styled('div')<CardProps>`
  max-width: 350px;
  height: 60vh;

  flex-shrink: 0;
  
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 2rem;

`;

export const CardDescription = styled.div`
  min-height: 50%;

  padding: .5rem 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  top: 50%;

  color: #fff;
  
  background-image: linear-gradient(to bottom, rgb(256,0,0,1), rgb(256,0,0,.2) );
  border-radius: 2rem;

  & p{
    font-family: 'axiformaThin';
    font-size: .8rem;
  }
  & :last-child{
    margin-top: auto;
    font-family: 'axiformaThin';
    font-size: 1.2rem;

    cursor: pointer;

    transition: .3s;
    &:hover {
      transform: scale(1.1);
    }
  }  
`;

export const FullCardDescription = styled.div`
  display: block;

  width: 100%;
  height: 100%;

  position: relative;
  left: 80%;
  z-index: -1;

  background: blue;
  border-radius: 2rem;
`;

