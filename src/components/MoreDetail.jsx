// * Images
import houseCardImg from "../media/houseCard.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const CustomTextBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: "flex",
  justifyContent: "space-between",
  padding: theme.spacing(0, 5, 0, 5),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: theme.spacing(5),
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "13%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#7B8087",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export default function MoreDetail() {
  return (
    <Container sx={{ marginTop: 6 }}>
      <CustomBox>
        <img
          src={houseCardImg}
          alt="House Card Images"
          style={{ maxWidth: "100%" }}
        />
        <Box>
          <Divider />
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            You’ve found a neighborhood you love.
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            When you own a home, you commit to living in one location for a
            period of time. We are here to ensure that this will be a memorable
            experience for you.
          </Typography>
        </Box>
      </CustomBox>
      <CustomTextBox>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>2500+</LargeText>
          <SmallText>Homes For Sale</SmallText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>3000+</LargeText>
          <SmallText>Properties Rented</SmallText>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <LargeText>3500+</LargeText>
          <SmallText>Homes Sold</SmallText>
        </Box>
      </CustomTextBox>
    </Container>
  );
}
