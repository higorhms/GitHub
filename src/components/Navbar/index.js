import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Avatar, ProfileArea, Content, NavbarArea } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Navbar() {
   const dispatch = useDispatch();
   const profile = useSelector(
      state => state.user.profile && state.user.profile.user
   );

   function handleLogOut() {
      dispatch(signOut());
   }

   return (
      <Spring
         from={{ transform: 'translateY(-100%)' }}
         to={{ transform: 'translateY(0%)' }}
      >
         {props => (
            <Container>
               <Content>
                  <NavbarArea item>
                     <Link to="/dashboard">HOME</Link>
                     <Link to="/repositories">FINDER</Link>
                  </NavbarArea>
                  <aside>
                     <ProfileArea>
                        <Avatar
                           src={
                              profile.avatar_url ||
                              'https://api.adorable.io/avatars/95/abott@adorable.png'
                           }
                           alt="avatar"
                        />
                        <div>
                           <strong>{profile.name || ''}</strong>
                           <Link to="/" onClick={handleLogOut}>
                              Sair
                           </Link>
                        </div>
                     </ProfileArea>
                  </aside>
               </Content>
            </Container>
         )}
      </Spring>
   );
}
