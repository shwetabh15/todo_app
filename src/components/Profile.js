// frontend/src/components/Profile.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('/auth/user', { withCredentials: true })
      .then(response => {
        setUser(response.data.user);
      })
      .catch(() => {
        setUser(null);
      });
  }, []);

  const handleLogout = () => {
    window.open('http://localhost:5000/auth/logout', '_self');
  };

  if (!user) {
    return <div>Please log in.</div>;
  }

  return (
    <div>
      <h2>Welcome, {user.displayName}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
