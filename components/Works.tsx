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
    Grid,
    GridItem,
} from '@chakra-ui/react';
import { BioText, BioYear } from './Bio';
import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import WorkCard from './WorkCard';

const work_information = [
    {
        thumbnail: '/works/splunk.PNG',
        subtitle: 'Full Stack Splunk App',
        title: 'Splunk Add-on',
        desc: 'Modular Input, Custom SPL command and Visualization for Splunk using Coingecko API to track cryptocurrency data.',
    },
    {
        thumbnail: '/works/iprm.PNG',
        subtitle: 'Blockchain Smart Contract & Web App',
        title: 'IP Rights Management',
        desc: 'An blockchain-based intellectual property rights management system using Solidity smart contracts, IPFS and a React frontend.',
    },
    {
        thumbnail: '/works/sigmund.PNG',
        subtitle: 'Pytorch ML trained chess engine',
        title: 'Sigmund',
        desc: 'A neural network model trained using public Lichess evaluations which can be versed through a React app.',
    },
    {
        thumbnail: '/works/gloria_romanus.PNG',
        subtitle: 'Java Strategy Game',
        title: 'Gloria Romanus',
        desc: 'A civilization-like strategy game built with ArcGIS, Junit and Gradle. Complex game mechanics, saving and loading, simulated economy and AI. ',
    },
    {
        thumbnail: '/works/sigmund.PNG',
        subtitle: 'Online Live Chess Platform',
        title: 'Theseus',
        desc: 'A platform to play chess with friends hosted on Azure using Web PubSub and React.',
    },
    {
        thumbnail: '/works/maptime.PNG',
        subtitle: 'Python Flask Web App',
        title: 'Maptime',
        desc: 'A visualization tool that plots a given timeline onto a custom route using Google Maps API. ',
    },
];

const Works = () => {
    return (
        <>
            <Box textAlign={'left'} w={'100%'}>
                <Heading
                    size={'md'}
                    letterSpacing={'tight'}
                    mt={4}
                    fontWeight={200}
                    fontSize={{ base: 20, sm: 28 }}
                >
                    <TypeWriter>Portfolio</TypeWriter>
                </Heading>
                <span>
                    <TypeWriter>(work in progress)</TypeWriter>
                </span>
            </Box>
            <Grid
                w={'100%'}
                h={600}
                templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                }}
                gap={6}
            >
                {work_information.map((work) => (
                    <GridItem key={work.title}>
                        <WorkCard
                            thumbnail={work.thumbnail}
                            subtitle={work.subtitle}
                            title={work.title}
                            desc={work.desc}
                        />
                    </GridItem>
                ))}
            </Grid>
        </>
    );
};

export default Works;
