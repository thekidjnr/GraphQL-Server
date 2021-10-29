const { post } = require('../temp')

//Queries
const post = () => posts
const totalPosts = () => post.length

//Mutations
const newPost = (parent, args) => {
    const post = {
        id: post.length + 1,
        ...args.input
    }

    //push new post object to post array
    posts.push(post)

    return posts
}

module.exports = {
    Query: {
        allPosts: post,
        totalPosts
    },
    Mutation: {
        newPost
    }
}