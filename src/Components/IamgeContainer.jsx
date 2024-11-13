import {Box, Button, CircularProgress, MobileStepper, Paper} from "@mui/material";
import {useState} from "react";

export default function ImageContainer({images}) {

  const [activeStep, setActiveStep] = useState(0);

  const maxSteps = images.length;

  const builtImages = images.map(i => (
    <AtomicImage
      key={i}
      url={i}
    />
  ))

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      activeStep === maxSteps - 1 ?
      0
      :
      prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) =>
      activeStep === 0 ?
        maxSteps - 1
        :
        prevActiveStep - 1
    );
  };

  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        maxHeight: "50vh",
        maxWidth: "95vw",
        minHeight: "inherit",
        minWidth: "50%"
      }}
    >
      {builtImages[activeStep]}
      <MobileStepper
        position={"static"}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {">"}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
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


function AtomicImage({url}) {

  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <img
        loading={"lazy"}
        src={url}
        onLoad={() => setLoaded(true)}
        style={{maxWidth: "inherit", height: "80%"}}
        alt={""}
      />
      {loaded ? "" :
        <Box
          padding={8}
        >
          <CircularProgress
            style={{maxWidth: "inherit", minHeight: "80%"}}
          />
        </Box>
      }
    </>
  )
}