import {
  Alert,
  Box,
  Card,
  CardContent,
  Divider,
  Unstable_Grid2 as Grid,
  IconButton,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
  Toolbar,
} from "@mui/material";
import "../styles/Home.css";
import { ContentCopy } from "@mui/icons-material";
import Admin from "./Admin";
import { useState } from "react";

type StatusCode = {
  status: string;
  color: string;
};

function Home() {
  const HOST = "74.91.114.158";

  const serverStatus = {
    ONLINE: { status: "Online", color: /*"#4BB543"*/ "success.main" },
    OFFLINE: { status: "Offline", color: "#FC100D" },
  };

  const [currentStatus, setStatus] = useState(serverStatus.ONLINE);

  const [open, setOpen] = useState(false);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 2, p: 2 }}>
      {/* <Toolbar /> */}
      <Grid container spacing={2} sx={{ padding: "2.5ch" }}>
        <Grid xs={3}>
          <Card sx={{ minWidth: 250 }}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Server IP
              </Typography>
              <Stack direction={"row"} justifyContent={"space-between"}>
                <Typography color="textPrimary" variant="h5">
                  {HOST}
                </Typography>
                <Tooltip title="Copy IP">
                  <IconButton
                    onClick={() => {
                      navigator.clipboard.writeText(HOST);
                      setOpen(true);
                    }}
                  >
                    <ContentCopy fontSize="small" sx={{ height: "inherit" }} />
                  </IconButton>
                </Tooltip>
                <Snackbar
                  open={open}
                  autoHideDuration={5000}
                  onClose={handleClose}
                >
                  <Alert
                    onClose={handleClose}
                    severity="success"
                    variant="filled"
                    sx={{ color: "success.contrastText" }}
                  >
                    Copied to clipboard!
                  </Alert>
                </Snackbar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid xs={3}>
          <Card sx={{ minWidth: 250 }}>
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Server Status
              </Typography>
              <Typography color={currentStatus.color} variant="h5">
                {currentStatus.status}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Stack>
        <Divider>Admin Dashboard</Divider>
        <Admin />
      </Stack>
    </Box>
  );
}

export default Home;
