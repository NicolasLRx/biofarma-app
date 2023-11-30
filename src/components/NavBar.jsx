import React from "react";
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Box,
  Spacer,
  Image
} from "@chakra-ui/react";


const NavBar = () => {
  return (
    <div>
       
      <Flex>
       <Box p="4">
            <Menu>
              <MenuButton>Linea</MenuButton>
              <MenuList>
                <MenuItem><Link to = {'/linea/avicola'}> Avicolas</Link></MenuItem>
                <MenuItem><Link to = {'/linea/cerdos'}>  Cerdos</Link></MenuItem>
                <MenuItem><Link to = {'/linea/equinos'}>  Equinos</Link></MenuItem>
                <MenuItem><Link to = {'/linea/rumiantes'}>  Rumiantes</Link></MenuItem>
              </MenuList>
            </Menu>
        </Box>
        <Spacer />
        <Box p ="4">
        <Link to="/">
          <Image    
          objectFit='scale-down' 
          src="../assets/images/biofarma_logo_.png"/>
          </Link>
        </Box>
        <Spacer />
        <Box p="4">
          <Link to= {"/cart"}>
          <CartWidget />
          </Link>
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
