import Prog from './components/Prog';
import Hero from './components/Hero';
import { motion as m } from 'framer-motion';

function App() {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65 }}
        className="home"
      >
        <Hero />
        <Prog />
      </m.div>
    </>
  );
}

export default App;
