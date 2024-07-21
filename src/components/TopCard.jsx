import React from 'react';
import { Container, Grid, Paper, Typography, styled } from '@mui/material';

const TopCardContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(1),
  marginTop: theme.spacing(5),
  paddingBottom: theme.spacing(1),
}));

const TopCardPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius * 8,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '80%',
  maxWidth: 600,
}));

const TopCardItem = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(0.5),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.875rem',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    cursor: 'pointer',
  },
}));

const TopCard = ({ scrollToRef }) => {
  return (
    <TopCardContainer>
      <TopCardPaper>
        <Grid container spacing={1}>
          <TopCardItem item xs={3} onClick={() => scrollToRef('refer')}>
            <Typography variant="body2">Refer</Typography>
          </TopCardItem>
          <TopCardItem item xs={3} onClick={() => scrollToRef('benefits')}>
            <Typography variant="body2">Benefits</Typography>
          </TopCardItem>
          <TopCardItem item xs={3} onClick={() => scrollToRef('faqs')}>
            <Typography variant="body2">FAQs</Typography>
          </TopCardItem>
          <TopCardItem item xs={3} onClick={() => scrollToRef('support')}>
            <Typography variant="body2">Support</Typography>
          </TopCardItem>
        </Grid>
      </TopCardPaper>
    </TopCardContainer>
  );
};

export default TopCard;
