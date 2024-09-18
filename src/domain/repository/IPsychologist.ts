import type { Either } from "@/core/domain/Either";
import type { DataError } from "@/core/domain/DataError";

import { Psychologist } from "../entities/Pyschologist";

export interface IPsychologistRepository {
  getPsychologistScoreReviews(): Promise<Either<DataError, Psychologist[]>>;
}
