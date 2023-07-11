import {
  AspectRatio,
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react';

export const Contact = () => {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <SimpleGrid
        columns={[1, 1, 2]}
        p={[5, 10]}
        w={['90%', '75%']}
        spacing={10}
        bg={'black'}
        color={'white'}
        m={[1, 5]}
      >
        <Stack w={['100%', '100%', '70%']}>
          <Heading as={'h2'} mb={[2, 6]} fontSize={['20px', '25px']}>
            Contáctanos
          </Heading>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              fontSize: '20px',
            }}
          >
            <FormControl>
              <FormLabel fontSize={['14px', '16px']}>Nombre</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={['14px', '16px']}>Email</FormLabel>
              <Input type="email" />
              <FormErrorMessage></FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel fontSize={['14px', '16px']}>Telefono</FormLabel>
              <Input type="number" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={['14px', '16px']}>Mensaje</FormLabel>
              <Textarea />
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              fontSize={['14px', '16px']}
            >
              Enviar
            </Button>
          </form>
        </Stack>
        <Stack fontSize={['14px', '16px']}>
          <Heading as={'h3'} fontSize={['14px', '16px']}>
            Central:
          </Heading>
          <Text>
            Exposición, Oficinas y Fábrica: Polígono Camargo, 1, 39600 Camargo,
            Cantabria, España.
          </Text>
          <Heading as={'h3'} fontSize={['14px', '16px']}>
            Horario de atención:
          </Heading>
          <Text>
            Lunes a viernes de 8 a 13 y 14:30 a 18 h. ( para un horario distinto
            concertar cita previa)
          </Text>
          <Heading as={'h3'} fontSize={['14px', '16px']}>
            Teléfono:
          </Heading>
          <Text>942-26 20 85</Text>
          <Heading as={'h3'} fontSize={['14px', '16px']}>
            Email:
          </Heading>
          <Text pb={10}>info@escalerasmartinezlastra.es</Text>

          <AspectRatio ratio={16 / 9}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2897.629108809296!2d-3.8436886000000055!3d43.42657529999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4949fef76238bb%3A0x5b9bcce477de8d60!2sEscaleras%20Goggi!5e0!3m2!1ses!2ses!4v1689108956018!5m2!1ses!2ses"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AspectRatio>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};
