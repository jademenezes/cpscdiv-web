import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion as m } from 'framer-motion';

const Layout = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="d-flex flex-column min-vh-100"
    >
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </m.div>
  );
};

export default Layout;
