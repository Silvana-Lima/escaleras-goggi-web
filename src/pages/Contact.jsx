import {
  FormControl,
  // FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';

export const Contact = () => {
  return (
    <FormControl size={'sm'}>
      <FormLabel>Nombre</FormLabel>
      <Input type="text" />
      <FormLabel>Email</FormLabel>
      <Input type="email" />
      <FormHelperText>Well never share your email.</FormHelperText>
      <FormLabel>Telefono</FormLabel>
      <Input type="number" />
      <FormLabel>Mensaje</FormLabel>
      <Input type="text" />
    </FormControl>
  );
};
