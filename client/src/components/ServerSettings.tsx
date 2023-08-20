import {
  Autocomplete,
  Card,
  CardContent,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Snackbar,
  Alert,
  FormControlLabel,
  Switch,
  Button,
} from "@mui/material";
import { useState } from "react";
import { maps, gamemodes } from "../Constants";

function ServerSettings() {
  const [gamemode, setGamemode] = useState<string | null>(null);
  const [gamemodeInput, setGamemodeInput] = useState("");
  const [map, setMap] = useState<string | null>(null);
  const [mapInput, setMapInput] = useState("");
  const [maxPlayers, setMaxPlayers] = useState("");
  const [goalScore, setGoalScore] = useState("");
  const [spawnTime, setSpawnTime] = useState("");
  const [autobalance, setAutobalance] = useState(false);
  const [toasterState, setToasterState] = useState(false);
  const [toasterMessage, setToasterMessage] = useState(
    "A warning has been created!"
  );

  const raiseWarning = (warningText: string) => {
    setToasterMessage(warningText);
    setToasterState(true);
  };

  const closeToaster = () => {
    console.log("Closing Toaster");
    setToasterState(false);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" color={"primary"} gutterBottom>
          Server Settings
        </Typography>
        <Stack spacing={2}>
          <Autocomplete
            value={gamemode}
            onChange={(event: any, newValue: string | null) => {
              setGamemode(newValue);
            }}
            inputValue={gamemodeInput}
            onInputChange={(event, newValueInput) => {
              setGamemodeInput(newValueInput);
            }}
            options={Object.values(gamemodes)}
            renderInput={(params) => (
              <TextField variant="standard" {...params} label="Gamemode" />
            )}
            fullWidth
            autoHighlight
            size="small"
          />
          <Autocomplete
            value={map}
            onChange={(event: any, newValue: string | null) => {
              setMap(newValue);
            }}
            inputValue={mapInput}
            onInputChange={(event, newValueInput) => {
              setMapInput(newValueInput);
            }}
            options={Object.keys(maps)}
            renderInput={(params) => (
              <TextField variant="standard" {...params} label="Map" />
            )}
            fullWidth
            autoHighlight
            size="small"
          />
          <TextField
            size="small"
            value={maxPlayers}
            variant="standard"
            label="Max Players"
            type="number"
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">players</InputAdornment>
            //   ),
            // }}
            onChange={(event) => {
              setMaxPlayers(event.target.value);
            }}
            onBlur={(event) => {
              if (parseInt(event.target.value) < 2) {
                setMaxPlayers("");
                raiseWarning("Max players cannot be less than 2!");
              }
            }}
          />
          <TextField
            size="small"
            value={goalScore}
            variant="standard"
            label="Goal Score"
            type="number"
            onChange={(event) => {
              setGoalScore(event.target.value);
            }}
            onBlur={(event) => {
              if (parseInt(event.target.value) < 0) {
                setGoalScore("");
                raiseWarning("Goal score cannot be less than 0!");
              }
            }}
          />
          <TextField
            size="small"
            value={spawnTime}
            variant="standard"
            label="Respawn Time"
            type="number"
            onChange={(event) => {
              setGoalScore(event.target.value);
            }}
            onBlur={(event) => {
              if (parseInt(event.target.value) < 0) {
                setSpawnTime("");
                raiseWarning("Goal score cannot be less than 0!");
              }
            }}
          />
          <Stack direction={"row"} justifyContent={"space-between"}>
            <FormControlLabel
              value={autobalance}
              control={<Switch color="primary" />}
              label="Autobalance: "
              labelPlacement="start"
              onChange={(event, checked) => {
                setAutobalance(checked);
              }}
              sx={{ marginLeft: 0 }}
            />
            <Button variant="contained">Submit</Button>
          </Stack>
        </Stack>
      </CardContent>
      <Snackbar
        open={toasterState}
        autoHideDuration={6000}
        onClose={closeToaster}
        ClickAwayListenerProps={{
          onClickAway: () => {
            return;
          },
        }}
      >
        <Alert
          onClose={closeToaster}
          severity="warning"
          variant="filled"
          sx={{ color: "success.contrastText" }}
        >
          {toasterMessage}
        </Alert>
      </Snackbar>
    </Card>
  );
}

export default ServerSettings;
