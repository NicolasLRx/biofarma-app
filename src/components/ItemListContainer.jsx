import React, { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getDocs, collection, where, getFirestore, query } from "firebase/firestore";
import { mostrarLinea } from "../data/asyncMock";

const ItemListContainer = () => {
  const { linea } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const q = query(collection(db, "productos"), where("linea", "==", linea));
        const snapshot = await getDocs(q);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [linea]);

  return (
    <Box>
      <ItemList productos={productos} />
    </Box>
  );
};

export default ItemListContainer;
