import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
} from '@chakra-ui/react';
// import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import escaleraModerna from '../assets/escaleraModerna.png';
import escaleraroble from '../assets/escaleraroble.png';
import escaleraVidrio from '../assets/escaleraVidrio.png';
// import { useDataCloud } from '../hooks/useDataCloud';
// import { getAllProducts } from '../service/products';

export const Products = () => {
  // const { products } = useDataCloud(getAllProducts());
  return (
    <Flex direction={'column'} width={'80%'}>
      <Heading
        as={'h2'}
        fontSize={['18px', '24px']}
        color={'white'}
        mt={6}
        mb={6}
      >
        Productos
      </Heading>
      <Divider orientation="horizontal" mb={6} />
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        templateRows={['repeat(3, 1fr)', 'repeat(1, 1fr)']}
        gap={6}
      >
        <GridItem as={Link} w={'100%'}>
          <Box h={['300px', '400px']}>
            <Image
              src={escaleraroble}
              borderRadius={'lg'}
              alt="Dan Abramov"
              boxSize={['100%']}
            />
          </Box>

          <Heading
            as={'h3'}
            fontSize={['16px', '20px']}
            color={'whiteAlpha.900'}
            mt={6}
            mb={6}
          >
            Madera
          </Heading>
          <Divider orientation="horizontal" mt={6} mb={6} />
        </GridItem>
        <GridItem as={Link} w={['100%']}>
          <Box h={['300px', '400px']}>
            <Image
              src={escaleraVidrio}
              borderRadius={'lg'}
              alt="Dan Abramov"
              boxSize={['100%']}
            />
          </Box>
          <Heading
            as={'h3'}
            fontSize={['16px', '20px']}
            color={'whiteAlpha.900'}
            mt={6}
            mb={6}
          >
            Cristal
          </Heading>
          <Divider orientation="horizontal" mt={6} mb={6} />
        </GridItem>
        <GridItem as={Link} w={'100%'}>
          <Box h={['300px', '400px']}>
            <Image
              src={escaleraModerna}
              borderRadius={'lg'}
              alt="Dan Abramov"
              boxSize={['100%']}
            />
          </Box>
          <Heading
            as={'h3'}
            fontSize={['16px', '20px']}
            color={'whiteAlpha.900'}
            mt={6}
            mb={6}
          >
            Acero inoxidable
          </Heading>
          <Divider orientation="horizontal" mt={6} mb={6} />
        </GridItem>
      </Grid>
      {/* <Flex flexWrap={'wrap'} gap={'15px'} justifyContent={'center'}>
        {products.map((product) => (
          <Card
            maxW="xs"
            key={product.id}
            backgroundColor="rgba(0, 0, 0, 0.8)"
            color={'white'}
          >
            <CardBody>
              <Image
                src={product.images[0]}
                alt={product.name}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{product.name} </Heading>
                <Text>{product.description}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="teal">
                  Ver más
                </Button>
                <Button variant="ghost" colorScheme="teal">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Flex> */}
    </Flex>
  );
};
