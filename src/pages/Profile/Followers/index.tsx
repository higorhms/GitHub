import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Avatar } from './styles';
import { User } from '../../../contexts/AuthContext';
import api from '../../../services/api';

const Followers: React.FC = () => {
  const { owner } = useParams();
  const [followers, setFollowers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchMyApi(): Promise<void> {
      const response = await api.get(
        `https://api.github.com/users/${owner}/followers`,
      );
      setFollowers(response.data);
    }
    fetchMyApi();
  }, [owner]);

  return (
    <Container>
      {followers?.map((follower) => (
        <Link to={`/profile/${follower?.login}/followers`} key={follower.login}>
          <Avatar src={follower.avatar_url} alt="avatar" />
          <p>{follower?.login}</p>
        </Link>
      ))}
    </Container>
  );
};

export default Followers;
