import React from 'react';
import { Spring } from 'react-spring/renderprops';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome, FaCode } from 'react-icons/fa';
import {
   Container,
   Avatar,
   ProfileArea,
   Name,
   Bio,
   Menu,
   Separator,
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
            <Container style={props}>
               <div>
                  <ProfileArea>
                     <Avatar
                        src={
                           profile.avatar_url ||
                           'https://api.adorable.io/avatars/95/abott@adorable.png'
                        }
                        alt="avatar"
                     />
                     <Name>{profile.name || ''}</Name>
                     <Bio>
                        {'"'}
                        {profile.bio || ''}
                        {'"'}
                     </Bio>
                  </ProfileArea>
                  <Separator />
                  <Menu>
                     <Link to="/dashboard">
                        <FaHome size={20} />
                        Dashboard
                     </Link>
                     <Link to="/repositories">
                        <FaCode size={20} />
                        Repositories
                     </Link>
                  </Menu>
               </div>

               <button type="button" onClick={handleLogOut}>
                  Logout
               </button>
            </Container>
         )}
      </Spring>
   );
}
