import React, { forwardRef } from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

// Styled components using `styled` from MUI
const Section = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default,
}));

const Title = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  fontWeight: 'bold',
}));

const AccordionStyled = styled(Accordion)(({ theme }) => ({
  width: '100%',
  maxWidth: 800,
  marginBottom: theme.spacing(2),
}));

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(1, 2),
}));

const AccordionDetailsStyled = styled(AccordionDetails)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
}));

const Icon = styled('div')(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const FAQSection = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Title variant="h4">Frequently Asked Questions</Title>
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
          <Icon><InfoIcon /></Icon>
          <Typography>Do I need to have prior experience?</Typography>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <Typography>No. The program is designed for individuals at all levels of experience.</Typography>
        </AccordionDetailsStyled>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
          <Icon><SchoolIcon /></Icon>
          <Typography>What is the duration of the program?</Typography>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <Typography>The program typically lasts 6 weeks, depending on the chosen track.</Typography>
        </AccordionDetailsStyled>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
          <Icon><WorkIcon /></Icon>
          <Typography>Are there any prerequisites for the program?</Typography>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <Typography>No, there are no prerequisites. The program is designed to accommodate beginners as well as advanced learners.</Typography>
        </AccordionDetailsStyled>
      </AccordionStyled>
      <AccordionStyled>
        <AccordionSummaryStyled expandIcon={<ExpandMoreIcon />}>
          <Icon><InfoIcon /></Icon>
          <Typography>What resources are provided during the program?</Typography>
        </AccordionSummaryStyled>
        <AccordionDetailsStyled>
          <Typography>Participants receive access to online resources, including tutorials, webinars, and a community forum.</Typography>
        </AccordionDetailsStyled>
      </AccordionStyled>
    </Section>
  );
});

export default FAQSection;
