import { useAuth0 } from '@auth0/auth0-react';
import { Routes, Route, Navigate, useParams } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import UpdateItem from "./pages/UpdateItem";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();

  // Show loading screen
  if (isLoading) {
    return (
      <div className="app-container">
        <div className="loading-state">
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    );
  }

  // Show error screen
  if (error) {
    return (
      <div className="app-container">
        <div className="error-state">
          <div className="error-title">Oops!</div>
          <div className="error-message">Something went wrong</div>
          <div className="error-sub-message">{error.message}</div>
        </div>
      </div>
    );
  }

  // Show login page if not authenticated
if (!isAuthenticated) {
  return (
    <div className="app-container">
      <div className="main-card-wrapper" style={{ 
        background: 'linear-gradient(145deg, #e7f1e8, #e6f5e6)',
        padding: '3rem',
        maxWidth: '450px',
        borderRadius: '20px',
        boxShadow: '0 15px 40px rgba(0,0,0,0.4)',
        textAlign: 'center',
        color:'#2e7d32'
      }}>
        <h1 className="main-title" style={{
          color: '#2e7d32',
          textShadow: '0 4px 15px rgba(0,0,0,0.4)',
          marginBottom: '1rem'
        }}>
          Welcome to JuicySmoothie
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#2e7d32',
          marginBottom: '2rem'
        }}>
          Your healthy smoothie journey starts here
        </p>
        <LoginButton />
      </div>
    </div>
  );
}


  // Authenticated routes
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/menu/:id" element={<UpdateItem key={useParams().id} />} />
        <Route path="/about" element={<About />} />
        {/* Catch-all route for authenticated users */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Optional profile and logout section */}
      {/* <div className="app-container">
        <div className="main-card-wrapper">
          <div className="logged-in-section">
            <div className="logged-in-message">✅ Successfully authenticated!</div>
            <h2 className="profile-section-title">Your Profile</h2>
            <div className="profile-card">
              <Profile />
            </div>
            <LogoutButton />
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}

export default App;
