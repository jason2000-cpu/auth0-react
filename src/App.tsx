import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="app-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth0-logo">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36C11.716 36 4 28.284 4 20 4 11.716 11.716 4 20 4c8.284 0 15 7.716 15 16 0 8.284-7.716 16-15 16z" fill="#EB5424"/>
              <path d="M20 8c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8zm0 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" fill="#EB5424"/>
            </svg>
            <h1>Auth0</h1>
          </div>
          <h2>Authentication Demo</h2>
        </div>

        {!isAuthenticated ? (
          <div className="login-section">
            <p className="welcome-text">
              Welcome! Please log in to continue.
            </p>
            <button 
              className="auth-button login-button"
              onClick={() => loginWithRedirect()}
            >
              <span className="button-icon">🔐</span>
              Log In
            </button>
          </div>
        ) : (
          <div className="profile-section">
            <div className="profile-header">
              <div className="avatar">
                {user?.picture ? (
                  <img src={user.picture} alt={user.name || 'User'} />
                ) : (
                  <span className="avatar-placeholder">
                    {user?.name?.charAt(0)?.toUpperCase() || 'U'}
                  </span>
                )}
              </div>
              <div className="user-info">
                <h3>{user?.name || 'User'}</h3>
                <p>{user?.email}</p>
              </div>
            </div>
            
            <div className="user-details">
              <div className="detail-item">
                <span className="detail-label">User ID:</span>
                <span className="detail-value">{user?.sub}</span>
              </div>
              {user?.email_verified && (
                <div className="verification-badge">
                  <span className="verified-icon">✅</span>
                  Email Verified
                </div>
              )}
            </div>

            <button 
              className="auth-button logout-button"
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              <span className="button-icon">🚪</span>
              Log Out
            </button>
          </div>
        )}

        <div className="tech-stack">
          <p>Built with React + TypeScript + Auth0</p>
        </div>
      </div>
    </div>
  )
}

export default App
