import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    cors: true,
    typeDefs: typeDefs,
    resolvers: resolvers
});

let PORT  = process.env.PORT || 5000 

server.listen(PORT).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);

});