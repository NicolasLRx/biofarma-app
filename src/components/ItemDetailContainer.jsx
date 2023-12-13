import React, {useEffect, useState} from "react";
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { seleccionarProducto } from "../data/asyncMock";
import { getDoc, doc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  
  const { id } = useParams()
 /*  const [productos, setProductos] = useState({})
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
  }, [id]
  )
  console.log(productos)
   */


    const [producto, setProducto] = useState([])

    useEffect(() =>{

      const db = getFirestore()

      const oneItem = doc(db,"productos", id )

     
      getDoc(oneItem).then((snapshot) => {
        
        if(snapshot.exists()){

          const doc = snapshot.data()
          setProducto(doc)

        }
        
        })


    },[])



  return (
    <div>

        <ItemDetail productos = {producto}
        />
    
    </div>
  );
};

export default ItemDetailContainer