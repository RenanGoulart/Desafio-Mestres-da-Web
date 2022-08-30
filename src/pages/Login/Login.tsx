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
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <LoginContainer>
        <FormSection>
          <MarvelLogo>MARVEL</MarvelLogo>
          <Form>
            <FormTitle>Bem vindo(a) de volta!</FormTitle>
            <AccessAccount>Acesse sua conta:</AccessAccount>
            <Input type="text" placeholder='Usuário' />
            <Input type="text" placeholder='Senha' />
            <LoginOptions>
              <SaveLogin htmlFor="save-login">
                <input type="checkbox" id='save-login' />
                Salvar login
              </SaveLogin>
              <Password href="#">Esqueci a senha</Password>
            </LoginOptions>
            <Link to={'personagens'}>
              <Button>Entrar</Button>
            </Link>
            <RegisterPhrase>Ainda não tem o login? <a>Cadastre-se</a></RegisterPhrase>
          </Form>
        </FormSection> 
        <Mask />
    </LoginContainer>
  );
}
