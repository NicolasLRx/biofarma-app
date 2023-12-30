import React from "react";
import {
  Box,
  Text,
  Image,
  Heading,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
  return (
    <Box>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      >
        {productos.map((producto) => (
          <Card maxW="sm" key={producto.id} boxShadow="lg">
            <CardBody>
              <Image
                src={producto.imagen}
                alt={producto.descripcion}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">{producto.nombre}</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <Link to={`/item/${producto.id}`}>Ver detalle</Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemList;
