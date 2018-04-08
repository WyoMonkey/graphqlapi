const {
	GraphQLObject,
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull

} = require('graphql');

// Hardcoded data
const players = [
{id: '1', name: 'John Doe', hand: 'right'},
{id: '2', name: 'Alfred Jones', hand: 'left'},
{id: '3', name: 'Tyreek Johnson', hand: 'right'},
]

//Player Type
const PlayerType = new GraphQLObjectType({
	name: 'Player', 
	fields: () => ({
		id: {type:GraphQLString},
		name: {type:GraphQLString},
		hand: {type:GraphQLString},
	})
})

//Root Query
const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields:
	{
		player:
		{
		type: PlayerType,
		args: 
		{
			id:{type: GraphQLString}
		},
		resolve(parentValue, args)
			{
			for(let i = 0; i<players.length; i++)
				{
				if(players[i].id == args.id)
					{
					return players[i];
					}
				}

			}
		},
		players:{
			type: new GraphQLList(PlayerType),
			resolve(parentValue, args){
				return players;
			}
		}

	}
});

module.exports = new GraphQLSchema({
	query: RootQuery
})