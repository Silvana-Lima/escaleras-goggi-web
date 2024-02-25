import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
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
    <Stack backgroundColor="rgba(0, 0, 0, 0.8)" w={'100%'}>
      <Container
        as="header"
        maxW={'1200px'}
        color={'white'}
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        p={3}
      >
        <Stack as={Link} to={'/'} size={'sm'}>
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
                  <MenuItem as={Link} to={'/products'}>
                    Productos
                  </MenuItem>
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
                <MenuItem as={Link} to={'/products'}>
                  Todos
                </MenuItem>
                <MenuItem as={Link} to={'/madera'}>
                  Madera
                </MenuItem>
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
      </Container>
    </Stack>
  );
};
