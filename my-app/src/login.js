import React from 'react';
// import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Grid
} from '@mui/material';
import { Google as GoogleIcon } from '@mui/icons-material';

const LoginPage = () => {
     const navigate = useNavigate();

      // Handle Google Login Success
  const handleGoogleSuccess = (credentialResponse) => {
    console.log("Google Login Success:", credentialResponse);
    localStorage.setItem('authToken', 'google-token-123'); 
    navigate('/dashboard'); // Redirect after login
  };
  // Handle Google Login Failure
  const handleGoogleFailure = () => {
    console.error("Google Login Failed");
    alert("Google login failed. Please try again.");
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    
    console.log('Login attempt:', { email, password });

    
    if (email && password) {
      localStorage.setItem('authToken', 'dummy-token-123'); 
      localStorage.setItem('userEmail', email);
      alert("Login Successful!");
      navigate('/dashboard'); // Redirect on success
    } else {
      alert('Please fill in all fields!');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
          mb: 4
        }}
      >
        {/* Logo placeholder - replace with your actual logo */}
        <Typography variant="h4" component="h1" gutterBottom>
          Logo
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Don't have an account?{' '}
          <Link component={RouterLink} to="/signup" underline="hover">
            Create one today
          </Link>
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Log In
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
          

          {/* Google Login Button */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            render={({ onClick }) => (
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                onClick={onClick}
                sx={{ mt: 1, mb: 2 }}
              >
                Log in with Google 
              </Button>
           )}
           />
          
          <Grid container justifyContent="center">
            <Grid item>
              <Link component={RouterLink} to="/forgot-password" variant="body2" underline="hover">
                Forgot your password?
              </Link>
            </Grid>
          </Grid>
          
          <Grid container justifyContent="center" sx={{ mt: 3 }}>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                © 2024 Eimple
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;