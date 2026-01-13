import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button 
      onClick={() => loginWithRedirect()} 
      className="button login"
      style={{
        padding: '1.2rem 3rem',
        fontSize: '1.3rem',
        fontWeight: '700',
        borderRadius: '12px',
        border: 'none',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, rgb(216, 222, 216), #dbe3db)',
        color: '#2e7d32',
        boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
        transition: 'all 0.3s ease-in-out',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.4)';
      }}
    >
      Log In
    </button>
  );
};

export default LoginButton;