import React from 'react';
import { Button, Container, Typography, Grid, Paper, styled } from '@mui/material';
import heroImage from '../assets/Anniversary.png';

const HeroContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(4, 0),
}));

const HeroCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius * 2,
  textAlign: 'left',
  maxWidth: '800px',
  width: '100%',
}));

const GridContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
}));

const HeroImage = styled('img')({
  width: '100%',
  height: 'auto',
  borderRadius: 'inherit',
});

const HeroSection = ({ handleOpen }) => {
  return (
    <Container>
      <HeroContainer>
        <HeroCard>
          <GridContainer container spacing={4}>
            <Grid item xs={12} md={5}>
              <Typography variant="h3">Let’s Learn & Earn</Typography>
              <Typography variant="h5">Get a chance to win up to Rs. 15,000</Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleOpen}
              >
                Refer Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <HeroImage src={heroImage} alt="Hero" />
            </Grid>
          </GridContainer>
        </HeroCard>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
