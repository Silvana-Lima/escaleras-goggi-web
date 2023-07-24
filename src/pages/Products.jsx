import {
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Card, CardBody, CardFooter } from '@chakra-ui/react';

import { useDataCloud } from '../hooks/useDataCloud';
import { getAllProducts } from '../service/products';

export const Products = () => {
  const { products } = useDataCloud(getAllProducts());
  return (
    <Flex flexWrap={'wrap'} gap={'15px'} justifyContent={'center'}>
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
    </Flex>
  );
};
