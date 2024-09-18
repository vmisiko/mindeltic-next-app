"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { Psychologist } from "@/domain/entities/Pyschologist";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Box } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartComponentProps {
  psychologists: Psychologist[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({ psychologists }) => {
  const data = {
    labels: psychologists.map((p) => p.name),
    datasets: [
      {
        label: "Average Score",
        data: psychologists.map((p) => p.averageScore),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgb(50,98,125)",
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Psychologists Average Scores",
      },
    },
  };

  return (
    <Box sx={{ width: "100%", mt: 4 }}>
      <Bar data={data} options={options} />
    </Box>
  );
};

export default ChartComponent;
