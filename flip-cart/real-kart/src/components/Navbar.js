import React from 'react'
import {Flex, Heading, IconButton, Spacer, useColorMode} from "@chakra-ui/react";
import {FaSun,FaMoon,FaLocationArrow ,FaUser,FaCartPlus} from 'react-icons/fa'

function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();

  const isDark= colorMode==="dark";
  return (
    <Flex w="100%" p={5} h="12vh" border="1px">
        <Heading ml="8" size="md" fontWeight="semibold" color="cyan.400">Real-Kart

        </Heading>
      <Spacer></Spacer>
      <IconButton icon={<FaCartPlus />} isRound="true"></IconButton>
      <IconButton ml={2} icon={<FaLocationArrow/>} isRound="true"></IconButton>
      <IconButton ml={2} icon={<FaUser/>} isRound="true"></IconButton>
      <IconButton ml={8} mr={3} icon={isDark?<FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
      </Flex>
  )
}

export default Navbar
