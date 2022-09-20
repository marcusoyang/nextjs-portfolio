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
                <GridItem>
                    <WorkCard
                        thumbnail={'/works/iprm.PNG'}
                        subtitle={'Blockchain Smart Contract & Web App'}
                        title={'IP Rights Management'}
                        desc={
                            'An blockchain-based intellectual property rights management system using Solidity smart contracts, IPFS and a React frontend.'
                        }
                    />
                </GridItem>
                <GridItem>
                    <WorkCard
                        thumbnail={'/works/sigmund.PNG'}
                        subtitle={'Pytorch ML trained chess engine'}
                        title={'Sigmund'}
                        desc={
                            'A neural network model trained using public Lichess evaluations which can be versed through a React app.'
                        }
                    />
                </GridItem>
                <GridItem>
                    <WorkCard
                        thumbnail={'/works/gloria_romanus.PNG'}
                        subtitle={'Java Strategy Game'}
                        title={'Gloria Romanus'}
                        desc={
                            'A civilization-like strategy game built with ArcGIS, Junit and Gradle. Complex game mechanics, saving and loading, simulated economy and AI. '
                        }
                    />
                </GridItem>
                <GridItem>
                    <WorkCard
                        thumbnail={'/works/maptime.PNG'}
                        subtitle={'Python Flask Web App'}
                        title={'MapTime'}
                        desc={
                            'A visualization tool that plots a given timeline onto a custom route using Google Maps API.'
                        }
                    />
                </GridItem>
                <GridItem>
                    <WorkCard
                        thumbnail={'/works/sigmund.PNG'}
                        subtitle={'Online Multiplayer Chess'}
                        title={'Sigmund PvP'}
                        desc={
                            'A platform to play chess with friends hosted on Azure using Web PubSub and React.'
                        }
                    />
                </GridItem>
            </Grid>
        </>
    );
};

export default Works;
