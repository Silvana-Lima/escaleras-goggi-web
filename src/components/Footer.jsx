import {
  Container,
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
    <Stack w={'100%'} backgroundColor="black">
      <Container
        color={'white'}
        maxW={'1200px'}
        fontSize={['12px', '14px']}
        pt={5}
        pb={5}
        display={'flex'}
        justifyContent={'space-between'}
        flexDirection={['column', 'column', 'row']}
        gap={5}
      >
        <Stack as={Link} size={'sm'} to={'/'}>
          <Image
            src={logoEmpresa}
            alt="Logo Escaleras Goggi"
            h={['60px', '90px']}
          />
        </Stack>
        <VStack>
          <Text>Representantes de:</Text>
          <Stack size={'sm'}>
            <Image src={logoMarretti} alt="Logo Marreti" h={['20px', '30px']} />
          </Stack>
        </VStack>
        <VStack align={'center'}>
          <Text>Síguenos en nuestras redes sociales!!</Text>
          <LinkChakra
            href="https://www.instagram.com/escalerasgoggi/"
            isExternal
          >
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
        <VStack align={['center', 'center', 'initial']}>
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
      </Container>
    </Stack>
  );
};
