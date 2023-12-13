import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {
  return (
    <Box>
      {
        productos.map((producto) => (
          <Box key={producto.id} borderWidth="1px" borderRadius="lg" p="4" mb="4">
            
            <h1>{producto.nombre}</h1>
            <Image src= {producto.imagen} maxWidth={"300px"}></Image>
            <Link to={`/item/${producto.id}`}>Ver detalle</Link>
          </Box>
        ))
      }
    </Box>
  );
};

export default ItemList;
