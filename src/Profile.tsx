import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading || !isAuthenticated || !user) return null;

  return (
    <div className="navbar-profile">
      <img
        src={user.picture}
        alt={user.name}
        className="navbar-avatar"
      />
      <span className="navbar-username">
        {user.name}
      </span>
    </div>
  );
};

export default Profile;
