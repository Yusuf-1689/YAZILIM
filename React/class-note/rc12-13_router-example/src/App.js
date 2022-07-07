import Footer from './components/Footer';
import Nav from './components/Nav';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Instructors from './pages/Instructors';
import NotFound from './pages/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstructorDetail from './pages/InstructorDetail';
import { Navigate } from 'react-router-dom';
import Paths from './pages/Paths';
import FullStack from './pages/FullStack';
import Aws from './pages/Aws';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructors" element={<Instructors />} />
          <Route path="/instructors/:id" element={<InstructorDetail />} />

          <Route path="/paths" element={<Paths />}>
            <Route path="fullstack" element={<FullStack />} />
            <Route path="aws" element={<Aws />} />
          </Route>

          
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;