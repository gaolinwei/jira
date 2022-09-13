import { AuthenticatedApp } from 'authenticated-app';
import { AuthProvider, UserAuth } from 'context/auth-context';
import React from 'react';
import { UnauthenticatedApp } from 'unauthenticated-app';

function App() {
  const {user} = UserAuth()
  return (
    <div className="App">
      {user?<AuthenticatedApp/>:<UnauthenticatedApp/>}
    </div>
  );
}

export default App;
