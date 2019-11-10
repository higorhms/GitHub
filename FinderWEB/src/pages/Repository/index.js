import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import ControlledOpenSelect from '../../components/DropdownFilter';

import Container from '../../components/Container';
import {
   Loading,
   Owner,
   IssueList,
   ButtonGroup,
   PreviousButton,
   NextButton,
} from './styles';

export default class Repository extends Component {
   static propTypes = {
      match: PropTypes.shape({
         params: PropTypes.shape({
            repository: PropTypes.string,
         }),
      }).isRequired,
   };

   state = {
      repository: {},
      issues: [],
      issueFilter: '',
      repositoryName: '',
      loading: true,
      page: 1,
   };

   async componentDidMount() {
      const { match } = this.props;
      const repositoryName = decodeURIComponent(match.params.repository);

      const [repository, issues] = await Promise.all([
         await api.get(`/repos/${repositoryName}`),
         await api.get(`/repos/${repositoryName}/issues`, {
            params: { state: 'open', per_page: 5 },
         }),
      ]);

      this.setState({
         repository: repository.data,
         issues: issues.data,
         loading: false,
         repositoryName,
      });
   }

   changeFilter = async filter => {
      const { repositoryName } = this.state;
      const issues = await api.get(`/repos/${repositoryName}/issues`, {
         params: { state: filter, per_page: 5 },
      });

      this.setState({
         issues: issues.data,
      });
   };

   nextPage = async () => {
      const { repositoryName, page } = this.state;
      const nextPage = page + 1;
      const issues = await api.get(`/repos/${repositoryName}/issues`, {
         params: { page: nextPage, per_page: 5 },
      });

      this.setState({
         issues: issues.data,
         page: nextPage,
      });
   };

   previousPage = async () => {
      const { repositoryName, page } = this.state;
      const previousPage = page === 1 ? page : page - 1;
      const issues = await api.get(`/repos/${repositoryName}/issues`, {
         params: { page: previousPage, per_page: 5 },
      });

      this.setState({
         issues: issues.data,
         page: previousPage,
      });
   };

   render() {
      const { repository, issues, loading, page } = this.state;
      if (loading) {
         return (
            <Loading>
               Carregando...
               <FaSpinner color="#FFF" size={130} />
            </Loading>
         );
      }
      return (
         <Container>
            <Owner>
               <Link to="/">Voltar a lista de repositórios</Link>
               <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
               />
               <h1>{repository.name}</h1>
               <p>{repository.description}</p>
               <ControlledOpenSelect changeFilter={this.changeFilter} />
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
               <PreviousButton
                  type="button"
                  onClick={this.previousPage}
                  page={page}
               >
                  Previous Page
               </PreviousButton>
               <NextButton type="button" onClick={this.nextPage}>
                  Next Page
               </NextButton>
            </ButtonGroup>
         </Container>
      );
   }
}
