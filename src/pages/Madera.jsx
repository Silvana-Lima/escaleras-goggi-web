import { ChevronRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { useDataCloud } from '../hooks/useDataCloud';
import { getAllProducts } from '../service/products';

export const Madera = () => {
  const { products } = useDataCloud(getAllProducts());

  return (
    <Flex direction={'column'} width={['90%', '80%']} p={5}>
      <Breadcrumb
        spacing="8px"
        separator={<ChevronRightIcon color="white" />}
        fontSize={['18px', '20px']}
        color={'whiteAlpha.900'}
        mb={2}
      >
        <BreadcrumbItem>
          <BreadcrumbLink href="/products">Productos</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Madera</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Divider orientation="horizontal" mb={6} />
      <Flex flexWrap={'wrap'} gap={5} justify={'center'}>
        {products.map((product) => (
          <Card
            maxW="xs"
            key={product.id}
            backgroundColor="rgba(0, 0, 0, 0.2)"
            color={'white'}
          >
            <CardBody>
              <Box h={[260, 300]} w={[250, 280]}>
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  borderRadius="lg"
                  boxSize={'100%'}
                />
              </Box>

              <Stack mt="3" spacing="1">
                <Heading size="sm">{product.name} </Heading>
                <Text fontSize={'sm'}>{product.description}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Flex>
  );
};
