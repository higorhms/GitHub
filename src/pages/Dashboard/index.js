/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FaBook } from 'react-icons/fa';
import api from '../../services/api';

import {
   Container,
   RepositoriesContainer,
   List,
   ListItem,
   Name,
   Description,
   Language,
} from './styles';

export default function Dashboard() {
   const [repositories, setRepositories] = useState([]);
   const profile = useSelector(
      state => state.user.profile && state.user.profile.user
   );

   useEffect(() => {
      async function fetchApi() {
         const response = await api.get(`/users/${profile.login}/repos`);
         setRepositories(response.data);
      }
      fetchApi();
   }, [profile]);

   return (
      <Container>
         <RepositoriesContainer>
            <h1>Your Repositories</h1>
            <List>
               {repositories &&
                  repositories.map(r => (
                     <a
                        target="_blank"
                        href={`https://github.com/${profile.login}/${r.name}`}
                        key={r.id}
                     >
                        <ListItem>
                           <Name>
                              <div>
                                 <FaBook size={15} /> {r.name}
                              </div>
                              <Language>{r.language}</Language>
                           </Name>
                           <Description>{r.description}</Description>
                        </ListItem>
                     </a>
                  ))}
            </List>
         </RepositoriesContainer>
      </Container>
   );
}
