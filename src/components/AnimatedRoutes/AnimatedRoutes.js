import React from 'react'
import { Routes, Route, useLocation} from 'react-router-dom';
// import Layout from './components/Layout';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
// import Portfolio from './components/Portfolio';
// import Dashboard from './components/Dashboard';
import { AnimatePresence } from 'framer-motion';
import Contact from '../Contact';
import About from '../About';
import Layout from '../Layout';
import Home from '../Home';
import Portfolio from '../Portfolio';
import Dashboard from '../Dashboard';

const AnimatedRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes