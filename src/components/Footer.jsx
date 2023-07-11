import {
  Flex,
  HStack,
  IconButton,
  Image,
  Link as LinkChakra,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFacebook, BsFillTelephoneFill, BsInstagram } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import logoEmpresa from '../assets/logoEmpresa.svg';
import logoMarretti from '../assets/logoMarretti.png';
export const Footer = () => {
  return (
    <Flex
      backgroundColor="black"
      color={'white'}
      w={'100%'}
      fontSize={['14px', '16px']}
      p={6}
      align={'center'}
      justify={('space-around', 'space-around')}
      direction={['column', 'row']}
    >
      <Stack as={Link} to={'/'} size={'sm'} pb={10}>
        <Image
          src={logoEmpresa}
          alt="Logo Escaleras Goggi"
          h={['80px', '100px']}
        />
      </Stack>
      <VStack pb={10}>
        <Text>Representantes de:</Text>
        <Stack size={'sm'}>
          <Image src={logoMarretti} alt="Logo Marreti" h={['30px', '40px']} />
        </Stack>
      </VStack>
      <VStack align={'center'} pb={8}>
        <Text>Síguenos en nuestras redes sociales!!</Text>
        <LinkChakra href="https://www.instagram.com/escalerasgoggi/" isExternal>
          <IconButton
            colorScheme="whiteAlpha"
            variant={'outline'}
            aria-label="Link Instagram"
            size="lg"
            icon={<BsInstagram />}
            borderRadius={'50%'}
          />
        </LinkChakra>

        <LinkChakra
          href="https://www.facebook.com/profile.php?id=100069053231731"
          isExternal
        >
          <IconButton
            colorScheme="whiteAlpha"
            variant={'outline'}
            aria-label="Link Facebook"
            size="lg"
            icon={<BsFacebook />}
            borderRadius={'50%'}
          />
        </LinkChakra>
      </VStack>
      <VStack align={'initial'} pb={5}>
        <Text fontWeight={'semibold'}>Contacto:</Text>
        <HStack>
          <AiOutlineMail /> <Text>info@escalerasmartinezlastra.es</Text>
        </HStack>
        <HStack>
          <BsFillTelephoneFill /> <Text>942-26 20 85</Text>
        </HStack>
        <HStack>
          <FaMapMarkerAlt />{' '}
          <Text>
            Polígono de Cros, Bloque 2 Naves 1 y 2 Maliaño. <br /> Camargo C.P
            39600 Cantabria, España.
          </Text>
        </HStack>
      </VStack>
    </Flex>
  );
};
