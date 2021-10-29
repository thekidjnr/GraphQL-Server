const { gql } = require('apollo-server-express')

module.exports = gql`
  type Post {
    id: ID!
    author: String
    title: String!
    description: String
   

 
  }

  type Comment {
    body: String
  }

  #input type

  input PostInput {
    title: String!
    author: String
    description: String!
   
  }

  #Query type

  type Query {
    allPosts: [Post!]!
    totalPosts: Int!
  }

  #mutations

  type Mutation {
    newPost(input: PostInput!): Post!
  }
`