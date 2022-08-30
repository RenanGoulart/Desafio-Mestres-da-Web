import styled, { keyframes } from "styled-components";
import bgImageUrl from '../../assets/images/bg.png'

// animations
const formIntro = keyframes`
  0%{
    opacity: 0;
  }
  50%,
  100%{
    opacity: 1;
  }
`;

const backgroundIntro = keyframes`
  0%{
    opacity: 1;
  }
  50%,
  100%{
    opacity: 0;
  }
`;

const logoIntro = keyframes`
  0%{
    top: 25%;
    left: 50%;
  }
  10%{
    top: 25%;
    left: 52.5%;
  }
  50%{
    top: 25%;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
`;

export const LoginContainer = styled.main`
  width: 100vw;

  display: flex;

  background-color: #000;
  background-image: url(${bgImageUrl});
  background-position: center;
  background-size: cover;
`;

export const FormSection = styled.section`
  width: 50%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  
  position: relative;
  z-index: 2;

  color: #fff;
  background-color: #000;
  box-shadow: 4rem 0 4rem 6rem rgba(0,0,0,.9);
`;


export const Mask = styled.div`
  width: 50%;
  height: 100vh;

  background-color: #000;

  animation: ${backgroundIntro} 3s 1s forwards;
`;

export const MarvelLogo = styled.h1`
  font-family: 'marvel';
  font-size: 8rem;
  font-weight: normal;
  
  align-self: center;
  
  height: 7.5rem;
  padding: 0 1rem;
  background-color: #ff0000;

  position: relative;
  top: 25%;
  left: 50%;

  animation: ${logoIntro} 3s .2s forwards;
`;

export const FormTitle = styled.h2`
  font-family: 'axiformaBold';
  font-size: 2rem;
  color: #ff0000;

  margin-bottom: -1rem;
`;

export const AccessAccount = styled.p`
  color: #84848d;
  font-size: 1.25rem;
  font-family: 'axiformaLight';
`;

export const Form = styled.form`
  width: 50%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  opacity: 0;
  animation: ${formIntro} 2s 2.2s forwards;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 2rem;

  font-family: 'axiformaLight';
  font-size: 1.25rem;

  outline: 0;
  border: 0;
  border-radius: 2rem;

  ::placeholder{
    color: #d1d1d6;
  }
`;

export const LoginOptions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SaveLogin = styled.label`
  font-size: 1rem;
  line-height: .5rem;
  color: #84848d;
  
  display: flex;
  align-items: center;
  gap: .25rem;

  cursor: pointer;
`;

export const Password = styled.a`
  color: #84848d;
  border-bottom: 1px solid #ff0000;
`;

export const Button = styled.button`
  width: 100%;
  padding: .75rem;
  
  font-size: 1.5rem;
  color: #fff;
  
  background-color: #ff0000;
  outline: 0;
  border: 0;
  border-radius: 2rem;  

  cursor: pointer;
`;

export const RegisterPhrase = styled.p`
  color: #84848d;

  & a{
    color: #ff0000;
    cursor: pointer;
  }
`;
