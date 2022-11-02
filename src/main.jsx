import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import App from './App'
import './index.css'

const httpLink = createHttpLink({
  uri: 'https://api.start.gg/gql/alpha',
});

// const backendPort = import.meta.env.VITE_GRAY_TOKEN;

// const token = process.env.VITE_GRAY_TOKEN;
// console.log(token)
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = import.meta.env.VITE_GRAY_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>,
  </React.StrictMode>
)
