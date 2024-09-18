import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "60px",
      backgroundColor: "#f5f5f5",
      color: "black",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)",
      zIndex: 1300,
    }}
  >
    <Typography>
      Copyright © 2024 Mindletic-test | All rights reserved
    </Typography>
  </Box>
);

export default Footer;
