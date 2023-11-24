// * Images
import cmpLogosImg from "../media/logos.png";
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * MUI Styled Components
const CustomReviewCtn = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const CustomBox = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

export default function Reviews() {
  return (
    <Box sx={{ mt: 10 }}>
      <CustomReviewCtn>
        <CustomBox>
          <Box>
            <img src={logoImg} alt="logo" />
            <Typography
              variant="body2"
              sx={{
                color: "#7D8589",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              More than 45,000 trust Besnik
            </Typography>
          </Box>
          <Box>
            <img src={starsImg} alt="stars" style={{ maxWidth: "100%" }} />
            <Typography
              variant="body2"
              sx={{
                color: "#7D8589",
                fontSize: "16px",
                fontWeight: "bold",
                mt: 2,
              }}
            >
              5-Star Rating (2k+ Reviews)
            </Typography>
          </Box>
        </CustomBox>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <img src={cmpLogosImg} alt="logos" />
        </Container>
      </CustomReviewCtn>
    </Box>
  );
}
