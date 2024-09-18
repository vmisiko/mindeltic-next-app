// blocs/PsychologistBloc.ts

import { useState, useEffect } from "react";

import { PsychologistState } from "./PsychologistState";
import { FetchPsychologistReviewScoreUseCase } from "@/domain/usecases/FetchPsychologistsReviewScores";
import { PsychologistRepository } from "@/data/repository/PsychologistRepository";

export const usePsychologistBloc = () => {
  const psychologistRepository = new PsychologistRepository(); // Replace with actual repository implementation
  const fetchPsychologistReviewScoreUseCase =
    new FetchPsychologistReviewScoreUseCase({ psychologistRepository });

  const [state, setState] = useState<PsychologistState>({
    psychologists: [],
    loading: false,
    error: null,
  });

  const fetchPsychologists = async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const failureOrSuccess =
        await fetchPsychologistReviewScoreUseCase.execute();
      failureOrSuccess.fold(
        (error) =>
          setState((prev) => ({
            ...prev,
            loading: false,
            error: error.message,
          })),
        (data) =>
          setState((prev) => ({ ...prev, loading: false, psychologists: data }))
      );
    } catch (error) {
      setState((prev) => ({ ...prev, loading: false, error: error }));
    }

    return { state, fetchPsychologists };
  };

  return {
    state,
    fetchPsychologists,
  };
};
