import React, { forwardRef } from 'react';
import { Container, Typography, Grid, styled, Button } from '@mui/material'; // Import Button here
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Section = styled(Container)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 2),
  backgroundColor: '#f0f4ff',
  margin: theme.spacing(2, 0),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
}));

const Step = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const Icon = styled('div')(({ theme }) => ({
  fontSize: '4rem',
  color: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));

const ReferButton = styled('div')(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const HowToRefer = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Typography variant="h4" gutterBottom>How Do I Refer?</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Step>
            <Icon><PersonAddIcon /></Icon>
            <Typography variant="h6">Submit referrals easily via our website's referral section.</Typography>
          </Step>
        </Grid>
        <Grid item xs={12} md={4}>
          <Step>
            <Icon><AssignmentTurnedInIcon /></Icon>
            <Typography variant="h6">Earn rewards once your referral joins an Accredian program.</Typography>
          </Step>
        </Grid>
        <Grid item xs={12} md={4}>
          <Step>
            <Icon><AttachMoneyIcon /></Icon>
            <Typography variant="h6">Both parties receive a bonus 30 days after program enrollment.</Typography>
          </Step>
        </Grid>
      </Grid>
      <ReferButton>
        <Button variant="contained" color="primary" onClick={props.handleOpen}>Refer Now</Button>
      </ReferButton>
    </Section>
  );
});

export default HowToRefer;
