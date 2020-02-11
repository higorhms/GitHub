/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FaBook } from 'react-icons/fa';
import {
   Container,
   RepositoriesContainer,
   List,
   ListItem,
   Name,
   Description,
   Language,
   Avatar,
   Separator,
   AvatarContainer,
   FollowersContainer,
} from './styles';
import api from '../../services/api';
import CardFollow from '../../components/CardFollow';

export default function FriendRepositories({ match }) {
   const [repositories, setRepositories] = useState([]);
   const [following, setFollowing] = useState([]);
   const [followers, setFollowers] = useState([]);
   const [profile, setProfile] = useState({});
   const { name } = match.params;

   useEffect(() => {
      async function fetchApi() {
         const response = await api.get(`/users/${name}/repos`);
         setRepositories(response.data);
      }
      fetchApi();
   }, [name]);

   useEffect(() => {
      async function fetchMyApi() {
         const response = await api.get(`/users/${name}`);
         setProfile(response.data);
      }
      fetchMyApi();
   }, [name]);

   useEffect(() => {
      async function fetchApi() {
         const response = await api.get(`/users/${name}/followers`);
         setFollowers(response.data);
      }
      fetchApi();
   }, [name]);

   useEffect(() => {
      async function fetchApi() {
         const response = await api.get(`/users/${name}/following`);
         setFollowing(response.data);
      }
      fetchApi();
   }, [name]);

   return (
      <Container container item xs>
         <RepositoriesContainer item xs={12} sm={8}>
            <AvatarContainer>
               <Avatar
                  src={
                     profile.avatar_url ||
                     'https://api.adorable.io/avatars/95/abott@adorable.png'
                  }
                  alt="avatar"
               />
               <h1>{name}</h1>
            </AvatarContainer>
            <Separator />
            <List>
               {repositories &&
                  repositories.map(r => (
                     <a
                        target="_blank"
                        href={`https://github.com/${name}/${r.name}`}
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

         <FollowersContainer item xs>
            <h1>Friends</h1>
            <CardFollow title="Following" list={following} />
            <Separator />
            <CardFollow title="Followers" list={followers} />
         </FollowersContainer>
      </Container>
   );
}

FriendRepositories.propTypes = {
   match: PropTypes.shape({
      params: PropTypes.shape({
         name: PropTypes.string,
      }),
   }).isRequired,
};
