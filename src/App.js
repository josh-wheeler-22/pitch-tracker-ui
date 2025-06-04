import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid2";
import Strikezone from "./components/Strikezone/Strikezone";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import PitchTypeModal from "./components/Modals/PitchTypeModal";
import OutcomeModal from "./components/Modals/OutcomeModal";
import ProfileDisplay from "./components/PitcherDisplay/PitcherDisplay";
import PitchHistory from "./components/PitchHistory/PitchHistory";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { convertZone, wallpaperImage, webisteTheme } from "./utils/utils";
import "./App.css";

function App() {
  // State
  const [game, setGame] = useState({
    team1: {
      name: "",
      lineup: [
        { name: "Jordan Smith", hand: "R" },
        { name: "Rory Renk", hand: "R" },
        { name: "Tim", hand: "R" },
      ],
      pitcher: {
        name: "",
        hand: "R",
        atBats: [],
      },
      currentAtBat: {
        strikes: 0,
        balls: 0,
        hitter: "Jordan Smith",
        pitches: [],
      },
      score: 0,
    },
    team2: {
      name: "",
      lineup: [{ name: "", hand: "R" }],
      pitcher: {
        name: "",
        hand: "R",
        atBats: [],
      },
      currentAtBat: { strikes: 0, balls: 0, hitter: "", pitches: [] },
      score: 0,
    },
  });
  const [zone, setZone] = useState(null);
  const [activeTeam, setActiveTeam] = useState("team2");
  const [pitchType, setPitchType] = useState(null);

  const [tab, setTab] = useState(0);

  // Modals
  const [isPitchTypeModalOpen, setIsPitchTypeModalOpen] = useState(false);
  const [isPitchOutcomeModalOpen, setIsPitchOutcomeModalOpen] = useState(false);
  // team 1
  // const [team1, setTeam1] = useState("");
  // const [pitcher1, setPitcher1] = useState("");
  // const [atBats1, setAtbats1] = useState([]);
  // const [hitters1, setHitters1] = useState([]);
  // // team 2
  // const [team2, setTeam2] = useState("");
  // const [pitcher2, setPitcher2] = useState("");
  // const [atBats2, setAtbats2] = useState([]);
  // const [hitters2, setHitters2] = useState([]);

  const updatePitchType = (event) => {
    const name = event.target.name;

    setPitchType(name);
    setIsPitchTypeModalOpen(false);
    setIsPitchOutcomeModalOpen(true);
  };

  const updatePitchOutcome = (event) => {
    const name = event.target.name;

    // construct pitch
    const pitch = {
      zone: convertZone(zone),
      pitchType: pitchType,
      outcome: name,
    };
    // Add new pitch to pitch list
    const pitches = [...game[activeTeam]?.currentAtBat?.pitches, pitch];
    // Add pitch list to current at bat
    const cAB = {
      ...game[activeTeam].currentAtBat,
      pitches: pitches,
    };

    // end at bat
    if (!["foul", "strike", "ball"].includes(name)) {
      setGame((prevGame) => ({
        ...prevGame,
        [activeTeam]: {
          ...prevGame[activeTeam],
          pitcher: {
            ...prevGame.pitcher,
            atBats: [prevGame?.[activeTeam]?.pitcher?.atBats, cAB],
          },
          currentAtBat: {
            strikes: 0,
            balls: 0,
            hitter: getNextHitter(),
            pitches: [],
          },
        },
      }));
    } else {
      // add a pitch to the current at bat
      setGame((prevGame) => ({
        ...prevGame,
        [activeTeam]: {
          ...prevGame[activeTeam],
          currentAtBat: cAB,
        },
      }));
    }

    handleClosePitchOutcomeModal();
  };

  const getNextHitter = () => {
    const hittingTeam = activeTeam === "team1" ? "team2" : "team1";
    const currentIndex = game[hittingTeam]?.lineup?.findIndex(
      (user) => user.name === game[activeTeam]?.currentAtBat?.hitter?.name
    );

    const desiredIndex = currentIndex + 1;

    const hitter =
      game[hittingTeam].lineup[desiredIndex % game[hittingTeam].lineup?.length];

    return hitter.name;
  };

  const handleClosePitchTypeModal = () => {
    setIsPitchTypeModalOpen(false);
  };

  const handleClosePitchOutcomeModal = () => {
    setIsPitchOutcomeModalOpen(false);
  };

  // Initiate pitch type modal and set active zone
  const onZoneClick = (zone) => {
    setIsPitchTypeModalOpen(true);
    setZone(zone);
  };

  useEffect(() => {
    setActiveTeam("team2");
  }, []);

  return (
    <div className="App">
      <Header setTab={setTab} />
      <br />
      <br />
      <br />
      <br />
      <ThemeProvider theme={webisteTheme}>
        <Container
          maxWidth="xl"
          sx={{
            backgroundImage: `url(${wallpaperImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh", // Ensure it covers the entire viewport height
            paddingTop : "100px",
          }}
        >
          <br />
          <Grid container spacing={2}>
            {tab === 1 ? (
              <>
                <Grid
                  size={{ xs: 12, md: 8, lg: 6, xl: 6 }}
                  sx={{ overflow: "auto", maxHeight: "80vh" }}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "white" }}
                  >
                    Away Team
                  </Typography>
                  <ProfileDisplay pitcher={game[activeTeam].pitcher} />
                </Grid>
                <Grid
                  size={{ xs: 12, md: 8, lg: 6, xl: 6 }}
                  sx={{ overflow: "auto", maxHeight: "80vh" }}
                >
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "white" }}
                  >
                    Home Team
                  </Typography>
                  <ProfileDisplay pitcher={game[activeTeam].pitcher} />
                </Grid>
              </>
            ) : (
              <>
                <Grid size={{ xs: 12, md: 8, lg: 6, xl: 6 }}>
                  <Box justifyContent="center" alignItems="center">
                    {/* STRIKEZONE SELECTION */}
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ color: "white" }}
                    >
                      Strikezone
                    </Typography>
                    <Strikezone onZoneClick={onZoneClick} zone={zone} />
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 8, lg: 6, xl: 6 }}>
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    sx={{ color: "white" }}
                  >
                    Pitch Feed
                  </Typography>
                  {/* Current Atbat Pitch Feed */}
                  <PitchHistory
                    pitches={game?.[activeTeam]?.currentAtBat?.pitches}
                    hitter={game?.[activeTeam]?.currentAtBat?.hitter}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
        <div>
          <PitchTypeModal
            isOpen={isPitchTypeModalOpen}
            onClose={handleClosePitchTypeModal}
            updatePitchType={updatePitchType}
          />

          <OutcomeModal
            isOpen={isPitchOutcomeModalOpen}
            onClose={handleClosePitchOutcomeModal}
            updatePitchOutcome={updatePitchOutcome}
            pitchType={pitchType}
          />
        </div>
      </ThemeProvider>
      <Footer />
    </div>
  );
}

export default App;
