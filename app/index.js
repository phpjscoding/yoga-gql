import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { createSchema } from 'graphql-yoga'
import { readFileSync } from 'fs';
import { resolve } from 'path';
import {Query} from './resolvers/query.mjs';
import {Todox} from './resolvers/todo.mjs'
import { User } from './resolvers/user.mjs';
import { db } from './db/data.mjs';


const typeDefs = readFileSync(resolve('app/schemas/schema.graphql'), 'utf8');
 const schemadef = createSchema({
  typeDefs,
  resolvers: {
    Query,
    Todox,
    User
  }
  
})

// const yoga = createYoga( { schema })
 
// Pass it into a server to hook into request handlers.
// const server = createServer(yoga)
 
// Start the server and you're done!
 
const yoga = createYoga({
  schema:schemadef,
  context: { db }
})
 
const server = createServer(yoga)
 

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})