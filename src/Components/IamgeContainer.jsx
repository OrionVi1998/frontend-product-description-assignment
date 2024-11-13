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
        maxWidth: "95vw",
        minHeight: "inherit",
        minWidth: "50%"
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


function AtomicImage({url}) {

  const [loaded, setLoaded] = useState(false)

  console.log(url)

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