import { AuthenticatedApp } from 'authenticated-app';
import { ErrorBoundary } from 'components/error-boundary';
import { FullPageLoading, newError } from 'components/lib';
import { AuthProvider, UserAuth } from 'context/auth-context';
import React from 'react';
import { UnauthenticatedApp } from 'unauthenticated-app';

function App() {
  const { user } = UserAuth()
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={newError}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
