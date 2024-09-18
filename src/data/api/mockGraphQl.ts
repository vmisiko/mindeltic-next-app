import { DataError, ServerError } from "@/core/domain/DataError";
import { Either } from "@/core/domain/Either";
import { Psychologist } from "@/domain/entities/Pyschologist";

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
// Simulate network latency
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const getPsychologists = async (): Promise<
  Either<DataError, Psychologist[]>
> => {
  await delay(1000); // 1-second delay to simulate network
  // Randomly throw an error to simulate API failure
  if (Math.random() < 0.1) {
    return Either.left(
      new ServerError("An Error Ocurred while fetching psychologists")
    );
  }
  return Either.right(psychologistData);
};
