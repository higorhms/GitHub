import styled from 'styled-components';
import { lighten } from 'polished';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)`
   background: #24292e;
   padding: 0 30px;

   button {
      display: flex;
      align-items: center;
      flex-direction: center;
      border: none;
      background: #fff;
      color: #24292e;
      font-weight: bold;
      border-radius: 4px;

      padding: 5px;
      margin: 5px;

      :hover {
         background: rgba(255, 255, 255, 0.7);
      }
   }
`;

export const Content = styled.div`
   height: 64px;
   max-width: 900px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;

   nav {
      > div {
         display: grid;
         grid-template-columns: 1fr 1fr;
      }

      a {
         font-weight: bold;
         color: #fff;

         :hover {
            color: ${lighten(0.3, '#333')};
         }
      }
   }
   aside {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
`;

export const Avatar = styled.img`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: #eee;
   border: 1px solid #eee;
`;

export const ProfileArea = styled(Grid)`
   display: flex;
   align-items: center;
   justify-content: center;

   > div {
      margin-left: 10px;

      strong {
         display: block;
         color: #fff;
      }

      > a {
         display: block;
         font-size: 12px;
         margin-top: 2px;
         color: #666;
         :hover {
            color: ${lighten(0.3, '#eee')};
         }
      }
   }
   img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
   }
`;
