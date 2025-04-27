// src/ForgotPassword.js
import { useState } from 'react';
import { useNavigate,Link as  RouterLink } from 'react-router-dom';
import { 
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Link
} from '@mui/material';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Password reset requested for:', email);
    alert(`Password reset link sent to ${email}`);
    navigate('/login');
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Forgot Password
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
          >
            Send Reset Link
          </Button>
          
          <Box sx={{ mt: 2 }}>
            <Link 
              component={RouterLink} 
              to="/login" 
              underline="hover"
            >
              Back to Login
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;