import React from "react";
import { useContext, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
import Cart from "./Cart";

const ItemDetail = ({ descripcion, imagen, linea, nombre, precio }) => {
  const { id } = useParams();
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id,
      nombre,
      precio,
    };

    addItem(item, quantity);
  };

  return (
    <div>
      <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
        <Text fontWeight="bold">{nombre}</Text>
        <Text>{descripcion}</Text>
        <Text>Precio: ${precio}</Text>
        <Text>Línea: {linea}</Text>
        {quantityAdded > 0 ? (
          <section>
            <h4>Cantidad: {quantityAdded}</h4>
            <h4>Precio final: ${precio * quantityAdded}</h4>
            <Link to="/cart">
              <Button colorScheme="green">Ir a confirmar compra</Button>
            </Link>
            <Link to="/">
              <Button colorScheme="blue">Seguir comprando</Button>
            </Link>
          </section>
        ) : (
          <ItemCount initial={0} stock={10} onAdd={handleOnAdd} />
        )}
      </Box>
    </div>
  );
};

export default ItemDetail;
