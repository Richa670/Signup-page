import React from 'react';
import {  useNavigate, Link as RouterLink } from 'react-router-dom';
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

const SignUpForm = () => {
    const navigate = useNavigate();
    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);
        navigate('/dashboard'); // Redirect after successful login
      };
    
      const handleGoogleFailure = () => {
        console.log("Google Login Failed");
        alert("Google login failed. Please try again.");
      };

      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const email = formData.get('email');
        const password = formData.get('password');
        console.log('sign in attempt:', { name, email, password });
        if (name && email && password) {
          alert("Signin Successful!");
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
          Already a member?{' '}
          <Link component={RouterLink} to="/login" underline="hover">
            Access your account here.
          </Link>
        </Typography>

        <Typography variant="h5" component="h2" gutterBottom>
          Create Account
        </Typography>

        <Typography variant="body1" textAlign="center" sx={{ mb: 3 }}>
          Join our community of scholars and researchers.
        </Typography>

        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="new-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Register Now
          </Button>

             {/* Google Signin Button */}
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          useOneTap  // Optional: Shows Google One-Tap sign-in
          render={({ onClick }) => (
          <Button
            fullWidth
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={onClick}
            sx={{ mt: 1, mb: 2 }}
          >
            Register using Google
          </Button>
           )}
           />
          
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                © 2024 
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUpForm;