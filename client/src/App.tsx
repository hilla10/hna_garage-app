import { Navbar, Footer } from '@components';
import { Home } from '@pages';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
