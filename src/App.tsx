import React from 'react';

import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <SignIn />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
