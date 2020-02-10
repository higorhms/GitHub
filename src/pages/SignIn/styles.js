import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   display: flex;
   min-height: 100%;
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

export const PortfolioContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   padding: 50px;
   width: 50%;

   @media (max-width: 480px) {
      display: none;
   }

   h1 {
      color: #fff;
      margin-bottom: 50px;
   }

   p {
      color: #fff;
   }
`;

export const FormContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50%;

   border-radius: 10% 0 0 10%;
   background: #fff;

   @media (max-width: 480px) {
      border-radius: 0 0 0 0;
      width: 100%;
   }
`;

export const FormArea = styled.div`
   max-width: 315px;
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
         &::placeholder {
            color: #eee;
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

         :hover {
            color: blue;
         }
      }
   }
`;
