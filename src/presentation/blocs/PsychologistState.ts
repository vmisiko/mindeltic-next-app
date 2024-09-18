import { Psychologist } from "@/domain/entities/Pyschologist";

export interface PsychologistState {
  psychologists: Psychologist[];
  loading: boolean;
  error: string | null;
}
