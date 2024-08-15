import { api } from './services/api';

api.post('/session')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });
