import { Heading, VStack } from '@chakra-ui/react';

export const Home = () => {
  return (
    <VStack>
      <Heading
        color={'whiteAlpha.900'}
        bg={'teal.600'}
        p={10}
        m={10}
        h={'200px'}
        w={'73%'}
      >
        ESCALERAS EXCLUSIVAS, desde Cantabria para España, únicas por su diseño
        y calidad, ESCALERAS que transforman ambientes, viviendo la belleza de
        los detalles.
      </Heading>
    </VStack>
  );
};
