import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Heading , Text, Button, Center } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({productos}) => {
  const { id } = useParams();
  
  const filtroXID = productos.filter((producto) => producto.id == id)
  
    return (
    <div>
        {filtroXID.map((p) =>{
            return(
                <div key = {p.id}>

                    <Card>

                        <CardHeader>
                            <Heading>{p.precio}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{p.descripcion} </Text> 
                            <Text>{p.linea} </Text>
                        </CardBody>

                    </Card>



                </div>)

        }
        
        
        
        )}    
    </div>
  )
}

export default ItemDetail