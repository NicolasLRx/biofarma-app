import React, {useEffect, useState} from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { seleccionarProducto } from "../data/asyncMock";


const ItemDetailContainer = () => {

  const [productos, setProductos] = useState({})
  const { id } = useParams()
  console.log(id)

  useEffect(() => {

    seleccionarProducto(id)
    .then((res) => {

      console.log(res)
      setProductos(res)

    })
    .catch((error)=>{
      console.log(error)
    })
  }, {id})
  console.log(productos)
  
  return (
    <div>

        <ItemDetail productos = {productos}
        />
    
    </div>
  );
};

export default ItemDetailContainer