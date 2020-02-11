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
   FollowersContainer,
   Separator,
} from './styles';
import CardFollow from '../../components/CardFollow';

export default function Dashboard() {
   const [repositories, setRepositories] = useState([]);
   const [following, setFollowing] = useState([]);
   const [followers, setFollowers] = useState([]);

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

   useEffect(() => {
      async function fetchApi() {
         const response = await api.get(`/users/${profile.login}/followers`);
         setFollowers(response.data);
      }
      fetchApi();
   }, [profile]);

   useEffect(() => {
      async function fetchApi() {
         const response = await api.get(`/users/${profile.login}/following`);
         setFollowing(response.data);
      }
      fetchApi();
   }, [profile]);

   return (
      <Container container xs>
         <RepositoriesContainer xs={12} sm={8}>
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

         <FollowersContainer xs>
            <h1>Friends</h1>
            <CardFollow title="Following" list={following} />
            <Separator />
            <CardFollow title="Followers" list={followers} />
         </FollowersContainer>
      </Container>
   );
}
