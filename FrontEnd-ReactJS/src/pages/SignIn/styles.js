import styled from 'styled-components';

export const Container = styled.div`
   max-width: 315px;
   text-align: center;

   form {
      display: flex;
      flex-direction: column;

      input {
         height: 45px;
         border-radius: 4px;
         background: rgba(255, 255, 255, 0.1);
         border: none;
         color: #fff;
         margin: 5px 0;
         padding: 0 20px;
         &::placeholder {
            color: #eee;
         }
      }

      button {
         background: #308099;
         border: none;
         border-radius: 4px;
         color: #fff;
         margin: 5px 0;
         padding: 0 20px;
         height: 37px;
      }
   }

   p {
      font-size: 12px;
      margin-top: 3px;
      color: rgba(255, 255, 255, 0.8);
      a {
         font-size: 12px;
         color: rgba(255, 255, 255, 0.8);
         :hover {
            color: rgba(255, 255, 255, 0.6);
         }
      }
   }
`;
