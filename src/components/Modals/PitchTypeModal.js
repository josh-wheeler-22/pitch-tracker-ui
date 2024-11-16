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

const PitchTypeModal = ({ isOpen, onClose, updatePitchType }) => {

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles} ariaHideApp={false}>
      <Container maxWidth="sm">
        {/* PITCH SELECTER */}
        <ButtonGroup
          color="primary"
          variant="contained"
          aria-label="Basic button group"
          sx={{ flexWrap: "wrap", textAlign: 'center' }}
        >
          <Button
            name="slider"
            onClick={(e) => updatePitchType(e)}
          >
            SL
          </Button>
          <Button
            name="riser"
            onClick={(e) => updatePitchType(e)}
          >
            RS
          </Button>
          <Button
            name="drop"
            onClick={(e) => updatePitchType(e)}
          >
            DROP
          </Button>
          <Button
            name="screwball"
            onClick={(e) => updatePitchType(e)}
          >
            SCREW
          </Button>
          <Button
            name="knuckleball"
            onClick={(e) => updatePitchType(e)}
          >
            KCKL
          </Button>
          <Button
            name="curveball"
            onClick={(e) => updatePitchType(e)}
          >
            CRV
          </Button>
          <Button
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
