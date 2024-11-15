import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Strikezone from "./components/Strikezone/Strikezone";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import BaseballDiamond from "./components/BaseballDiamond/BaseballDiamond";
import OutCounterDisplay from "./components/OutCounterDisplay/OutCounterDisplay";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ProfileDisplay from "./components/PitcherDisplay/PitcherDisplay";
import PitchHistory from "./components/PitchHistory/PitchHistory";
import "./App.css";

function App() {
  // State
  const [count, setCount] = useState({
    strikes: 0,
    balls: 0,
    fouls: 0,
    pitches: [],
  });
  const [zone, setZone] = useState(null);
  const [pitchType, setPitchType] = useState(null);
  const [score, setScore] = useState({ home: 0, away: 0 });
  const [isAwayBatting, setIsAwayBatting] = useState(true);
  const [outs, setOuts] = useState(0);
  const [inning, SetInning] = useState(1);
  const [bases, setBases] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [pitcher, setPitcher] = useState({
    name: "",
    runs: 0,
    strikeouts: 0,
    walks: 0,
    singles: 0,
    doubles: 0,
    triples: 0,
    homeruns: 0,
    innings: 0,
    pitchCount: 0,
    pitches: [],
    atBats: [],
  });

  const updateCount = (event) => {
    if (!zone || !pitchType) return;
    const name = event.target.name;

    setPitcher({
      ...pitcher,
      pitchCount: pitcher.pitchCount + 1,
      atBats: [
        ...pitcher.atBats,
        {
          pitchType: pitchType,
          zone: convertZone(zone),
          outcome: name === "balls" ? "ball" : "strike",
        },
      ],
      pitches: [
        ...pitcher.pitches,
        {
          pitchType: pitchType,
          zone: convertZone(zone),
          outcome: name === "balls" ? "ball" : "strike",
        }
      ]
    });

    setCount({
      ...count,
      [name]: count[name] + 1,
    });

    setPitchType(null);
    recordPitch();
  };

  const updatePitchType = (event) => {
    const name = event.target.name;

    setPitchType(name);
  };

  const clearCount = () => {
    setCount({
      strikes: 0,
      balls: 0,
    });
  };

  // TODO - this should be the entry point to every pitch ending
  // everything else should be a watcher or branch off from this function
  const recordPitch = () => {
    // set count
    // setCount({
    //   ...count,
    //   pitches: [
    //     count.pitches,
    //     { type: pitchType, zone: convertZone(zone), outcome: "TODO" },
    //   ],
    // });
  };

  const convertZone = () => {
    console.log(zone);
    switch (zone) {
      case '0.0':
        return "Top Left";
      case '0.1':
        return "Top Middle";
      case '0.2':
        return "Top Right";
      case '1.0':
        return "Middle Left";
      case '1.1':
        return "Middle Middle";
      case '1.2':
        return "Middle Right";
      case '2.0':
        return "Bottom Left";
      case '2.1':
        return "Bottom Middle";
      case '2.2':
        return "Bottom Right";
      default:
        return "";
    }
  };

  // COUNT
  useEffect(() => {
    setZone(null);
    if (count.strikes === 3) {
      setOuts(outs + 1);
      clearCount();
    } else if (count.balls === 5) {
      clearCount();

      // base update scenerios
      if (bases.first && bases.second && bases.third) {
        // give a run to hitting team
        const team = isAwayBatting ? "away" : "home";
        setScore({
          ...score,
          [team]: score[team] + 1,
        });
      } else if (!bases.first && bases.second && bases.third) {
        setBases({
          ...bases,
          first: true,
        });
      } else if (!bases.first && !bases.second && bases.third) {
        setBases({
          ...bases,
          first: true,
        });
      } else if (!bases.first && !bases.second && !bases.third) {
        setBases({
          ...bases,
          first: true,
        });
      } else if (bases.first && !bases.second && bases.third) {
        setBases({
          ...bases,
          second: true,
        });
      } else if (bases.first && !bases.second && !bases.third) {
        setBases({
          ...bases,
          second: true,
        });
      } else if (bases.first && bases.second && !bases.third) {
        setBases({
          ...bases,
          third: true,
        });
      } else if (!bases.first && !bases.second && !bases.third) {
        setBases({
          ...bases,
          first: true,
        });
      }
    }
  }, [count]);

  // Outs
  useEffect(() => {
    if (outs === 3) {
      SetInning(inning + 0.5);
      setOuts(0);
      setCount({ strikes: 0, balls: 0 });
      setBases({
        first: false,
        second: false,
        third: false,
      });
      setIsAwayBatting(!isAwayBatting);
    }
  }, [outs]);

  return (
    <div className="App">
      <header className="App-header">
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid size={4} item>
              <ProfileDisplay pitcher={pitcher} />
              <Typography variant="subtitle1" gutterBottom>
                Pitch History !!! ({pitcher.pitchCount})
              </Typography>
              <PitchHistory pitches={pitcher.pitches} />
            </Grid>
            <Grid size={4} item>
              <Box justifyContent="center" alignItems="center">
                {/* STRIKEZONE SELECTION */}
                <Strikezone setZone={setZone} zone={zone} />

                {/* PITCH SELECTER */}
                <ButtonGroup
                  color="secondary"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button
                    color={pitchType === "slider" ? "secondary" : "primary"}
                    name="slider"
                    onClick={(e) => updatePitchType(e)}
                  >
                    SL
                  </Button>
                  <Button
                    color={pitchType === "riser" ? "secondary" : "primary"}
                    name="riser"
                    onClick={(e) => updatePitchType(e)}
                  >
                    RS
                  </Button>
                  <Button
                    color={pitchType === "drop" ? "secondary" : "primary"}
                    name="drop"
                    onClick={(e) => updatePitchType(e)}
                  >
                    DROP
                  </Button>
                  <Button
                    color={pitchType === "screwball" ? "secondary" : "primary"}
                    name="screwball"
                    onClick={(e) => updatePitchType(e)}
                  >
                    SCREW
                  </Button>
                  <Button
                    color={
                      pitchType === "knuckleball" ? "secondary" : "primary"
                    }
                    name="knuckleball"
                    onClick={(e) => updatePitchType(e)}
                  >
                    KCKL
                  </Button>
                  <Button
                    color={pitchType === "curveball" ? "secondary" : "primary"}
                    name="curveball"
                    onClick={(e) => updatePitchType(e)}
                  >
                    CRV
                  </Button>
                  <Button
                    color={pitchType === "changeup" ? "secondary" : "primary"}
                    name="changeup"
                    onClick={(e) => updatePitchType(e)}
                  >
                    CH
                  </Button>
                </ButtonGroup>

                {/* PITCH OUTCOME SELECTION */}
                <ButtonGroup
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button name="strikes" onClick={(e) => updateCount(e)}>
                    Strike
                  </Button>
                  <Button name="balls" onClick={(e) => updateCount(e)}>
                    Ball
                  </Button>
                  <Button name="fouls">Foul</Button>
                </ButtonGroup>

                {/* PITCH SELECTION Reached Base */}
                <ButtonGroup
                  color="success"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button>Single</Button>
                  <Button>Double</Button>
                  <Button>Triple</Button>
                  <Button>Homerun</Button>
                  <Button>Walk</Button>
                </ButtonGroup>

                {/* PITCH SELECTION OUT */}
                <ButtonGroup
                  color="error"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button>Popout</Button>
                  <Button>Flyout</Button>
                  <Button>Groundout</Button>
                </ButtonGroup>
              </Box>
            </Grid>

            <Grid size={3} item>
              <Box sx={{ bgcolor: "#282c34" }}>
                <BaseballDiamond bases={bases} />

                <br />

                <OutCounterDisplay outs={outs} />

                <p>
                  {Math.trunc(inning)}{" "}
                  {inning.toString().endsWith(".5") ? (
                    <ArrowDropDownIcon />
                  ) : (
                    <ArrowDropUpIcon />
                  )}
                  {count.strikes} - {count.balls}
                </p>

                <h2>
                  {score.away} - {score.home}
                </h2>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </header>
    </div>
  );
}

export default App;
