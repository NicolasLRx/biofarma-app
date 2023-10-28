import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const ItemListContainer = ({productos}) => {
  return (
    <div>
     
      <Card>
  <CardBody>
    {productos}
    </CardBody>
</Card>
    </div>
  )
}

export default ItemListContainer