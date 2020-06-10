import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { Container, Avatar } from './styles';
import api from '../../../services/api';

interface User {
  id: string;
  login: string;
  avatar_url: string;
}

const Following: React.FC = () => {
  const { owner } = useParams();
  const [followings, setFollowings] = useState<User[]>([]);

  useEffect(() => {
    api
      .get(`https://api.github.com/users/${owner}/following`)
      .then((response) => {
        setFollowings(response.data);
      });
  }, [owner]);

  return (
    <Container>
      {followings?.map((following) => (
        <Link
          to={`/profile/${following?.login}/repositories`}
          key={following.login}
        >
          <Avatar src={following.avatar_url} alt="avatar" />
          <p>{following?.login}</p>
        </Link>
      ))}
    </Container>
  );
};

export default Following;
