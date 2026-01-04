import { Navbar, Footer } from '@components';
import { Home, About, Contact } from '@pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
