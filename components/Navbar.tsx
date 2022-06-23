import { ReactNode } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorMode,
  Heading,
  useColorModeValue,
  color,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
interface navLinkProps {
  href: string;
  children: ReactNode;
  display?: string;
  alignItems?: string;
  style?: {};
}

const NavLink: React.FC<navLinkProps> = (props) => (
  <NextLink href={props.href} passHref scroll={false}>
    <Link
      _focus={{
        boxShadow: 'none',
      }}
      style={{ textDecoration: 'none' }}
      {...props}
    >
      {props.children}
    </Link>
  </NextLink>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverColor = useColorModeValue('#222', '#333');

  return (
    <>
      <Box
        pos={'fixed'}
        mixBlendMode={'difference'}
        pt={8}
        px={8}
        mx={'auto'}
        // maxW={'6xl'}
        // w='100%'
        zIndex={2}
      >
        <NavLink href='/'>
          <Heading
            size={'md'}
            letterSpacing={'tight'}
            mt={1}
            pb={1}
            fontWeight={'normal'}
            color={'white'}
            fontSize={26}
          >
            Marcus O&apos;Yang
          </Heading>
        </NavLink>
      </Box>

      <Flex
        pos={'fixed'}
        pt={8}
        px={8}
        justify={'right'}
        maxW={'6xl'}
        w='100%'
        zIndex={1}
      >
        <a
          target='_blank'
          href='https://github.com/marcusoyang'
          rel='noopener noreferrer'
        >
          <Button
            role='group'
            mr={5}
            maxW={300}
            minW={120}
            w={'10vw'}
            h={10}
            fontSize={15}
            variant='outline'
            rounded='none'
            _hover={{
              bg: hoverColor,
              color: '#FFF',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            borderColor={colorMode === 'light' ? '#222' : '#eee'}
            bg={colorMode === 'light' ? '#FFF' : '#222'}
          >
            <Box
              _groupHover={{
                color: 'white',
              }}
              pr={1}
            >
              <IoLogoGithub />
            </Box>
            GitHub
          </Button>
        </a>

        <Button
          role='group'
          onClick={toggleColorMode}
          w={10}
          h={10}
          variant='outline'
          rounded='none'
          _hover={{
            bg: hoverColor,
          }}
          _focus={{
            boxShadow: 'none',
          }}
          borderColor={colorMode === 'light' ? '#222' : '#eee'}
          bg={colorMode === 'light' ? '#FFF' : '#222'}
        >
          <Box
            _groupHover={{
              color: 'white',
            }}
          >
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Box>
        </Button>

        <Menu isLazy id='navbar-menu'>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            role='group'
            w={10}
            h={10}
            variant='outline'
            borderLeft='none'
            rounded='none'
            _hover={{
              bg: hoverColor,
              color: 'white',
            }}
            _expanded={{
              bg: hoverColor,
              color: 'white',
            }}
            _focus={{
              boxShadow: 'none',
            }}
            borderColor={colorMode === 'light' ? '#222' : '#eee'}
            bg={colorMode === 'light' ? '#FFF' : '#222'}
            aria-label='Open Menu'
          />
          <MenuList bg={colorMode === 'light' ? '#FFF' : '#222'}>
            <NextLink href='/works' passHref>
              <MenuItem
                as={Link}
                _focus={{
                  boxShadow: 'none',
                }}
              >
                Works
              </MenuItem>
            </NextLink>
            <MenuItem
              as={Link}
              href='https://github.com/marcusoyang/nextjs-portfolio'
              _focus={{
                boxShadow: 'none',
              }}
            >
              Source Code
            </MenuItem>
          </MenuList>
        </Menu>

        {/* <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
          <Menu isLazy id='navbar-menu'>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant='outline'
              aria-label='Open Menu'
            />
            <MenuList>
              <NextLink href='/works' passHref>
                <MenuItem as={Link}>Works</MenuItem>
              </NextLink>
              <MenuItem
                as={Link}
                href='https://github.com/marcusoyang/nextjs-portfolio'
              >
                Source Code
              </MenuItem>
            </MenuList>
          </Menu>
        </Box> */}
      </Flex>
    </>
  );
};

export default Navbar;
