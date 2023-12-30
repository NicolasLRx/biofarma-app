import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  VStack,
} from "@chakra-ui/react";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { cart, calcularTotal, clearCart } = useContext(CartContext);
  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: calcularTotal(),
    };

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      clearCart();
    });
  };

  if (pedidoId) {
    return (
      <VStack spacing={4} align="center">
        <Heading>Muchas gracias por tu compra</Heading>
        <p>Tu número de pedido es: {pedidoId}</p>
      </VStack>
    );
  }

  return (
    <VStack spacing={4} align="center">
      <Heading>Finalizar compra</Heading>
      <form onSubmit={handleSubmit(comprar)}>
        <FormControl>
          <FormLabel>Ingresá tu nombre</FormLabel>
          <Input
            type="text"
            placeholder="Nombre"
            {...register("nombre", { required: true })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Ingresá tu e-mail</FormLabel>
          <Input
            type="email"
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Ingresá tu teléfono</FormLabel>
          <Input
            type="tel"
            placeholder="Teléfono"
            {...register("telefono", { required: true })}
          />
        </FormControl>

        <Button type="submit">Comprar</Button>
      </form>
    </VStack>
  );
};

export default Checkout;
