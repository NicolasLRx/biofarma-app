import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <Box>
      {productos.map((producto) => (
        <Box key={producto.id} borderWidth="1px" borderRadius="lg" p="4" mb="4">
          <Text fontWeight="bold">{producto.descripcion}</Text>
          <Text>Precio: ${producto.precio}</Text>
          <Text>Línea: {producto.linea}</Text>
          <Link to ={`/item/${producto.id}`}>Ver detalle</Link>
        </Box>
      ))}
    </Box>
  );
};

export default ItemList;
