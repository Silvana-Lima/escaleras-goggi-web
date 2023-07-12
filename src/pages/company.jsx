import {
  Box,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';

import escaleraModerna from '../assets/escaleraModerna.png';

export const Us = () => {
  return (
    <Box display={'flex'} w={['100%', '80%']}>
      <SimpleGrid columns={[1, 1, 2]} m={[1, 5]} fontSize={['14px', '16px']}>
        <VStack p={10} bgColor={'black'}>
          <Heading mb={5} color={'white'} fontSize={['20px', '25px']}>
            La empresa
          </Heading>
          <Divider mb={5} />
          <Text color={'white'}>
            ESCALERAS GOGGI desde Cantabria para España. Diseña escaleras
            ofreciendo soluciones prácticas. Fabrica escaleras, en su sede de
            Cantabria, utilizando elementos tradicionales como la madera,
            innovadores como el acero inoxidable y puros como el cristal.
            Instala escaleras cuidando todos los detalles finales de la obra.
            Diseño Italiano. MARRETTI SCALE junto a ESCALERAS GOGGI para España
            conforman un equipo de trabajo comprometidos en ofrecer ESCALERAS
            EXCLUSIVAS, únicas por su diseño y calidad, ESCALERAS que
            transforman ambientes, viviendo la belleza de los detalles. Cada
            escalera Marretti no solo une plantas de una vivienda, sino que hace
            realidad ideas y sueños, es un diálogo entre la tecnología y la
            creatividad, renovada en cada proyecto.
          </Text>
        </VStack>
        <Image src={escaleraModerna} boxSize={'xl'} />
      </SimpleGrid>
    </Box>
  );
};
