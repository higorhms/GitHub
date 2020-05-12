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
        const [repositoriesResponse,profileReponse, followersResponse, followingResponse] = await Promise.all([
         api.get(`/users/${name}/repos`),
         api.get(`/users/${name}`),
         api.get(`/users/${name}/followers`),
         api.get(`/users/${name}/following`)
        ])

         setRepositories(repositoriesResponse.data);
         setProfile(profileReponse.data);
         setFollowers(followersResponse.data);
         setFollowing(followingResponse.data);
      }
      fetchApi();
   }, [name]);

   return (
      <Container>
         <RepositoriesContainer>
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
                                 <FaBook size={15} />
                                 <p>{r.name}</p>
                              </div>
                              <Language>{r.language}</Language>
                           </Name>
                           <Description>{r.description}</Description>
                        </ListItem>
                     </a>
                  ))}
            </List>
         </RepositoriesContainer>

         <FollowersContainer>
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
