import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)``;

export const Card = styled(Grid)`
   display: flex;
   flex-direction: column;
   box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
   color: #24292e;
   border-radius: 4px;
`;

export const CardHeader = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 4px 4px 0px 0px;
   background: #eee;

   h1 {
      font-size: 14px;
      padding: 5px;
   }
`;

export const CardContent = styled.div`
   background: #fff;
   border-radius: 4px 4px 4px 4px;
`;

export const List = styled(Grid)`
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(60px, 80px));
   justify-content: center;
   grid-gap: 5px;
   padding-top: 5px;
   height: 300px;

   overflow-y: scroll;
   ::-webkit-scrollbar {
      display: none;
   }
`;

export const ListItem = styled(Grid)`
   display: flex;
   flex-direction: column;
   padding: 10px;
   align-items: center;
   justify-content: center;
   border: 1px solid #eee;
   border-radius: 4px;

   p {
      color: #0366d6;
      margin-top: 2px;
      font-size: 8px;
   }
`;

export const Avatar = styled.img`
   height: 50px;
   width: 50px;
   border-radius: 50%;
   background: #eee;
   border: 1px solid #24292e;
`;
