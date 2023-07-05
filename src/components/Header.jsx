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

export const Header = () => {
  return (
    <Flex as="header" w={'100%'} p={5} justify={'space-around'}>
      <Stack as={Link} to={'/'} size={'sm'} mr={30}>
        <Image
          src="http://escalerasmartinezlastra.es/wp-content/uploads/2014/03/LogoDef.gif"
          alt="Logo"
        />
      </Stack>

      <Breadcrumb mt={5} fontWeight="medium" fontSize="sm" separator="">
        <Menu>
          <MenuButton as={BreadcrumbLink} mr={3}>
            PRODUCTOS
            <ChevronDownIcon />
          </MenuButton>
          <MenuList>
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
