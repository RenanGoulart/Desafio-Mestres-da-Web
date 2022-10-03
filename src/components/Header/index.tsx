import { NavLink } from 'react-router-dom';
import { HeaderContainer, MarvelLogo, Menu, MenuBtn } from './styles';
import profilePicUrl from  "../../assets/images/profile-picture.svg";
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/authentication';


export const Header = () => {
  const {logout} = useContext(UserContext);
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <HeaderContainer>
      <MarvelLogo>MARVEL</MarvelLogo>
      <MenuBtn mobileMenu={mobileMenu} onClick={() => setMobileMenu(!mobileMenu)}>
        <span></span>
      </MenuBtn>
      <Menu mobileMenu={mobileMenu}>
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
      </Menu>
      <div className='profileBox'>
          <img src={profilePicUrl} alt="" />
          <span onClick={logout}>
            Sair
          </span>
        </div>
    </HeaderContainer>
  )
}

