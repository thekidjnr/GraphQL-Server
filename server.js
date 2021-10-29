const express = require('express');
const { ApolloServer,gql } = require('apollo-server')
const http = require('http')
const path = require('path')
const {
    fileLoader,
    mergeTypes,
    mergeResolvers,
} = require('merge-graphql-schemas')

const mongoose = require('mongoose')

require('dotenv').config()

const app = express();

app.get('/rest', (req, res) =>{
    res.send(
        {data: "this will be used for resfulAPI" }
    )
})


// typeDefs
const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './typeDefs')))

// resolvers
const resolvers = mergeResolvers(
    fileLoader(path.join(__dirname, './resolvers')),
)

const apollo = new ApolloServer({typeDefs, resolvers})

ApolloServer.start().then(() => {
    ApolloServer.applyMiddleware({ app })
})

const httpServer = http.createServer(app)

apollo.listen().then(({url})=>{
    console.log(`Graphql server is running ${url}`)
})


// app.listen(process.env.PORT, () =>{
//     console.log(`listening on port http://localhost:${process.env.PORT}`);
// })