import React, { useState, useEffect } from 'react';
import { FaGithubAlt, FaSpinner, FaSearch, FaTrash } from 'react-icons/fa';
import { MdDeleteSweep } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';
import api from '../../services/api';

import {
   Form,
   SubmitButton,
   List,
   Input,
   ClearButton,
   Container,
} from './styles';

export default function RepositoryFinder() {
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

   function handleDelete(id) {
      setRepositories(repositories.filter(repo => repo.id !== id));
   }

   async function handleSubmit(e) {
      e.preventDefault();
      setLoading(true);

      try {
         await api.get(`/repos/${newRepo}`).then(resp => {
            if (repositories.find(repo => repo.id === resp.data.id)) {
               setNewRepo('');
               setLoading(true);
               throw new Error();
            }
            const data = {
               avatar: resp.data.owner.avatar_url,
               id: resp.data.id,
               name: resp.data.full_name,
            };

            setRepositories([...repositories, data]);
            setNewRepo('');
            setLoading(false);
         });
      } catch (error) {
         toast.error(
            'Repository not found, please check the repository that you want to find'
         );
         setFinded(true);
         setLoading(false);
         setNewRepo('');
      }
   }

   return (
      <Container item xs>
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
                  <img src={repo.avatar} alt={repo.avatar} />
                  <span>{repo.name}</span>
                  <Link to={`/repository/${encodeURIComponent(repo.name)}`}>
                     Details
                  </Link>
                  <button type="button" onClick={() => handleDelete(repo.id)}>
                     <FaTrash size={18} />
                  </button>
               </li>
            ))}
            <div>
               <ClearButton onClick={clearRepositories}>
                  <MdDeleteSweep color="#FFF" size={20} />
                  Clear all repositories
               </ClearButton>
            </div>
         </List>
      </Container>
   );
}
