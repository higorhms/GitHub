import React from 'react';

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
                        <ListItem>
                           <Avatar
                              src={`${item.avatar_url} || https://api.adorable.io/avatars/95/abott@adorable.png`}
                              alt="AvatarFollowing"
                              key={item.id}
                           />
                           <p>{item.login}</p>
                        </ListItem>
                     ))}
               </List>
            </CardContent>
         </Card>
      </Container>
   );
}
