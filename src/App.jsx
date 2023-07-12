import { Route, Routes } from 'react-router-dom';

import { AppLayout } from './layout/AppLayout';
import { Company } from './pages/company';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { News } from './pages/News';

function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/empresa" element={<Company />} />
          <Route path="/novedades" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
