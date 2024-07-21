import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Menu, MenuItem, Dialog, DialogTitle, DialogContent, DialogActions, styled } from '@mui/material';
import Login from './Login'; 

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#f5f7fa',
  boxShadow: 'none',
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const LogoContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Logo = styled(Typography)({
  color: 'blue',
  fontWeight: 'bold',
});

const LogoSubText = styled(Typography)(({ theme }) => ({
  color: 'black',
  fontSize: '0.75rem',
  fontWeight: 'normal',
  marginTop: theme.spacing(0.5),
}));

const NavLinks = styled('div')(({ theme }) => ({
  flexGrow: 1,
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(4),
}));

const CourseButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
}));

const MenuStyled = styled(Menu)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginOpen, setLoginOpen] = useState(false);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  return (
    <AppBarStyled position="static">
      <Container>
        <Toolbar>
          <LogoContainer>
            <Logo variant="h6">accredian</Logo>
            <LogoSubText variant="body2">credentials that matter</LogoSubText>
          </LogoContainer>
          <NavLinks>
            <a href="#refer" style={{ color: 'inherit', textDecoration: 'none' }}>Refer & Earn</a>
            <a href="#resources" style={{ color: 'inherit', textDecoration: 'none' }}>Resources</a>
            <a href="#about" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a>
          </NavLinks>
          <CourseButton
            aria-controls="courses-menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
            variant="contained"
          >
            Courses
          </CourseButton>
          <MenuStyled
            id="courses-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Course 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Course 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Course 3</MenuItem>
          </MenuStyled>
          <Button variant="text" onClick={handleLoginOpen}>Login</Button>
          <Button variant="contained" color="primary">Try for free</Button>
        </Toolbar>
      </Container>
      <Dialog open={loginOpen} onClose={handleLoginClose}>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <Login />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </AppBarStyled>
  );
};

export default Header;
