import { Box, Button, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import escaleraModerna from '../assets/escaleraModerna.png';
import fondoEscaleras from '../assets/fondoEscaleras.png';

export const Home = () => {
  return (
    <Box
      w={['100%', '90%']}
      h={'80vh'}
      backgroundImage={[escaleraModerna, escaleraModerna, fondoEscaleras]}
      backgroundSize={'contain'}
      backgroundRepeat={'no-repeat'}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <Heading
        as={'h1'}
        color={['whiteAlpha.900']}
        bg={'black'}
        h={['180px', '200px', '160px', '200px', '3xs']}
        m={[5, 10]}
        p={[5, 10]}
        fontSize={['18px', '18px', '18px', '30px']}
        fontWeight={'light'}
        lineHeight={'tall'}
        w={['', '400px', '2xl', '4xl', '4xl']}
      >
        ESCALERAS EXCLUSIVAS, desde Cantabria para España, únicas por su diseño
        y calidad, ESCALERAS que transforman ambientes, viviendo la belleza de
        los detalles.
      </Heading>
      <Button colorScheme="blackAlpha" as={Link} to={'/products'}>
        Explora nuestras Escaleras
      </Button>
    </Box>
  );
};
