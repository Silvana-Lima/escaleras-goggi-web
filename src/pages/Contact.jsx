import {
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
    <SimpleGrid
      columns={[1, 2]}
      p={10}
      w={'80%'}
      spacing={10}
      bg={'black'}
      color={'white'}
    >
      <Stack>
        <Heading mb={6}>Contáctanos</Heading>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <FormControl>
            <FormLabel>Nombre</FormLabel>
            <Input type="text" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" />
            <FormErrorMessage></FormErrorMessage>
          </FormControl>
          <FormControl>
            <FormLabel>Telefono</FormLabel>
            <Input type="number" />
          </FormControl>
          <FormControl>
            <FormLabel>Mensaje</FormLabel>
            <Textarea />
          </FormControl>

          <Button type="submit" colorScheme="teal">
            Enviar
          </Button>
        </form>
      </Stack>
      <Stack>
        <Heading as={'h3'} fontSize={'25px'}>
          Central:
        </Heading>
        <Text>
          Exposición, Oficinas y Fábrica: Polígono de Cros, Bloque 2 Naves 1 y 2
          Maliaño. Camargo C.P 39600 Cantabria, España.
        </Text>
        <Heading as={'h3'} fontSize={'20px'}>
          Horario de atención:
        </Heading>
        <Text>
          Lunes a viernes de 8 a 13 y 14:30 a 18 h. ( para un horario distinto
          concertar cita previa)
        </Text>
        <Heading as={'h3'} fontSize={'20px'}>
          Teléfono:
        </Heading>
        <Text>942-26 20 85</Text>
        <Heading as={'h3'} fontSize={'20px'}>
          Email:
        </Heading>
        <Text>info@escalerasmartinezlastra.es</Text>
      </Stack>
    </SimpleGrid>
  );
};
