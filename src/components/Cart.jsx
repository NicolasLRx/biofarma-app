import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { Button, Heading } from "@chakra-ui/react";

const Cart = () => {
  const { cart, clearCart, calcularTotal } = useContext(CartContext);
  const total = calcularTotal() || 0;
  return (
    <section>
      {cart.length === 0 ? (
        <div>
          <Heading as="h3" size="md">
            No hay productos en el carrito
          </Heading>
          <Link to="/">
            <Button colorScheme="blue" mt="4">
              Ir a productos
            </Button>
          </Link>
        </div>
      ) : (
        <article>
          {cart.map((product) => (
            <CartItem key={product.id} {...product} />
          ))}
          <Heading as="h3" size="md" mt="4">
            Total: ${total.toFixed(2)}
          </Heading>
          <Button onClick={() => clearCart()} colorScheme="red" mt="4">
            Limpiar Carrito
          </Button>
          <Link to="/">
            <Button colorScheme="green" mt="4">
              Seguir comprando
            </Button>
          </Link>
          <Link to="/checkout" className="btnCount">
            <Button colorScheme="blue" mt="4">
              Finalizar Compra
            </Button>
          </Link>
        </article>
      )}
    </section>
  );
};

export default Cart;
