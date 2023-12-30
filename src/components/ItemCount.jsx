import { useState } from "react";
import { Button, Badge, useToast } from "@chakra-ui/react";

function ItemCount({ stock, initial, onAdd }) {
  const [quantity, setQuantity] = useState(initial);
  const toast = useToast();

  const increment = () => {
    quantity < stock && setQuantity(quantity + 1);
  };

  const decrement = () => {
    quantity > 0 && setQuantity(quantity - 1);
  };

  const addToCart = () => {
    if (quantity > 0) {
      onAdd(quantity);
      toast({
        title: "Producto Agregado",
        description: `Agregaste ${quantity} bolsas`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Seleccione Cantidad",
        description: "",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <div>
        <Button colorScheme="red" onClick={decrement}>
          -
        </Button>
        <Badge fontSize="1.2em" mx="2">
          {quantity}
        </Badge>
        <Button colorScheme="blue" onClick={increment}>
          +
        </Button>
      </div>
      <div>
        <Button colorScheme="green" onClick={addToCart} disabled={!stock}>
          Agregar a Carrito
        </Button>
      </div>
    </div>
  );
}

export default ItemCount;
