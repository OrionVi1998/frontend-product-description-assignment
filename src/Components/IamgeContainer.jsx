import {Button, MobileStepper, Paper, useMediaQuery} from "@mui/material";
import {useState} from "react";

export default function ImageContainer({images}) {

  const [activeStep, setActiveStep] = useState(0);
  const matches = useMediaQuery('(min-width:1000px)')

  const maxSteps = images.length;

  const builtImages = images.map(i => (
    <img
      loading={"lazy"}
      key={i} src={i}
      style={{maxWidth: "inherit", height: "80%"}}
      alt={""}
    />
  ))

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        maxHeight: "50vh",
        maxWidth: matches ? "25vw" : "95vw",
        minHeight: "inherit",
        minWidth:"50%"
      }}
    >
      {builtImages[activeStep]}
      <MobileStepper
        position={"static"}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {">"}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {"<"}
          </Button>
        }
        variant="dots"
        steps={maxSteps}
        activeStep={activeStep}
      />
    </Paper>
  )
}