import React from 'react';
import {
  Flex,
  Heading,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

export default function NavBar() {
  return (
    <Flex w="100%" h="95px" align="center" fontFamily="Montserrat" paddingLeft="5%" paddingRight="5%" borderBottom="1px" borderBottomColor="#e8e8e8" bg="white">
      <Flex w="50%">
        <Heading
          fontSize="30px"
          color="#0290ff"
          marginRight="40px"
          fontWeight="bold"
        >
          Bookstore CMS
        </Heading>
        <Flex fontSize="13px">
          <Menu>
            <MenuButton
              letterSpacing="1.9px"
              marginRight="20px"
              fontWeight="700"
              paddingTop="5px"
              cursor="default"
            >
              BOOKS
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              letterSpacing="1.9px"
              paddingTop="5px"
            >
              CATEGORIES
            </MenuButton>
            <MenuList>
              <MenuItem>Tuvieja</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
      <Flex w="50%" justify="flex-end">
        <Avatar />
      </Flex>
    </Flex>
  );
}
