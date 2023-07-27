import { Stack, Typography } from "@mui/material";
import BottomBar from "./BottomBar";
import CentralBar from "./CentralBar";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Home() {
  return (
    <Stack
      position="relative"
      margin="0"
      padding="0"
      direction="column"
      spacing={4}
    >
      <Stack
        padding="1rem"
        borderTop="1px solid rgba(0,0,0,0.2)"
        borderBottom="1px solid rgba(0,0,0,0.2)"
      >
        <Typography variant="h4">Cat Clicker App</Typography>
      </Stack>
      <Stack
        justifyContent="space-evenly"
        padding="0.5rem 1rem"
        direction={{ xs: "column", sm: "column", md: "row" }}
        spacing={4}
      >
        <LeftBar />
        <CentralBar />
        <RightBar />
      </Stack>
      <Stack>
        <BottomBar />
      </Stack>
    </Stack>
  );
}

export default Home;
