import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaSpinner, FaSearch } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';
import { Form, SubmitButton, List, Input, ClearButton } from './styles';

export default function Main() {
   const [newRepo, setNewRepo] = useState('');
   const [repositories, setRepositories] = useState([]);
   const [loading, setLoading] = useState(false);
   const [finded, setFinded] = useState(false);

   useEffect(() => {
      const repos = localStorage.getItem('repositories');

      if (repos) {
         setRepositories(JSON.parse(repos));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem('repositories', JSON.stringify(repositories));
   }, [repositories]);

   function handleInputChange(e) {
      setNewRepo(e.target.value);
   }

   function clearRepositories() {
      localStorage.removeItem('repositories');
      setRepositories([]);
   }

   async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);

      try {
         await api.get(`/repos/${newRepo}`).then(resp => {
            if (repositories.find(repo => repo.id === resp.data.id)) {
               setNewRepo('');
               setLoading(true);
               throw new Error('Repositório duplicado');
            }

            const data = {
               id: resp.data.id,
               name: resp.data.full_name,
            };

            setRepositories([...repositories, data]);
            setNewRepo('');
            setLoading(false);
         });
      } catch (error) {
         setFinded(true);
         setLoading(false);
         setNewRepo('');
      }
   }

   return (
      <Container>
         <h1>
            <FaGithubAlt />
            Repositories
         </h1>
         <small>You can find any repository do you want</small>
         <Form onSubmit={handleSubmit}>
            <Input
               finded={finded}
               type="text"
               placeholder="Example: Owner/repository"
               value={newRepo}
               onChange={handleInputChange}
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
               <ClearButton onClick={clearRepositories}>
                  <MdDeleteSweep color="#FFF" size={20} />
                  Clear Repositories
               </ClearButton>
            </div>
         </List>
      </Container>
   );
}
