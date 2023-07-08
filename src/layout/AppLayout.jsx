import { VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import escaleraModerna from '../assets/escaleraModerna.png';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const AppLayout = () => {
  return (
    <VStack backgroundImage={`url(${escaleraModerna})`}>
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  );
};
