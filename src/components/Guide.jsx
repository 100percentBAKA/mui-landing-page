// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * MUI Styled Components

export default function Guide() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 1,
          width: "25vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "5%",
            height: "5px",
            backgroundColor: "#000339",
            margin: "0 auto",
          }}
        ></div>

        <Typography
          variant="h3"
          sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
        >
          How it works?
        </Typography>

        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
          }}
        >
          Everything you need to know when you want to buy, rent or sell - All
          in one place
        </Typography>
      </Box>
    </Box>
  );
}
