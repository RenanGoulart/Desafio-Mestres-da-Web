import { NavLink } from 'react-router-dom';
import { HeaderContainer, MarvelLogo, Menu } from './styles';
import profilePicUrl from  "../../assets/images/profile-picture.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <MarvelLogo>MARVEL</MarvelLogo>
      <Menu>
        <li>
          <NavLink 
            to='/personagens' 
            style={({isActive}): {color: string} => isActive ? {color: '#fff'} : {color: '#707070'}}
          >
            Personagens
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/filmes' 
            style={({isActive}): {color: string} => isActive ? {color: '#fff'} : {color: '#707070'}}
          >
            Filmes
          </NavLink>
        </li>
        <li>
          <NavLink 
            to='/hqs' 
            style={({isActive}): {color: string} => isActive ? {color: '#fff'} : {color: '#707070'}}
          >
            HQs
          </NavLink>
        </li>
        <div>
          <img src={profilePicUrl} alt="" />
          <span>
            <NavLink to='/'>
            Sair
            </NavLink>
          </span>
        </div>
      </Menu>
    </HeaderContainer>
  )
}

