import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { Us } from './pages/Us';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Us />} />
          <Route path="/novedades" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
