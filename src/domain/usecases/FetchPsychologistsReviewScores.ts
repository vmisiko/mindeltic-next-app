import type { DataError } from "@/core/domain/DataError";
import type { Either } from "@/core/domain/Either";
import { IPsychologistRepository } from "../repository/IPsychologist";
import { Psychologist } from "../entities/Pyschologist";

export class FetchPsychologistReviewScoreUseCase {
  private psychologistRepository: IPsychologistRepository;

  constructor({
    psychologistRepository,
  }: {
    psychologistRepository: IPsychologistRepository;
  }) {
    this.psychologistRepository = psychologistRepository;
  }

  execute(): Promise<Either<DataError, Psychologist[]>> {
    return this.psychologistRepository.getPsychologistScoreReviews();
  }
}
