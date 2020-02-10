import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import {
   Container,
   Card,
   CardHeader,
   CardContent,
   List,
   Avatar,
   ListItem,
} from './styles';

export default function CardFollow({ title, list }) {
   return (
      <Container>
         <Card>
            <CardHeader>
               <h1>{title}</h1>
            </CardHeader>
            <CardContent>
               <List>
                  {list &&
                     list.map(item => (
                        <Link to={`/friend/${item.login}`} key={item.id}>
                           <ListItem>
                              <Avatar
                                 src={`${item.avatar_url} || https://api.adorable.io/avatars/95/abott@adorable.png`}
                                 alt="AvatarFollowing"
                              />
                              <p>{item.login}</p>
                           </ListItem>
                        </Link>
                     ))}
               </List>
            </CardContent>
         </Card>
      </Container>
   );
}

CardFollow.defaultProps = {
   list: [],
};

CardFollow.propTypes = {
   title: PropTypes.string.isRequired,
   list: PropTypes.arrayOf(PropTypes.object),
};
