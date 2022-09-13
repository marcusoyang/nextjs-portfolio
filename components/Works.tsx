import { ReactNode } from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    Text,
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
import { BioText, BioYear } from './Bio';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

const Works = () => {
    return (
        <>
            <Box textAlign={'left'} w={'100%'}>
                <Heading
                    size={'md'}
                    letterSpacing={'tight'}
                    mt={4}
                    fontWeight={200}
                    fontSize={{ base: 20, sm: 26 }}
                >
                    <AnimatedText text={'Portfolio'} />
                </Heading>
                <span>
                    <AnimatedText text={'(work in progress)'} />
                </span>
            </Box>
            <Box textAlign={'center'}></Box>
        </>
    );
};

export default Works;
