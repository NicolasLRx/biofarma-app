import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc, getFirestore } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const oneItem = doc(db, "productos", id);

    getDoc(oneItem).then((snapshot) => {
      if (snapshot.exists()) {
        const doc = snapshot.data();
        setProducto(doc);
      }
    });
  }, []);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
