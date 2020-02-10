import styled from 'styled-components';

export const Container = styled.nav`
   background: #24292e;
   min-width: 200px;
   max-width: 200px;
   border-radius: 0 4px 4px 0;

   color: #fff;
   display: flex;
   flex-direction: column;
   justify-content: space-between;

   button {
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
export const Avatar = styled.img`
   width: 80px;
   height: 80px;
   border-radius: 50%;
   background: #eee;
   border: 1px solid #eee;
`;

export const ProfileArea = styled.div`
   margin-top: 30px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
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

   a {
      display: flex;
      align-items: center;
      padding: 5px;
      color: #fff;

      :hover {
         border-radius: 4px;
         background: linear-gradient(-90deg, #24292e, white);
         color: #24292e;
      }

      svg {
         margin-right: 5px;
      }
   }
`;
