import { useState } from "react";
import { Button, Badge, useToast } from "@chakra-ui/react";

const ItemCount = () => {


    const toast = useToast()

    const [count, setCount] = useState(0)

    const addToCart = () => {
        if(count > 0){
            toast({
                title: 'Producto Agregado',
                description: `Agregaste ${count} bolsas`,
                status: 'success',
                duration: 5000,
                isClosable: true,
            })
            setCount(0)
    
        }else{
            toast({
                title: 'Seleccione Cantidad',
                description: ``,
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
        }
       
    }
    const decrement = () => {
   
        if (count > 0) {
          setCount(count - 1);
        }
      };

    return(

        <div>

        <Button onClick={()=> setCount(count + 1)}>
        +
        </Button>
         <Badge>{count}</Badge>
         <Button onClick={decrement}>
            -
        </Button>   
        <Button onClick={addToCart}>Agregar al carrito</Button>
        </div>
    )
    
}

export default ItemCount