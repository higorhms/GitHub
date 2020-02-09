import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome, FaRProject, FaCode } from 'react-icons/fa';
import {
   Container,
   Avatar,
   ProfileArea,
   Name,
   Bio,
   Menu,
   MenuItem,
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
      <Container>
         <div>
            <ProfileArea>
               <Avatar src={profile.avatar_url} alt="avatar" />
               <Name>{profile.name}</Name>
               <Bio>
                  {'"'}
                  {profile.bio}
                  {'"'}
               </Bio>
            </ProfileArea>
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
            Sair
         </button>
      </Container>
   );
}
