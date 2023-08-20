import { Box, Breadcrumbs, Paper, Typography } from "@mui/material";

function Maps() {
  return (
    <Box sx={{ height: "100%", width: "100%", padding: 4 }}>
      <Paper sx={{ height: "100%", padding: 2 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography color="text.secondary">These</Typography>
          <Typography color="text.secondary">Are</Typography>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </Paper>
    </Box>
  );
}

export default Maps;
