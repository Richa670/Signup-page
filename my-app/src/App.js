import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import SignUpPage from "./signup";
import LoginPage from './login';
import Dashboard from './Dashboard';
import ForgotPassword from './ForgotPassword';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
};

function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
    <Router>
      <Routes>
         <Route path="/" element={<SignUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      
       <Route path="/forgot-password" element={<ForgotPassword />} />
       
        <Route  path="/Dashboard" element={ isAuthenticated() ?  <Dashboard /> : 
              <Navigate to="/login" replace />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

      </Routes>
    </Router>
    </GoogleOAuthProvider>
  );
}

export default App;