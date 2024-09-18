import React from "react";
import { AppBar, Box } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "white", // Set AppBar background to white
        color: "black", // Set text/icon color to black for contrast
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.12)", // Optional: Customize shadow
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between logo and potential links
          alignItems: "center",
          padding: "8px 16px", // Reduce padding to make the navbar smaller
          color: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.12)", // Slight shadow
          height: "60px", // Fixed height for a compact look
        }}
      >
        {/* Logo */}
        <img
          src="https://www.mindletic.com/wp-content/uploads/2023/01/Mindletic-logo-horizontal.png"
          alt="Mindletic Logo"
          style={{
            height: "40px", // Smaller height for the logo
            width: "auto", // Maintain aspect ratio
            objectFit: "contain",
          }}
        />
      </Box>
    </AppBar>
  );
};

export default Navbar;
