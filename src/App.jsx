import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
  return (
    <div>
    <NavBar />
    <ItemListContainer productos = {"Lista de productos"}/>
    </div>
  )
}

export default App
