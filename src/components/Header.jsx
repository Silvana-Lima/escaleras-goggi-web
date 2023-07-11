import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import logoEmpresa from '../assets/logoEmpresa.svg';

export const Header = () => {
  return (
    <Flex
      as="header"
      w={'100%'}
      justify={'space-around'}
      alignItems={'center'}
      backgroundColor="rgba(0, 0, 0, 0.8)"
      color={'white'}
    >
      <Stack as={Link} to={'/'} size={'sm'} m={3} mr={30}>
        <Image src={logoEmpresa} alt="Logo" h={'90px'} />
      </Stack>

      <Breadcrumb mt={5} fontWeight="medium" fontSize="sm" separator="">
        <Menu>
          <MenuButton as={BreadcrumbLink} mr={3}>
            PRODUCTOS
            <ChevronDownIcon />
          </MenuButton>
          <MenuList color={'black'}>
            <MenuItem>Madera</MenuItem>
            <MenuItem>Cristal</MenuItem>
            <MenuItem>Acero inoxidable</MenuItem>
            <MenuItem>Acabados Especiales</MenuItem>
            <MenuItem>Barandillas</MenuItem>
            <MenuItem>Rústicas</MenuItem>
          </MenuList>
        </Menu>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={'/nosotros'}>
            NOSOTROS
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={'/novedades'}>
            NOVEDADES
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={'/contacto'}>
            CONTACTO
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </Flex>
  );
};
