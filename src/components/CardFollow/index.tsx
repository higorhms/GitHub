import React from 'react';

import { Link } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  List,
  Avatar,
  ListItem,
} from './styles';

interface Friend {
  id: number;
  login: string;
  avatar_url: string;
}

interface CardFollowProps {
  title: string;
  list: Friend[];
}

const CardFollow: React.FC<CardFollowProps> = ({
  title,
  list,
}: CardFollowProps) => {
  return (
    <Card>
      <CardHeader>
        <h1>{title}</h1>
      </CardHeader>
      <CardContent>
        <List>
          {list &&
            list.map((item) => (
              <Link to={`/friend/${item.login}`} key={item.id}>
                <ListItem>
                  <Avatar src={`${item.avatar_url}`} alt="AvatarFollowing" />
                  <p>{item.login}</p>
                </ListItem>
              </Link>
            ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CardFollow;
