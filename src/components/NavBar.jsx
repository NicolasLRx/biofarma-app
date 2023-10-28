import React from "react";
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
                <MenuItem>Avicolas</MenuItem>
                <MenuItem>Cerdos</MenuItem>
                <MenuItem>Equinos</MenuItem>
                <MenuItem>Rumiantes</MenuItem>
              </MenuList>
            </Menu>
        </Box>
        <Spacer />
        <Box p ="4">

          <Image    
          objectFit='scale-down' 
          src="../images/biofarma_logo_.png"/>
        </Box>
        <Spacer />
        <Box p="4">
          <CartWidget />
        </Box>
      </Flex>
    </div>
  );
};

export default NavBar;
