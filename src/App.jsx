import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { TokenContext } from 'common/context/context';
import Routes from './routes/routes';
import history from './common/history';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/link-context';
import './App.css';

function App() {
  const [token, setToken] = useState('');
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // localStorage.setItem('access_token', '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');
    const localToken = localStorage.getItem('access_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: localToken ? `Bearer ${localToken}` : ''
      }
    };
  });

  const client = new ApolloClient({
    // act as state manager cash queries and the server wont have to keep getting overloaded when we ask for the same info constantly
    link: authLink.concat(httpLink),
    cache: new InMemoryCache({
      addTypename: false
    })
  });
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <ApolloProvider client={client}>
        <Router history={history}>
          <Routes />
        </Router>
      </ApolloProvider>
    </TokenContext.Provider>
  );
}

export default App;
