"use client";

import React from "react";
import { Psychologist } from "@/domain/entities/Pyschologist";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  Box,
  Avatar,
} from "@mui/material";

interface FeedbackListProps {
  psychologists: Psychologist[];
}

const FeedbackList: React.FC<FeedbackListProps> = ({ psychologists }) => {
  return (
    <Box sx={{ mt: 4 }}>
      {psychologists.map((psychologist) => (
        <Box key={psychologist.id} sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              mb: 1,
              alignItems: "center",
              gap: 1,
            }}
          >
            <Avatar alt="JM" src={psychologist.url}></Avatar>
            <Typography variant="h6">{psychologist.name}</Typography>
          </Box>
          <Typography variant="subtitle1">
            Score: {psychologist.averageScore}
          </Typography>
          <List>
            {psychologist.feedbacks.map((feedback) => (
              <ListItem key={feedback.id}>
                <ListItemText primary={`- ${feedback.summary}`} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      ))}
    </Box>
  );
};

export default FeedbackList;
