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

const Followers: React.FC = () => {
  const { owner } = useParams();
  const [followers, setFollowers] = useState<User[]>([]);

  useEffect(() => {
    api
      .get(`https://api.github.com/users/${owner}/followers`)
      .then((response) => {
        setFollowers(response.data);
      });
  }, [owner]);

  return (
    <Container>
      {followers?.map((follower) => (
        <Link
          to={`/profile/${follower.login}/repositories`}
          key={follower.login}
        >
          <Avatar src={follower.avatar_url} alt="avatar" />
          <p>{follower.login}</p>
        </Link>
      ))}
    </Container>
  );
};

export default Followers;
