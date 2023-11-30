// * Images
import cmpLogosImg from "../media/logos.png";
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * MUI Styled Components
const CustomBoxCtn = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    marginBottom: theme.spacing(4),
  },
}));

export default function Reviews() {
  return (
    <Box>
      <CustomBoxCtn>
        <Box sx={{ marginBottom: 3 }}>
          <img src={logoImg} alt="logo" style={{ maxWidth: "100%" }} />
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
      </CustomBoxCtn>
      <Container>
        <img
          src={cmpLogosImg}
          alt="partner comp logo"
          style={{ maxWidth: "100%" }}
        />
      </Container>
    </Box>
  );
}
