import styled from 'styled-components';
import { lighten } from 'polished';
import Grid from '@material-ui/core/Grid';

export const Container = styled(Grid)`
   background: #24292e;
   color: #fff;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   /* @media (max-width: 480px) {
      max-width: 100%;
   } */

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

      /* @media (max-width: 480px) {
         display: none;
      } */

      svg {
         margin-right: 10px;
      }

      :hover {
         background: rgba(255, 255, 255, 0.7);
      }
   }
`;
export const Avatar = styled.img`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background: #eee;
   border: 1px solid #eee;

   /* @media (max-width: 480px) {
      width: 40px;
      height: 40px;
      border-radius: 50%;
   } */
`;

export const ProfileArea = styled(Grid)`
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;

   @media (max-width: 480px) {
      margin-top: 5px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 5px;

      > div {
         > p {
            display: none;
         }

         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
      }
   }
`;

export const Name = styled.p`
   margin-top: 10px;
`;

export const Bio = styled.p`
   padding-right: 10px;
   padding-left: 10px;
   margin-top: 10px;
   text-align: center;
   font-size: 11px;
`;

export const Menu = styled.ul`
   display: flex;
   flex-direction: column;
   margin-top: 20px;

   /* @media (max-width: 480px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 5px;
      margin-top: 5px;
   } */

   a {
      display: flex;
      align-items: center;
      padding: 8px;
      color: #fff;

      /* @media (max-width: 480px) {
         justify-content: center;
         align-items: center;
         width: 50px;
         border: 1px solid #eee;
         border-radius: 50%;

         & + a {
            margin-left: 10px;
         } */
      }

      /* p {
         @media (max-width: 480px) {
            display: none;
         }
      } */

      :hover {
         border-radius: 4px;
         color: #777;
      }

      svg {
         margin-right: 10px;

         /* @media (max-width: 480px) {
            margin-right: 0px;
         } */
      }
   }
`;

export const MenuItemContainer = styled.div`
   /* @media (max-width: 480px) {
      display: flex;
   } */
`;

export const Separator = styled.div`
   height: 1px;
   background: ${lighten(0.1, '#24292e')};
   margin: 10px 0 10px 0;

   /* @media (max-width: 480px) {
      margin: 1px 0 1px 0;
   } */
`;

export const LogoutResponsible = styled.div`
   display: none;
   /*
   @media (max-width: 480px) {
      display: flex;

      a {
         background: #fff;
      }
   } */
`;
