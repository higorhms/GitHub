import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome, FaCode } from 'react-icons/fa';
import { GiExitDoor } from 'react-icons/gi';
import {
   Container,
   Avatar,
   ProfileArea,
   Name,
   Bio,
   Menu,
   Separator,
   LogoutResponsible,
   MenuItemContainer,
} from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Navbar() {
   const dispatch = useDispatch();
   const profile = useSelector(
      state => state.user.profile && state.user.profile.user
   );
   console.log(profile);

   function handleLogOut() {
      dispatch(signOut());
   }

   return (
      <Spring
         from={{ transform: 'translateX(-100%)' }}
         to={{ transform: 'translateX(0%)' }}
      >
         {props => (
            <Container style={props} item sm={2} xs={12}>
               <div>
                  <ProfileArea>
                     <div>
                        <Avatar
                           src={
                              profile.avatar_url ||
                              'https://api.adorable.io/avatars/95/abott@adorable.png'
                           }
                           alt="avatar"
                        />
                        <Name>{profile.name || ''}</Name>
                     </div>
                     <Bio>
                        {'"'}
                        {profile.bio || ''}
                        {'"'}
                     </Bio>
                  </ProfileArea>
                  <Separator />
                  <Menu>
                     <MenuItemContainer>
                        <Link to="/dashboard">
                           <FaHome size={20} />
                           <p>Dashboard</p>
                        </Link>
                        <Link to="/repositories">
                           <FaCode size={20} />
                           <p>Repositories</p>
                        </Link>
                     </MenuItemContainer>
                     <LogoutResponsible>
                        <Link to="/" onClick={handleLogOut}>
                           <GiExitDoor size={20} color="#111" />
                        </Link>
                     </LogoutResponsible>
                  </Menu>
               </div>

               <button type="button" onClick={handleLogOut}>
                  <GiExitDoor size={20} color="#111" />
                  Logout
               </button>
            </Container>
         )}
      </Spring>
   );
}
