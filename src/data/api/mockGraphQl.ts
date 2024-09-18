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
        id: "f1",
        psychologistId: "1",
        summary: "Very demure, very mindful",
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
        id: "f2",
        psychologistId: "2",
        summary: "Professional but could be more engaging.",
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
      new ServerError("An Error Ocurred while fetching psychhologitsts")
    );
  }
  return Either.right(psychologistData);
};
