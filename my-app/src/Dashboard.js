import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    navigate('/login');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        You have successfully logged in as: <strong>{userEmail}</strong>
      </Typography>
      
    
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: 3,
        mt: 4
      }}>
        
        <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
          <Typography variant="h6">Recent Activity</Typography>
          <Typography>No new notifications</Typography>
        </Box>
        
        <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
          <Typography variant="h6">Statistics</Typography>
          <Typography>5 new messages</Typography>
        </Box>
      </Box>

      <Button 
        variant="contained" 
        onClick={handleLogout}
        sx={{ mt: 4 }}
      >
        Log Out
      </Button>
    </Box>
  );
};

export default Dashboard;