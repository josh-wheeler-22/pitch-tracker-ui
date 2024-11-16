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
    backgroundColor: "#282c34"
  },
};

const PitchTypeModal = ({ isOpen, onClose, updatePitchType, pitchType }) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <Container maxWidth="sm">
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
            color={pitchType === "knuckleball" ? "secondary" : "primary"}
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
      </Container>
    </Modal>
  );
};

export default PitchTypeModal;
