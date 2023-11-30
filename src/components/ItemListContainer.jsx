import React from "react";
import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ItemList from './ItemList';

const ItemListContainer = () => {
  const { linea } = useParams()
  const productos = [
    {id: 1 , descripcion: "MicFull Iniciador", precio: 30, linea:"avicola"  },
    {id: 2 , descripcion: "MicFull Terminador", precio: 23, linea:"avicola"   },
    {id: 3 , descripcion: "MicFull Ultima Semana" , precio: 15, linea:"avicola"   },
    {id: 4 , descripcion: "Perfectos" , precio: 12, linea: "cerdos" },
    {id: 5 , descripcion: "Micromix Macro MAx", precio: 15, linea: "cerdos" },
    {id: 6 , descripcion: "Derby Entrenamiento", precio: 9, linea: "equinos" },
    {id: 7 , descripcion: "Derby Fibra Sport" , precio: 10, linea: "equinos" },
    {id: 8 , descripcion: "Macro corrector" , precio: 7, linea:  "rumiantes"},
    {id: 9 , descripcion: "Concentrado Novillo" , precio: 9, linea:  "rumiantes"},


  ]
  const mostrarLinea = new Promise ((resolve, reject) => {

    if(productos.length > 0){
      setTimeout(()=>{
      resolve(productos)
     }, 3000)
    } else {
      reject(new Error ("No se encontraron productos")) 
}
  })

  mostrarLinea 
  .then((res)=>{
  })
  .catch((error)=>{
    console.log(error)
  })


  const prodLinea = productos.filter((producto) => producto.linea === linea)


  return (
    <div>

        <ItemList
        productos = {prodLinea}
        />
    
    </div>
  );
};

export default ItemListContainer;
