import { BaseRepository } from "@/core/data/BaseRepository";
import { DataError } from "@/core/domain/DataError";
import { Either } from "@/core/domain/Either";
import { Psychologist } from "@/domain/entities/Pyschologist";
import { IPsychologistRepository } from "@/domain/repository/IPsychologist";
import { getPsychologists } from "@/data/api/mockGraphQl";

export class PsychologistRepository implements IPsychologistRepository {
  constructor() {}

  getPsychologistScoreReviews(): Promise<Either<DataError, Psychologist[]>> {
    return getPsychologists();
  }
}
