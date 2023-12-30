import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Badge, Box } from "@chakra-ui/react"; // Importa Box para encapsular el ícono y el Badge
import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <Box display="flex" alignItems="center">
      <FaShoppingCart style={{ marginRight: "10px" }} />{" "}
      <Link to="cart" style={{ display: cart.length > 0 ? "block" : "none" }}>
        <Badge variant="solid" colorScheme="green">
          {cart.length}
        </Badge>
      </Link>
    </Box>
  );
};

export default CartWidget;
