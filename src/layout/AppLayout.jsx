import { VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';

export const AppLayout = () => {
  return (
    <VStack>
      <Header />
      <Outlet />
    </VStack>
  );
};
