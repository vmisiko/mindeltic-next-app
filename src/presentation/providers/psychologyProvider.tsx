"use client";
import React, { createContext, useContext } from "react";
import { PsychologistState } from "../blocs/PsychologistState";
import { usePsychologistBloc } from "../blocs/PsychologistPloc";

interface PsychologistContextProps {
  state: PsychologistState;
  refresh: () => void;
}

const PsychologistContext = createContext<PsychologistContextProps | undefined>(
  undefined
);

export const PsychologistProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const bloc = usePsychologistBloc();

  return (
    <PsychologistContext.Provider
      value={{ state: bloc.state, refresh: bloc.fetchPsychologists }}
    >
      {children}
    </PsychologistContext.Provider>
  );
};

export const usePsychologistContext = (): PsychologistContextProps => {
  const context = useContext(PsychologistContext);
  if (!context) {
    throw new Error(
      "usePsychologistContext must be used within a PsychologistProvider"
    );
  }
  return context;
};
