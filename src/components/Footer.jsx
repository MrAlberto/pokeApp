import { ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export const Footer = () => (
  <Container
    as="footer"
    py={{
      base: '12',
      md: '16',
    }}
  >
    <Stack
      spacing={{
        base: '4',
        md: '5',
      }}
    >
      <Stack justify="space-between" direction="row" align="center">
        <img src="../src/assets/PokeApp.png" width="20%" alt="PokeApp" />
        <ButtonGroup variant="ghost">
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/juan-alberto-arribas-moyano-87747315b/"
            target="_blank"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="1.25rem" />}
          />
          <IconButton target="_blank" as="a" href="https://github.com/MrAlberto" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
        </ButtonGroup>
      </Stack>
      <Text fontSize="sm" color="subtle">
        Made with ❤️ by <b>Alberto Arribas</b>
      </Text>
    </Stack>
  </Container>
)