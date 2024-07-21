import React from 'react';
import { Container, Typography, Grid, Link, styled } from '@mui/material';

const FooterContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: '#f5f7fa',
  textAlign: 'center',
}));

const FooterSection = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  margin: theme.spacing(1),
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="h6">Accredian</Typography>
      <FooterSection container justifyContent="center" spacing={2}>
        <Grid item>
          <FooterLink href="#privacy-policy">Privacy Policy</FooterLink>
        </Grid>
        <Grid item>
          <FooterLink href="#terms-of-service">Terms of Service</FooterLink>
        </Grid>
        <Grid item>
          <FooterLink href="#contact-us">Contact Us</FooterLink>
        </Grid>
      </FooterSection>
      <Typography variant="body2" color="textSecondary">
        &copy; {new Date().getFullYear()} Accredian. All rights reserved.
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
