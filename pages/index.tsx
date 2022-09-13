import {
    Flex,
    Heading,
    Box,
    Divider,
    HStack,
    VStack,
    Container,
} from '@chakra-ui/react';
import Image from 'next/image';
import Head from 'next/head';
import { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import Lights from '../components/model/Lights';
import Model from '../components/model/Model';
import Loader from '../components/model/Loader';
import Bio from '../components/Bio';
import Works from '../components/Works';
import AnimatedText from '../components/AnimatedText';

// Allow custom props to be forwarded to nextjs image component
// const ProfileImage = chakra(Image, {
//   shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
// });

const Home = () => {
    return (
        <Container maxW={'100%'}>
            <Head>
                <title>Marcus O&apos;Yang - Home</title>
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
            </Head>
            <VStack pt={32} maxW={'100%'} h={2000}>
                <Box w={'100%'} h={'400px'}>
                    {/* <Canvas
                        shadows={true}
                        camera={{
                            near: 0.1,
                            far: 1000,
                            position: [0, 0, 0],
                        }}
                    >
                        <ambientLight color={'white'} intensity={0.2} />
                        <Lights position={[0, 3, 0]} />
                        <Sphere rotateX={3} rotateY={0.2} />
                        <OrbitControls />
                        <Floor position={[0, -1, 0]} />
                    </Canvas> */}
                    <Canvas
                        camera={{
                            position: [2, 2, 4],
                        }}
                    >
                        <Suspense fallback={<Loader />}>
                            <Lights />
                            <Model />
                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                            />
                        </Suspense>
                    </Canvas>
                </Box>
                <VStack justify={'center'} maxW={'480px'}>
                    <HStack justify={'center'} w={'100%'}>
                        <Box mr={2} flexGrow={1}>
                            <Heading
                                size={'md'}
                                letterSpacing={'tight'}
                                mb={1}
                                fontWeight={200}
                                fontSize={{ base: 20, sm: 26 }}
                            >
                                {/* Marcus O&apos;Yang */}
                                <AnimatedText text={"Marcus O'Yang"} />
                            </Heading>
                            <AnimatedText
                                text={'Student / Videographer / Developer'}
                            />
                            {/* <span>Student / Videographer / Developer</span> */}
                        </Box>
                        <Flex
                            display={{ base: 'none', sm: 'flex' }}
                            flexShrink={0}
                            ml={'6px'}
                            textAlign='center'
                        >
                            <Box
                                borderColor='whiteAlpha.800'
                                borderWidth={3}
                                borderStyle='solid'
                                w='120px'
                                h='120px'
                                display='inline-block'
                                borderRadius='full'
                                overflow='hidden'
                                mt={2}
                            >
                                <Image
                                    src={'/marcus.jpg'}
                                    alt='Profile image'
                                    width='120px'
                                    height='120px'
                                    quality={'100'}
                                />
                            </Box>
                        </Flex>
                    </HStack>
                    <Bio />
                    <Works />
                </VStack>
            </VStack>
        </Container>
    );
};

export default Home;
