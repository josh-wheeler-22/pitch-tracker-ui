import React from "react";
import Modal from "react-modal";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#282c34",
  },
};

const OutcomeModal = ({ isOpen, onClose, updatePitchOutcome }) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <Container maxWidth="sm"  sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}>
        {/* OUTCOME */} 
        <ButtonGroup color="primary" variant="contained" aria-label="Basic button group" sx={{ flexWrap: "wrap", textAlign: 'center' }} >
          <Button name="strike" onClick={(e) => updatePitchOutcome(e)}>
            Strike
          </Button>
          <Button name="ball" onClick={(e) => updatePitchOutcome(e)}>
            Ball
          </Button>
          <Button name="foul" onClick={(e) => updatePitchOutcome(e)}>
            Foul
          </Button>
        </ButtonGroup>
        <ButtonGroup color="error" variant="contained" aria-label="Basic button group" sx={{ flexWrap: "wrap", textAlign: 'center' }}>
          <Button name="popout" onClick={(e) => updatePitchOutcome(e)}>
            Popout
          </Button>
          <Button name="flyout" onClick={(e) => updatePitchOutcome(e)}>
            Flyout
          </Button>
          <Button name="groundout" onClick={(e) => updatePitchOutcome(e)}>
            Groundout
          </Button>
        </ButtonGroup>
        <ButtonGroup color="success" variant="contained" aria-label="Basic button group" sx={{ flexWrap: "wrap", textAlign: 'center' }}>
          <Button name="single" onClick={(e) => updatePitchOutcome(e)}>
            Single
          </Button>
          <Button name="double" onClick={(e) => updatePitchOutcome(e)}>
            Double
          </Button>
          <Button name="triple" onClick={(e) => updatePitchOutcome(e)}>
            Triple
          </Button>
          <Button name="homerun" onClick={(e) => updatePitchOutcome(e)}>
            Homerun
          </Button>
          <Button name="walk" onClick={(e) => updatePitchOutcome(e)}>
            Walk
          </Button>
        </ButtonGroup>
      </Container>
    </Modal>
  );
};

export default OutcomeModal;
