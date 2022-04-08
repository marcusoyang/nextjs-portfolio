import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorMode,
  Heading,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import NextLink from "next/link";
import { IoLogoGithub } from "react-icons/io5";
interface navLinkProps {
  href: string;
  children: ReactNode;
  display?: string;
  alignItems?: string;
  style?: {};
}

const NavLink: React.FC<navLinkProps> = (props) => (
  <NextLink href={props.href} passHref scroll={false} >
    <Link style={{ textDecoration: 'none' }} {...props}>{props.children}</Link>
  </NextLink>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      pos={'fixed'}
      // backgroundColor={"rgba(255, 255, 255, 0.8)"}
      // background={"transparent"}
      // backdropFilter={"saturate(180%) blur(1px)"}
      pt={4}
      px={8}
      mx={"auto"}
      maxW={"6xl"}
      w="100%"
      zIndex={1}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack spacing={5} alignItems={"center"}>
          <NavLink href="/">
            <Heading
              size={"md"}
              letterSpacing={"tight"}
              pb={1}
              // color={'white'}
              // mixBlendMode='difference'
              // backdropFilter="invert(100%)"
            >
              Marcus O&apos;Yang
            </Heading>
          </NavLink>

          {/* <HStack
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
          </HStack> */}
        </HStack>

        <Flex alignItems={"center"}>
          <Button
            mr={5}
            w={100}
            h={10}
            variant="outline"
            rounded="none"
            borderColor={colorMode === "light" ? "#222" : "white"}
            bg={colorMode === "light" ? "white" : "#222"}
          >
            <NavLink
              href="https://github.com/marcusoyang"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
            >
              <IoLogoGithub />
              GitHub
            </NavLink>
          </Button>

          <Button
            onClick={toggleColorMode}
            w={10}
            h={10}
            variant="outline"
            rounded="none"
            _hover={{ 
              bg: "#222"
            }}
            borderColor={colorMode === "light" ? "#222" : "white"}
            bg={colorMode === "light" ? "white" : "#222"}
          >
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>

          <Button
            w={10}
            h={10}
            variant="outline"
            borderLeft="none"
            rounded="none"
            borderColor={colorMode === "light" ? "#222" : "white"}
            bg={colorMode === "light" ? "white" : "#222"}
          >
            <HamburgerIcon />
          </Button>

          {/* <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
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
          </Box> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
