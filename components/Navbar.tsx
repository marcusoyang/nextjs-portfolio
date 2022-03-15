import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link'
import { IoLogoGithub } from 'react-icons/io5'

const Links = ['Projects', 'Projects', 'Team'];

interface navLinkProps {
  href: string
  children: ReactNode
  display?: string
  alignItems?: string
  style?: {}
}

const NavLink:React.FC<navLinkProps> = (props) => (
  <NextLink href={props.href} passHref scroll={false}>
    <Link
      {...props}
    >
      {props.children}
    </Link>
  </NextLink>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={5} alignItems={'center'}>
          <Heading
            size={'md'}
            letterSpacing={'tight'}
            pb={1}
          >
            Marcus O&apos;Yang
          </Heading>

          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}>
            <NavLink href='/works'>
              Works
            </NavLink>
            <NavLink
              href='https://github.com/marcusoyang'
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              >
              <IoLogoGithub/>
              GitHub
            </NavLink>
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          <Button onClick={toggleColorMode} w={10} h={10} >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Open Menu"
              />
              <MenuList>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/marcusoyang/nextjs-portfolio"
                >
                  Source Code
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;