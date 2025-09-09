import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.tsx';
import Layout from './components/Layout.tsx';
import Organization from './pages/Organization.tsx';
import About from './pages/About.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/cpscdiv-web">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />}></Route>
          <Route path="/organizacao" element={<Organization />}></Route>
          <Route path="/sobre" element={<About />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
