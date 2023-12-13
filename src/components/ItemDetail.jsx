import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ItemCount from "./ItemCount";  // Ajusta la ruta según la ubicación real

const ItemDetail = ({ productos }) => {
  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
        <Text fontWeight="bold">{productos.nombre}</Text>
        <Text>{productos.descripcion}</Text>
        <Text>Precio: ${productos.precio}</Text>
        <Text>Línea: {productos.linea}</Text>
        <ItemCount />
      </Box>
    </div>
  );
};

export default ItemDetail;