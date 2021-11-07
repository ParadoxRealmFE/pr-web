import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components'
import { Container } from '@mui/material';

const Section = styled.section`
  width: ${props => `${props.width}px`};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: #000;
`

const Header = styled.div`
  color: #fff;
`

const Title = styled.h3`
  color: #fff;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction:
`

const steps = [
    {
      label: "October 31", 
      description: "Scene for website Development Finalized ", 
    },
    {
      label: "November 3rd Day of the Dead", 
      description: "Discord launch", 
    },
    {
      label: "November 7th", 
      description: "Website Launch", 
    },
    {
      label: "November 26th BLACK FRIDAY USA", 
      description: "Main launch of FAIR MINT with Solana mint partners ", 
    },
    {
      label: "December 31st New Years Eve", 
      description: "Cross collaboration with Cobalt / NULS Hack-A-Thon", 
    },
    {
      label: "January 1st  New Years Day", 
      description: ["*Launch Party*", "Bordel: Speakeasy located in Chicago, IL"]
    },
     {
       label: "February 14th St. Valentine's Day", 
       description: ["*Crowd Vote Art Exhibit (visual and audio)*", "Mint Museum located in North Carolina", "https://mintmuseum.org/", "Logan Square located in Chicago, IL", 
       "https://giggster.com/listing/large-logan-square-garage-space", "Convention Center located in Cincinnati, OH", "https://www.duke-energycenter.com/",] 
      },
    {
      label: "March 17th St. Patrick's Day", 
      description: "Build out begins of chosen real estate in the metaverse ", 
    },
    {
      label: "April 1st April Fools Day", 
      description: ["*Murder Mystery Dinner Party Event*",
      "(Select NFT invite only)",
       "The Murder Mystery Company ",
      "525 West Arlington Place, Chicago, IL 60614",                      
      "https://murdermysterydinnerchicago.com/?utm_source=GMB&utm_medium=organic"]
    },
    {
      label: "April 20th ", 
      description: "Virtual Event / Music streaming Event (local college radio)", 
    },
    {
      label: "July 14th Bastille Day French", 
      description:["Panic room / Event escalation: participants selected from NFT holders to compete in real life panic room hosted by Paradox Realm (coincides with the addition of the American Wild West world / new world within Paradox Realm)", "Panic Room NYC  (Wild West Escape Room)", "https://paniqescaperoom.com/nyc/en"], 
    },
  ]


export default function VerticalLinearStepper({width}) {
  const [activeStep, setActiveStep] = React.useState(4);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Section width={width}>
     
      <Container>
      <Header>
        <Title>Roadmap</Title>  
      </Header>
      <Stepper activeStep={2} nonLinear={true} orientation="vertical">
        {steps.map((step, index) => (
          <Step active key={step.label} style={{color: "#000"}}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              {/* <TextContainer> */}
              {
                Array.isArray(step.description) ? (
                  step.description.map((item, i) => {
                    console.log(item)
                    return(
                    <Typography key={i}>{item}</Typography>
                    )
                  })
                ) : (
                  <Typography>{step.description}</Typography>
                )
              }
              {/* </TextContainer> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      </Container>
    </Section>
  );
}