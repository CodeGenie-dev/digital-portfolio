import './App.scss';
import {Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Dashboard from './components/Dashboard';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init({
    duration: 2500,
    delay: 400,
  })
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
