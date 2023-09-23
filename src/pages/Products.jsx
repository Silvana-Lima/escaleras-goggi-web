import { Box, Divider, Flex, Heading, Image } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import escaleraModerna from '../assets/escaleraModerna.png';
import escaleraroble from '../assets/escaleraroble.png';
import escaleraVidrio from '../assets/escaleraVidrio.png';

export const Products = () => {
  return (
    <Flex direction={'column'} width={['90%', '80%']} p={5}>
      <Heading
        as={'h2'}
        fontSize={['18px', '24px']}
        fontWeight={'normal'}
        color={'white'}
        mb={2}
      >
        Productos
      </Heading>
      <Divider orientation="horizontal" mb={6} />
      <Flex flexWrap={'wrap'} justify={'center'} gap={5}>
        <Card
          maxW="xs"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          color={'white'}
          as={Link}
          to={'/madera'}
        >
          <CardBody>
            <Box h={[260, 300]} w={[250, 280]}>
              <Image
                src={escaleraroble}
                alt={'escalera de roble'}
                borderRadius="lg"
                boxSize={'100%'}
              />
            </Box>
            <Heading size="sm" mt={3}>
              Madera{' '}
            </Heading>
          </CardBody>
        </Card>
        <Card
          maxW="xs"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          color={'white'}
          as={Link}
          to={''}
        >
          <CardBody>
            <Box h={[260, 300]} w={[250, 280]}>
              <Image
                src={escaleraVidrio}
                alt={'escalera de roble'}
                borderRadius="lg"
                boxSize={'100%'}
              />
            </Box>
            <Heading size="sm" mt={3}>
              Cristal{' '}
            </Heading>
          </CardBody>
        </Card>
        <Card
          maxW="xs"
          backgroundColor="rgba(0, 0, 0, 0.2)"
          color={'white'}
          as={Link}
          to={''}
        >
          <CardBody>
            <Box h={[260, 300]} w={[250, 280]}>
              <Image
                src={escaleraModerna}
                alt={'escalera de roble'}
                borderRadius="lg"
                boxSize={'100%'}
              />
            </Box>
            <Heading size="sm" mt={3}>
              Roble{' '}
            </Heading>
          </CardBody>
        </Card>
      </Flex>
      {/* <Flex flexWrap={'wrap'} gap={'15px'} justifyContent={'center'}>
        {products.map((product) => (
          <Card
            maxW="xs"
            key={product.id}
            backgroundColor="rgba(0, 0, 0, 0.8)"
            color={'white'}
          >
            <CardBody>
              <Box h={300} w={280}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  borderRadius="lg"
                  boxSize={'100%'}
                />
              </Box>

              <Stack mt="6" spacing="3">
                <Heading size="md">{product.name} </Heading>
                <Text>{product.description}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="ghost" colorScheme="teal">
                  Ver más
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex> */}
    </Flex>
  );
};
