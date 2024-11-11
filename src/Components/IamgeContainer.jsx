import {Button, MobileStepper, Paper} from "@mui/material";
import {useState} from "react";

export default function ImageContainer({images}) {

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;
  const builtImages = images.map(i => (<img key={i} src={i} style={{maxWidth:"100vw"}} alt={""}/>))

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Paper sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      maxHeight: "50vh",
      maxWidth: "100vw"
    }}>
      {builtImages[activeStep]}
      <MobileStepper
        position={"static"}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            Back
          </Button>
        }
        variant="dots"
        steps={maxSteps}
        activeStep={activeStep}
      />
    </Paper>
  )
}