import React, { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Avatar, ProfileArea, Content, NavbarArea } from './styles';
import { AuthContext } from '../../hooks/AuthContext';

export default function Navbar() {
   const [profile, setProfile] = useState({});
   const {user, signOut}  = useContext(AuthContext);


   useEffect(()=>{
     if(user){
       setProfile(user);
     }
  },[user])

   function handleLogOut() {
    signOut();
  }

   return (
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
   );
}
