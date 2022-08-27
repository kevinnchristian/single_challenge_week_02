import { ApolloProvider } from '@apollo/client';

import client from './src/services';
import AppStartup from './src';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppStartup />
    </ApolloProvider>
  );
}
