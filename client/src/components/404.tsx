import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import panel from "../media/swrcpanel.jpg";

function NAN() {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 2,
        p: 2,
      }}
    >
      <Card sx={{ minWidth: 600 }}>
        <CardMedia sx={{ height: 280 }} image={panel} title="ERROR 404" />
        <CardContent>
          <Typography color="secondary" variant="h4" gutterBottom>
            ERROR 404
          </Typography>
          <Typography variant="body1">
            This is not the page you are looking for...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default NAN;
