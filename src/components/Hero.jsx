// * Components
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

// * Images
import HeroImg from "../media/hero_illustration.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * MUI Icons

// * Styled Components
const CustomHeroBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(3),
  gap: theme.spacing(5),
  display: "flex",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

export default function Hero() {
  return (
    <Box
      sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh", paddingBottom: 2 }}
    >
      <Container>
        <Navbar />

        <CustomHeroBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Besnik Agency
            </Typography>
            <Typography variant="h2">
              Discover a place where you'll love to live.
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Be the first to get the best real estate deals before they hit the
              mass market! Hot foreclosure deals with one simple search!
            </Typography>
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="More About Us"
              heroBtn={true}
            />
          </Box>

          <Box sx={{ flex: 1.25 }}>
            <img src={HeroImg} alt="hero illustration" />
          </Box>
        </CustomHeroBox>
      </Container>
    </Box>
  );
}
