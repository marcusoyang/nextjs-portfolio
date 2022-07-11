// @ts-nocheck
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
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';
import { NodeNextRequest } from 'next/dist/server/base-http/node';
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
  const expandColor = useColorModeValue('#FFF', '#222');
  const expandColorBG = useColorModeValue('#222', '#FFF');

  return (
    <>
      <Box
        pos={'fixed'}
        mixBlendMode={'difference'}
        pt={{ base: '16px', sm: '30px' }}
        px={{ base: '16px', sm: '30px' }}
        mx={'auto'}
        // maxW={'6xl'}
        // w='100%'
        zIndex={2}
      >
        <NavLink href='/'>
          <Box>
            <Heading
              size={'md'}
              letterSpacing={'tight'}
              mt={1}
              pb={1}
              fontWeight={200}
              color={'white'}
              fontSize={{ base: 20, sm: 26 }}
              display={'inline-block'}
            >
              Marcus&nbsp;
            </Heading>
            <Heading
              size={'md'}
              letterSpacing={'tight'}
              mt={1}
              pb={1}
              fontWeight={400}
              color={'white'}
              fontSize={{ base: 20, sm: 26 }}
              display={'inline-block'}
            >
              O&apos;Yang
            </Heading>
          </Box>
        </NavLink>
      </Box>

      {/* top navbar */}
      <Flex
        pos={'fixed'}
        pt={8}
        px={8}
        justify={'right'}
        maxW='6xl'
        w='100%'
        zIndex={1}
        display={{ base: 'none', sm: 'flex' }}
      >
        <a
          target='_blank'
          href='https://github.com/marcusoyang'
          rel='noopener noreferrer'
        >
          <Button
            role='group'
            mr={5}
            maxW={360}
            minW={140}
            w={'20vw'}
            h={10}
            fontSize={15}
            variant='outline'
            rounded='none'
            transition='background 0.5s ease'
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
          transition='background 0.5s ease'
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
          {({ isOpen }) => (
            <>
              <MenuButton
                as={IconButton}
                isActive={isOpen}
                icon={isOpen ? <CloseIcon maxW={3} /> : <HamburgerIcon />}
                role='group'
                w={10}
                h={10}
                variant='outline'
                borderLeft='none'
                rounded='none'
                transition='background 0.5s ease'
                _hover={{
                  bg: hoverColor,
                  color: '#FFF',
                }}
                _expanded={{
                  bg: expandColorBG,
                  color: expandColor,
                }}
                _focus={{
                  boxShadow: 'none',
                }}
                borderColor={colorMode === 'light' ? '#222' : '#eee'}
                bg={colorMode === 'light' ? '#FFF' : '#222'}
                aria-label='Open Menu'
              />
              <MenuList bg={colorMode === 'light' ? '#FFF' : '#222'}>
                <MenuItem
                  as={Link}
                  href='https://www.linkedin.com/in/marcus-oyang/'
                  _focus={{
                    boxShadow: 'none',
                  }}
                >
                  <IoLogoLinkedin />
                  &nbsp;LinkedIn
                </MenuItem>
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
            </>
          )}
        </Menu>
      </Flex>

      {/*
      bottom navbar 
      */}

      <Flex
        pos={'fixed'}
        bottom={6}
        maxW='6xl'
        w='100%'
        justify={'space-between'}
        zIndex={1}
        display={{ base: 'flex', sm: 'none' }}
      >
        <Box ml={4}>
          <Menu isLazy id='navbar-menu'>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  isActive={isOpen}
                  icon={isOpen ? <CloseIcon maxW={3} /> : <HamburgerIcon />}
                  role='group'
                  w={10}
                  h={10}
                  variant='outline'
                  borderRight='none'
                  rounded='none'
                  transition='background 0.5s ease'
                  _hover={{
                    bg: hoverColor,
                    color: '#FFF',
                  }}
                  _expanded={{
                    bg: expandColorBG,
                    color: expandColor,
                  }}
                  _focus={{
                    boxShadow: 'none',
                  }}
                  borderColor={colorMode === 'light' ? '#222' : '#eee'}
                  bg={colorMode === 'light' ? '#FFF' : '#222'}
                  aria-label='Open Menu'
                />
                <MenuList bg={colorMode === 'light' ? '#FFF' : '#222'}>
                  <MenuItem
                    as={Link}
                    href='https://www.linkedin.com/in/marcus-oyang/'
                    _focus={{
                      boxShadow: 'none',
                    }}
                  >
                    <IoLogoLinkedin />
                    &nbsp;LinkedIn
                  </MenuItem>
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
              </>
            )}
          </Menu>

          <Button
            role='group'
            onClick={toggleColorMode}
            w={10}
            h={10}
            variant='outline'
            rounded='none'
            transition='background 0.5s ease'
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
        </Box>

        <Box mr={4}>
          <a
            target='_blank'
            href='https://github.com/marcusoyang'
            rel='noopener noreferrer'
          >
            <Button
              role='group'
              maxW={360}
              minW={140}
              w={100}
              h={10}
              fontSize={15}
              variant='outline'
              rounded='none'
              transition='background 0.5s ease'
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
        </Box>

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
