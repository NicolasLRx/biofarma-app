import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
  return (
    <Box>
      {productos.map((producto) => (
        <Box key={producto.id} borderWidth="1px" borderRadius="lg" p="4" mb="4">
          <Text fontWeight="bold">{producto.descripcion}</Text>
          <Text>Precio: ${producto.precio}</Text>
          <Text>Línea: {producto.linea}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default ItemList;
