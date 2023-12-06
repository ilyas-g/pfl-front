import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter } from "react-router-dom";

import App from './App'
import './index.css'

import './i18n';

const httpLink = createHttpLink({
  uri: 'https://api.start.gg/gql/alpha',
});

const authLink = setContext((_, { headers }) => {
  const token = 'a51f666d4eb616ab389160365a0f3029';
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

window.axeptioSettings = {
  clientId: "63c548b112fbd07ae713ba2d",
  cookiesVersion: "parisiennefightingligue-fr",
};

(function (d, s) {
  var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
  e.async = true; e.src = "//static.axept.io/sdk-slim.js";

  t.parentNode.insertBefore(e, t);
})(document, "script");


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
      <App />
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>
)
