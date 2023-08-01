const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        _id: ID
        authors: [String!]!
        description: String!
        bookId: ID
        title: String!
        image: String
        link: String
    }

    input BookInput {
        _id: ID
        authors: [String!]!
        description: String!
        bookId: ID
        title: String!
        image: String
        link: String
    } 

    type Auth {
        token: ID!
        user: User
    }

    type Query {
    user(username: String!): User
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput): User
        removeBook(bookId: ID!): User
    }



`;

module.exports = typeDefs;