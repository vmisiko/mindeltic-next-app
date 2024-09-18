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
    <Box>
      {psychologists.map((psychologist) => (
        <>
          <Box
            key={psychologist.id}
            sx={{
              mb: 2,
              p: 2,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                mb: 1,
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar alt="JM" src={psychologist.url}></Avatar>
              <Box>
                <Typography variant="h6">{psychologist.name}</Typography>
                <Typography variant="subtitle1">
                  Score: {psychologist.averageScore}
                </Typography>
              </Box>
            </Box>

            <List>
              {psychologist.feedbacks.map((feedback) => (
                <ListItem key={feedback.id}>
                  <ListItemText primary={`- ${feedback.summary}`} />
                </ListItem>
              ))}
            </List>
          </Box>
          <Divider />
        </>
      ))}
    </Box>
  );
};

export default FeedbackList;
