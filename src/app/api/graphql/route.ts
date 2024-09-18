import { Psychologist } from "@/domain/entities/Pyschologist";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { gql } from "graphql-tag";

// Define your schema
const typeDefs = gql`
  type Feedback {
    id: ID!
    psychologistId: ID!
    summary: String!
  }

  type Psychologist {
    id: ID!
    name: String!
    url: String!
    averageScore: Float!
    feedbacks: [Feedback!]!
  }

  type Query {
    psychologists: [Psychologist!]!
    psychologist(id: ID!): Psychologist
  }
`;

// Mocked data
const psychologistData: Psychologist[] = [
  {
    id: "1",
    name: "Dr. John Smith",
    url: "http://placebeard.it/250/250",
    averageScore: 4.5,
    feedbacks: [
      {
        id: "f1",
        psychologistId: "1",
        summary: "Very empathetic and insightful.",
      },
      {
        id: "f2",
        psychologistId: "1",
        summary: "Very demure, very mindful.",
      },
    ],
  },
  {
    id: "2",
    name: "Dr. Jane Doe",
    url: "http://placebeard.it/250/250",
    averageScore: 4.2,
    feedbacks: [
      {
        id: "f3",
        psychologistId: "2",
        summary: "Professional but could be more engaging.",
      },
    ],
  },
  {
    id: "3",
    name: "Dr. Emily Brown",
    url: "http://placebeard.it/250/250",
    averageScore: 4.8,
    feedbacks: [
      {
        id: "f4",
        psychologistId: "3",
        summary: "Extremely supportive and understanding.",
      },
      {
        id: "f5",
        psychologistId: "3",
        summary: "Provides clear and actionable advice.",
      },
    ],
  },
  {
    id: "4",
    name: "Dr. Michael Green",
    url: "http://placebeard.it/250/250",
    averageScore: 4.0,
    feedbacks: [
      {
        id: "f6",
        psychologistId: "4",
        summary: "Helpful sessions but sessions feel rushed.",
      },
    ],
  },
  {
    id: "5",
    name: "Dr. Sarah White",
    url: "http://placebeard.it/250/250",
    averageScore: 4.7,
    feedbacks: [
      {
        id: "f7",
        psychologistId: "5",
        summary: "Exceptional listening skills and empathy.",
      },
      {
        id: "f8",
        psychologistId: "5",
        summary: "Encourages personal growth effectively.",
      },
    ],
  },
];

// Define resolvers
const resolvers = {
  Query: {
    psychologists: () => psychologistData,
    psychologist: (_: any, { id }: { id: string }) =>
      psychologistData.find((psychologist) => psychologist.id === id),
  },
};

// Create the Apollo Server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// Use `startServerAndCreateNextHandler` to integrate Apollo with Next.js
const handler = startServerAndCreateNextHandler(apolloServer);

export { handler as GET, handler as POST };
