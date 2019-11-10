import React, { Component } from 'react';
import { FaGithubAlt, FaSpinner, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, Input, ClearButton } from './styles';

export default class Main extends Component {
   state = {
      newRepo: '',
      repositories: [],
      loading: false,
      finded: false,
   };

   componentDidMount() {
      const repositories = localStorage.getItem('repositories');

      if (repositories) {
         this.setState({ repositories: JSON.parse(repositories) });
      }
   }

   componentDidUpdate(_, prevState) {
      const { repositories } = this.state;

      if (prevState.repositories !== repositories) {
         localStorage.setItem('repositories', JSON.stringify(repositories));
      }
   }

   handleInputChange = e => {
      this.setState({ newRepo: e.target.value });
   };

   clearRepositories = () => {
      localStorage.removeItem('repositories');
      this.setState({ repositories: [] });
   };

   handleSubmit = async e => {
      e.preventDefault();
      this.setState({ loading: true });

      const { newRepo, repositories } = this.state;

      try {
         await api.get(`/repos/${newRepo}`).then(resp => {
            if (repositories.find(repo => repo.id === resp.data.id)) {
               this.setState({ newRepo: '', loading: false });
               throw new Error('Repositório duplicado');
            }

            const data = {
               id: resp.data.id,
               name: resp.data.full_name,
            };

            this.setState({
               repositories: [...repositories, data],
               newRepo: '',
               loading: false,
            });
         });
      } catch (error) {
         this.setState({ finded: true, loading: false, newRepo: '' });
      }
   };

   render() {
      const { newRepo, loading, repositories, finded } = this.state;

      return (
         <Container>
            <h1>
               <FaGithubAlt />
               Repositories
            </h1>
            <small>You can find any repository do you want</small>
            <Form onSubmit={this.handleSubmit}>
               <Input
                  finded={finded}
                  type="text"
                  placeholder="Example: Owner/repository"
                  value={newRepo}
                  onChange={this.handleInputChange}
               />
               <SubmitButton loading={loading ? 1 : 0}>
                  {loading ? (
                     <p>
                        <FaSpinner color="#FFF" size={14} /> Loading
                     </p>
                  ) : (
                     <p>
                        <FaSearch color="#FFF" size={14} /> Find
                     </p>
                  )}
               </SubmitButton>
            </Form>

            <List>
               {repositories.map(repo => (
                  <li key={repo.id}>
                     <span>{repo.name}</span>

                     <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                        Details
                     </Link>
                  </li>
               ))}
               <div>
                  <ClearButton onClick={this.clearRepositories}>
                     Clear Repositories
                  </ClearButton>
               </div>
            </List>
         </Container>
      );
   }
}
