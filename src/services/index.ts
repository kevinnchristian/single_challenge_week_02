import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

// Iniciando o apollo client
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

export default client;