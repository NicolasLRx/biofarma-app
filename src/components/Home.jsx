import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Home = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "productos");

    getDocs(itemsCollection).then((snapshot) => {
      const docs = snapshot.docs.map((doc) => {
        let documento = {
          ...doc.data(),
          id: doc.id,
        };
        return documento;
      });
      setProductos(docs);
    });
  }, []);

  return (
    <div>
      <Heading as="h1">Nuestros Productos</Heading>
      <ItemList productos={productos} />
    </div>
  );
};

export default Home;
