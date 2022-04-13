import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  Button,
  useColorMode,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
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
  <NextLink href={props.href} passHref scroll={false}>
    <Link style={{ textDecoration: "none" }} {...props}>
      {props.children}
    </Link>
  </NextLink>
);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const hoverColor = useColorModeValue("#FFF", "#333");

  return (
    <>
      <Box
        pos={"fixed"}
        mixBlendMode={"difference"}
        pt={8}
        px={8}
        mx={"auto"}
        maxW={"6xl"}
        w="100%"
      >
        {/* <Flex h={16} alignItems={"center"} justifyContent={"space-between"}> */}
        <NavLink href="/">
          <Heading size={"md"} letterSpacing={"tight"} pb={1} color={"white"}>
            Marcus O&apos;Yang
          </Heading>
        </NavLink>
        {/* </Flex> */}
      </Box>

      <Flex
        pos={"fixed"}
        pt={8}
        px={8}
        justify={"right"}
        maxW={"6xl"}
        w="100%"
      >
        <a
          target="_blank"
          href="https://github.com/marcusoyang"
          rel="noopener noreferrer"
        >
          <Button
            mr={5}
            maxW={300}
            minW={120}
            w={"10vw"}
            h={10}
            variant="outline"
            rounded="none"
            _hover={{
              bg: hoverColor,
            }}
            _focus={{
              boxShadow: "none",
            }}
            borderColor={colorMode === "light" ? "#222" : "#eee"}
            bg={colorMode === "light" ? "#eee" : "#222"}
          >
            <IoLogoGithub />
            <Box w={1} />
            GitHub
          </Button>
        </a>

        <Button
          onClick={toggleColorMode}
          w={10}
          h={10}
          variant="outline"
          rounded="none"
          _hover={{
            bg: hoverColor,
          }}
          _focus={{
            boxShadow: "none",
          }}
          borderColor={colorMode === "light" ? "#222" : "#eee"}
          bg={colorMode === "light" ? "#eee" : "#222"}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>

        <Button
          w={10}
          h={10}
          variant="outline"
          borderLeft="none"
          rounded="none"
          _hover={{
            bg: hoverColor,
          }}
          _focus={{
            boxShadow: "none",
          }}
          borderColor={colorMode === "light" ? "#222" : "#eee"}
          bg={colorMode === "light" ? "#eee" : "#222"}
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
    </>
  );
};

export default Navbar;
