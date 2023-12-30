import { React, useContext } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";

const CartItem = ({ id, nombre, precio, quantity }) => {
  const { cart, removeItem } = useContext(CartContext);

  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" mb="4">
      <header>
        <Heading as="h3" size="md">
          {nombre}
        </Heading>
      </header>
      <body>
        <section>
          <Text>Precio ${precio}</Text>
          <Text>Cantidad {quantity}</Text>
        </section>
        <section>
          <Text>SubTotal ${precio * quantity}</Text>
        </section>
        <section>
          <Button onClick={() => removeItem(id)} colorScheme="red">
            Eliminar
          </Button>
        </section>
      </body>
    </Box>
  );
};

export default CartItem;
