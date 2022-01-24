// import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

// const server = new ApolloServer({
//     typeDefs: typeDefs,
//     resolvers: resolvers
// });

// server.listen().then(({ url }) => {
//     console.log(`🚀  Server ready at ${url}`);
// });


const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
// const schema = require('./schema');
const path = require('path');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    typeDefs,
    resolvers,
    graphiql: true
  })
);

app.use(express.static('public'));

app.get('*', (req:any, res:any) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));