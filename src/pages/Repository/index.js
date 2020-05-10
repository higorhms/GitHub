import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

import api from '../../services/api';
import ControlledOpenSelect from '../../components/DropdownFilter';

import {
   Owner,
   IssueList,
   ButtonGroup,
   PreviousButton,
   NextButton,
   Container,
} from './styles';

export default function Repository({ match }) {
   const [repository, setRepository] = useState({});
   const [issues, setIssues] = useState([]);
   const [repositoryName, setRepositoryName] = useState('');
   const [page, setPage] = useState(1);

   useEffect(() => {
      const nameOfRepository = decodeURIComponent(match.params.repository);

      async function fetchMyApi() {
         const [repositoryResponse, issuesResponse] = await Promise.all([
            await api.get(`/repos/${nameOfRepository}`),
            await api.get(`/repos/${nameOfRepository}/issues`, {
               params: { state: 'open', per_page: 5 },
            }),
         ]);

         setRepository(repositoryResponse.data);
         setIssues(issuesResponse.data);
         setRepositoryName(nameOfRepository);
      }

      fetchMyApi();
   }, [match]);

   async function changeFilter(filter) {
      const response = await api.get(`/repos/${repositoryName}/issues`, {
         params: { state: filter, per_page: 5 },
      });

      setIssues(response.data);
   }

   async function nextPage() {
      const pageIncrement = page + 1;
      const response = await api.get(`/repos/${repositoryName}/issues`, {
         params: { page: pageIncrement, per_page: 5 },
      });

      setIssues(response.data);
      setPage(pageIncrement);
   }

   async function previousPage() {
      const prevPage = page === 1 ? page : page - 1;
      const response = await api.get(`/repos/${repositoryName}/issues`, {
         params: { page: prevPage, per_page: 5 },
      });

      setIssues(response.data);
      setPage(prevPage);
   }

   return (
      <Container container item xs>
         <Owner>
            <Link to="/repositories">
               <IoIosArrowBack size={20} color="#FFF" />
               Back to list
            </Link>
            <img
               src={repository.owner.avatar_url}
               alt={repository.owner.login}
            />
            <h1>{repository.name}</h1>
            <p>{repository.description}</p>
            <ControlledOpenSelect changeFilter={changeFilter} />
         </Owner>

         <IssueList>
            {issues.map(issue => (
               <li key={String(issue.id)}>
                  <img src={issue.user.avatar_url} alt={issue.user.login} />
                  <div>
                     <strong>
                        <a href={issue.html_url}>{issue.title}</a>
                        {issue.labels.map(label => (
                           <span key={String(label.id)}>{label.name}</span>
                        ))}
                     </strong>
                     <p>{issue.user.login}</p>
                  </div>
               </li>
            ))}
         </IssueList>
         <ButtonGroup>
            <PreviousButton type="button" onClick={previousPage} page={page}>
               Previous Page
            </PreviousButton>
            <NextButton type="button" onClick={nextPage}>
               Next Page
            </NextButton>
         </ButtonGroup>
      </Container>
   );
}
