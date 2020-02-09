import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
   display: grid;
   grid-template-columns: 1fr 300px;
   width: 100%;
   height: 100%;
`;

export const RepositoriesContainer = styled.div`
   border-right: 1px solid #eee;
   padding: 20px;
   overflow-y: scroll;
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
   box-shadow: 0px 0px 8px 0px #999;
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
`;

export const Description = styled.p`
   padding: 5px;
   font-size: 14px;
   color: #777;
`;

export const Language = styled.p``;
