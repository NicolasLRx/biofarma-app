import React, {useEffect, useState} from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import { mostrarLinea } from "../data/asyncMock";

const ItemListContainer = () => {
  
  const [productos, setProductos] = useState([])
  const { linea } = useParams()
  console.log(linea)

  useEffect(() => {

    mostrarLinea(linea)
    .then((res) => {

      console.log(res)
      setProductos(res)

    })
    .catch((error)=>{
      console.log(error)
    })
  }, [linea])
  console.log(productos)
  
  return (
    <div>

        <ItemList productos = {productos}
        />
    
    </div>
  );
};

export default ItemListContainer;
