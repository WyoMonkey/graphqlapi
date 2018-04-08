const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js')


const app = express();

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true,
}));

app.listen(4000, () => {
	console.log('Running a GraphQL API server at localhost:4000/graphql');
});
