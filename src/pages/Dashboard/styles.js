import styled from 'styled-components';
import { lighten } from 'polished';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)`
   display: grid;
   grid-template-columns: 1fr 300px;
   width: 100%;
   height: 100%;
`;

export const RepositoriesContainer = styled(Grid)`
   border-right: 1px solid #eee;
   padding: 20px;
   height: 100%;

   overflow-y: scroll;
   -ms-overflow-style: none;
   scrollbar-width: none;
   ::-webkit-scrollbar {
      display: none;
   }

   h1 {
      text-align: center;
      font-size: 18px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
   }
`;

export const List = styled.div`
   display: grid;
   grid-gap: 15px;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const ListItem = styled.div`
   width: 100%;
   height: 100%;
   border-radius: 4px;
   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
   border: 1px solid rgba(255, 255, 255, 0.1);
   height: 150px;
   border-radius: 5px;
   padding: 10px;
   transition: 0.3s;

   :hover {
      transform: translateY(-5px);
      box-shadow: 0px 0px 8px 0px ${lighten(0.3, '#0366d6')};
   }
`;

export const Name = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 5px;
   color: #0366d6;
   font-weight: bold;
   text-align: center;
   border-radius: 5px 5px 0px 0px;

   > div {
      display: flex;
      align-items: center;

      p {
         margin-left: 5px;
      }
   }
`;

export const Description = styled.p`
   padding: 5px;
   font-size: 14px;
   color: #777;
   height: 100px;

   overflow-y: scroll;
   -ms-overflow-style: none;
   scrollbar-width: none;
   ::-webkit-scrollbar {
      display: none;
   }
`;

export const Language = styled.p``;

export const FollowersContainer = styled(Grid)`
   padding: 20px;
   height: 100%;

   overflow-y: scroll;
   -ms-overflow-style: none;
   scrollbar-width: none;

   ::-webkit-scrollbar {
      display: none;
   }

   > h1 {
      text-align: center;
      font-size: 18px;
      margin-bottom: 10px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
   }
`;

export const Separator = styled.div`
   height: 1px;
   background: #eee;
   margin-top: 20px;
   margin-bottom: 20px;
`;
