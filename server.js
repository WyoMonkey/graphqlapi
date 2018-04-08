const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema.js')


const app = express();

app.use('/graphql', expressGraphQL({
	schema: schema,
	graphiql: true,
}));

app.listen(process.env.PORT, () => {
	console.log('Running a GraphQL API server at localhost:4000/graphql');
});
