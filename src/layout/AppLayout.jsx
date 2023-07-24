import { VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

//backgroundImage={`url(${escaleraModerna})`}

export const AppLayout = () => {
  return (
    <VStack backgroundColor={'blackAlpha.800'}>
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  );
};
