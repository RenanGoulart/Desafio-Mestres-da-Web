import { 
  FormSection, 
  FormTitle, 
  LoginContainer, 
  Mask, 
  AccessAccount, 
  Form, 
  MarvelLogo, 
  Input, 
  LoginOptions,
  SaveLogin,
  Password,
  Button,
  RegisterPhrase } from './styles';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/authentication';
import { Head } from '../../components/Head';

export const Login = () => {
  const {login} = useContext(UserContext);
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any) {
    e.preventDefault();
    login(user, password);
  }
  
  function registerUser() {
    const username = prompt('Digite um nome de usuário:');
    const password = prompt('Digite uma senha:');

    const data = {
      username, password
    }
    localStorage.setItem('user', JSON.stringify(data));
  }

  return (
    <LoginContainer>
      <Head title='Marvel | Login' description='Login plataforma da Marvel' />
      <FormSection>
        <MarvelLogo>MARVEL</MarvelLogo>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Bem vindo(a) de volta!</FormTitle>
          <AccessAccount>Acesse sua conta:</AccessAccount>
          <Input 
            type="text" 
            placeholder='Usuário' 
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <Input 
            type="password" 
            placeholder='Senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginOptions>
            <SaveLogin htmlFor="save-login">
              <input type="checkbox" id='save-login' />
              Salvar login
            </SaveLogin>
            <Password onClick={registerUser}>Esqueci a senha</Password>
          </LoginOptions>
            <Button>Entrar</Button>
          <RegisterPhrase>Ainda não tem o login? <a onClick={registerUser}>Cadastre-se</a></RegisterPhrase>
        </Form>
      </FormSection> 
      <Mask />
    </LoginContainer>
  );
}
