import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Show,
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
        <Image src={logoEmpresa} alt="Logo" h={['60px', '90px']} />
      </Stack>

      <Show below="md">
        <Menu>
          <IconButton
            as={MenuButton}
            aria-label="Menu"
            icon={<HamburgerIcon />}
            variant={'outline'}
          />
          <Portal>
            <MenuList>
              <MenuList color={'black'}>
                <MenuItem as={Link} to={'/'}>
                  Inicio
                </MenuItem>
                <MenuItem>Productos</MenuItem>
                <MenuItem as={Link} to={'/empresa'}>
                  La empresa
                </MenuItem>
                <MenuItem as={Link} to={'/contacto'}>
                  Contacto
                </MenuItem>
              </MenuList>
            </MenuList>
          </Portal>
        </Menu>
      </Show>

      <Show above="md">
        <Breadcrumb mt={5} fontWeight="medium" fontSize="sm" separator="">
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to={'/'}>
              INICIO
            </BreadcrumbLink>
          </BreadcrumbItem>

          <Menu>
            <MenuButton as={Link}>
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

          <BreadcrumbItem ml={3}>
            <BreadcrumbLink as={Link} to={'/empresa'}>
              LA EMPRESA
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
      </Show>
    </Flex>
  );
};
