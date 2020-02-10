import React from 'react';

import {
   Container,
   Card,
   CardHeader,
   CardContent,
   List,
   Avatar,
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
                        <Avatar
                           src={`${item.avatar_url} || https://api.adorable.io/avatars/95/abott@adorable.png`}
                           alt="AvatarFollowing"
                           key={item.id}
                        />
                     ))}
               </List>
            </CardContent>
         </Card>
      </Container>
   );
}
