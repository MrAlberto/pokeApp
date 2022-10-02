import React from 'react'
import { Box, Button, ButtonGroup, Flex, IconButton, Spacer, useColorMode } from "@chakra-ui/react";
import {SunIcon, MoonIcon} from "@chakra-ui/icons"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex alignItems='center' gap='2' px="20%" pt="2%">
        <Box p='2'>
            <a href="/">
                <img src="../src/assets/PokeApp.png" width="50%" alt="PokeApp" />
            </a>
        </Box>
        <Spacer />
        <ButtonGroup variant="ghost">
          <Button as="button" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/juan-alberto-arribas-moyano-87747315b/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton target="_blank" as="a" href="https://github.com/MrAlberto" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        </ButtonGroup>
    </Flex>
  )
}
