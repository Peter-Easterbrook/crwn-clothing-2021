import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './providers/cart/cart.provider';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, gql } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import App from './App';
import { resolvers, typeDefs } from '../src/graphql/resolvers';

const httpLink = createHttpLink({
  uri: 'https://crwn-clothing.com',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
  typeDefs,
  resolvers,
});

client.writeData({
  data: {
    cartHidden: true,
    cartItems: [],
    itemCount: 0,
  }, // data is the object that we want to write to the cache
});

client
  .query({
    query: gql`
      {
        getCollectionsByTitle(title: "hats") {
          id
          title
          items {
            id
            name
            price
            imageUrl
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

ReactDOM.render(
  <ApolloProvider client={client}>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </ApolloProvider>,
  document.getElementById('root')
);
