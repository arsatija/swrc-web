import {
  Box,
  Card,
  CardContent,
  Unstable_Grid2 as Grid,
  Typography,
} from "@mui/material";
import ServerSettings from "./ServerSettings";

function Admin() {
  return (
    <Box>
      <Grid container spacing={2} padding={"2.5ch"}>
        <Grid xs={3}>
          <ServerSettings />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Admin;
