import { Navbar, Footer } from '@components';
import { Home, About, Contact, Service, Login,Signup } from '@pages';
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
          <Route path='/service' element={<Service />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
