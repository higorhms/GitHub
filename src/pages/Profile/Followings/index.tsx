import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Container, Avatar } from './styles';
import { User } from '../../../contexts/AuthContext';
import api from '../../../services/api';

const Followings: React.FC = () => {
  const { owner } = useParams();
  const [followings, setFollowings] = useState<User[]>([]);

  useEffect(() => {
    async function fetchMyApi(): Promise<void> {
      const response = await api.get(
        `https://api.github.com/users/${owner}/following`,
      );
      setFollowings(response.data);
    }
    fetchMyApi();
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

export default Followings;
