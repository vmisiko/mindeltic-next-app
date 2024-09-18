"use client";

import React, { useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import ChartComponent from "@/presentation/components/ChartComponent";
import FeedbackList from "@/presentation/components/FeedbackList";
import { Psychologist } from "@/domain/entities/Pyschologist";
import { usePsychologistContext } from "@/presentation/providers/psychologyProvider";

const Home: React.FC = () => {
  const { state, refresh } = usePsychologistContext();

  useEffect(() => {
    refresh();
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 9 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Psychologists Feedback
      </Typography>

      {/* <>
        <ChartComponent psychologists={psychologists} />
        <FeedbackList psychologists={psychologists} />
      </> */}

      {state.loading && (
        <Box display="flex" justifyContent="center" my={4}>
          <CircularProgress />
        </Box>
      )}

      {state.error && (
        <Alert severity="error" sx={{ my: 2 }}>
          {state.error}
        </Alert>
      )}

      {!state.loading && !state.error && state.psychologists.length > 0 && (
        <>
          <ChartComponent psychologists={state.psychologists} />
          <FeedbackList psychologists={state.psychologists} />
        </>
      )}

      {!state.loading && !state.error && state.psychologists.length === 0 && (
        <Typography variant="h6" align="center" color="textSecondary">
          No data available.
        </Typography>
      )}

      {state.error && (
        <Box display="flex" justifyContent="center" mt={2}>
          <Button variant="contained" color="primary" onClick={refresh}>
            Retry
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Home;
