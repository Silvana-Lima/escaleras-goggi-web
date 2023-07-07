import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import { getAllProducts } from '../service/products';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.log('error');
      }
    };

    getData();
  }, []);
  console.log(products);

  return (
    <VStack>
      <Heading
        color={'whiteAlpha.900'}
        bg={'teal.600'}
        p={10}
        m={10}
        h={'200px'}
        w={'73%'}
      >
        ESCALERAS EXCLUSIVAS, desde Cantabria para España, únicas por su diseño
        y calidad, ESCALERAS que transforman ambientes, viviendo la belleza de
        los detalles.
      </Heading>

      <Flex flexWrap={'wrap'} gap={'15px'} justifyContent={'center'}>
        {products.map((product) => (
          <Card maxW="xs" key={product.id}>
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
      </Flex>
    </VStack>
  );
};
