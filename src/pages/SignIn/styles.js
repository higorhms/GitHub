import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { darken } from 'polished';

export const Container = styled(Grid)`
   background: #24292e;
   overflow-x: scroll;

   ::-webkit-scrollbar {
      display: none;
   }
`;

export const SocialMediasContainer = styled.div`
   margin-top: auto;
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 20px;

   a {
      color: #24292e;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      background: #fff;
      border-radius: 5px;
      font-weight: bold;

      :hover {
         background: rgba(255, 255, 255, 0.7);
      }

      svg {
         margin-right: 10px;
      }
   }
`;

export const PortfolioContainer = styled(Grid)`
   display: flex;
   flex-direction: column;
   padding: 50px;

   @media (max-width: 650px) {
      height: 45%;
   }

   h1 {
      color: #fff;
      margin-bottom: 50px;
      font-size: 40px;

      @media (max-width: 650px) {
         margin-bottom: 2px;
         font-size: 30px;
      }
   }

   p {
      color: #999;

      @media (max-width: 650px) {
         margin-bottom: 5px;
      }
   }
`;

export const FormContainer = styled(Grid)`
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10% 0 0 10%;
   background: #fff;

   @media (max-width: 650px) {
      border-radius: 12% 12% 0 0;
      height: 55%;
   }
`;

export const FormArea = styled.div`
   padding: 15px;
   text-align: center;

   svg {
      margin-bottom: 20px;
   }

   form {
      display: flex;
      flex-direction: column;

      input {
         height: 45px;
         border-radius: 4px;
         background: #24292e;
         border: none;
         color: #fff;
         margin: 5px 0;
         padding: 0 20px;

         ::placeholder {
            color: #fff;
         }
      }

      button {
         background: #1074e7;
         border: none;
         border-radius: 4px;
         color: #fff;
         margin: 5px 0;
         padding: 0 20px;
         height: 37px;
         font-weight: bold;

         :hover {
            background: ${darken(0.1, '#1074e7')};
         }
      }
   }

   p {
      font-size: 12px;
      margin-top: 3px;
      color: #24292e;

      a {
         font-size: 12px;
         color: #24292e;
         color: #1074e7;

         :hover {
            color: ${darken(0.3, '#1074e7')};
         }
      }
   }
`;
