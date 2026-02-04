import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './features/home/HomePage';
import { HelloReact } from './features/practical1/HelloReact';
import { Practical2 } from './features/practical2/Practical2';
import { Practical3 } from './features/practical3/Practical3';
import { Practical4 } from './features/practical4/Practical4';
import { Practical5 } from './features/practical5/Practical5';
import { LoginPanel } from './features/practical6/LoginPanel';
import { RegistrationForm } from './features/practical7/RegistrationForm';
import { RouterDemo } from './features/practical8/RouterDemo';
import { UserList } from './features/practical9/UserList';

/**
 * Main Application Component
 * Handles routing and global layout wrapping.
 */
function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/practical-1" element={<HelloReact />} />
          <Route path="/practical-2" element={<Practical2 />} />
          <Route path="/practical-3" element={<Practical3 />} />
          <Route path="/practical-4" element={<Practical4 />} />
          <Route path="/practical-5" element={<Practical5 />} />
          <Route path="/practical-6" element={<LoginPanel />} />
          <Route path="/practical-7" element={<RegistrationForm />} />
          <Route path="/practical-8/*" element={<RouterDemo />} />
          <Route path="/practical-9" element={<UserList />} />
          {/* Add more routes here as practicals are created */}
          <Route path="*" element={
            <div style={{ textAlign: 'center', padding: '4rem' }}>
              <h2>404 - Page Not Found</h2>
              <p>The practical you are looking for hasn't been built yet.</p>
            </div>
          } />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
