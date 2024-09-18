import { BaseRepository } from "@/core/data/BaseRepository";
import { DataError, ServerError } from "@/core/domain/DataError";
import { Either } from "@/core/domain/Either";
import { Psychologist } from "@/domain/entities/Pyschologist";
import { IPsychologistRepository } from "@/domain/repository/IPsychologist";

export class PsychologistRepository implements IPsychologistRepository {
  constructor() {}

  async getPsychologistScoreReviews(): Promise<
    Either<DataError, Psychologist[]>
  > {
    try {
      // Make a GraphQL request
      const response = await fetch("/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            query {
              psychologists {
                id
                name
                url
                averageScore
                feedbacks {
                  id
                  summary
                }
              }
            }
          `,
        }),
      });

      // Check if the response is successful
      if (!response.ok) {
        return Either.left(new ServerError("Failed to fetch psychologists"));
      }

      const { data, errors } = await response.json();

      // Check if there are any GraphQL errors
      if (errors) {
        return Either.left(new ServerError(errors[0].message));
      }

      // Return the data using the Either.right type
      return Either.right(data.psychologists);
    } catch (error) {
      // Handle any unexpected errors
      return Either.left(new ServerError("An unexpected error occurred"));
    }
  }
}
