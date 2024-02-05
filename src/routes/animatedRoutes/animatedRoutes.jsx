import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Signin from '../Signin/Signin';
import Main from '../Main/Main';
import { useLocation } from 'react-router-dom';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Signin />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
