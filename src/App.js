import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import NavbarTop from './Components/Navbar';
import Experience from './Pages/Experience';
import Skills from './Pages/Skills';
import Interest from './Pages/Interest';
import Award from './Pages/Awards';

function App() {
  return (
    <>
    <NavbarTop />

      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/interest' element={<Interest />} />
          <Route path='/award' element={<Award />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
