import {
  Flex,
  Heading,
  Box,
  Divider,
  HStack,
  VStack,
  Text,
  chakra,
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
import { BioText, BioYear } from '../components/Bio';


// Allow custom props to be forwarded to nextjs image component
// const ProfileImage = chakra(Image, {
//   shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
// });

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Marcus O&apos;Yang - Home</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <VStack pt={{ base: 62, sm: 95 }} maxW={'100%'} h={2000}>
        <Box w={'100%'} h={'400px'}>
          {/* <Canvas
            shadows={true}
            camera={{
              near: 0.1, far: 1000, position: [0, 0, 0],
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
              <OrbitControls />
            </Suspense>
          </Canvas>
        </Box>
        <VStack justify={'center'} maxW={'480px'}>
          <HStack justify={'center'} w={'100%'}>
            <Box mr={2} flexGrow={1}>
              <Heading
                size={'md'}
                letterSpacing={'tight'}
                my={1}
                fontWeight={200}
                fontSize={{ base: 20, sm: 26 }}
              >
                Marcus O&apos;Yang
              </Heading>
              <span>Student / Videographer / Developer</span>
            </Box>
            <Box flexShrink={0} ml={'6px'} textAlign='center'>
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
                {/* <ProfileImage
                  src='/marcus.jpg'
                  alt='Profile image'
                  borderRadius='full'
                  width='120px'
                  height='120px'
                /> */}
                <Image
                  src={'/marcus.jpg'}
                  alt='Profile image'
                  width='120px'
                  height='120px'
                  quality={'100'}
                />
              </Box>
            </Box>
          </HStack>
          <Box>
            <Heading
              size={'md'}
              letterSpacing={'tight'}
              my={'4px'}
              fontWeight={200}
              fontSize={{ base: 20, sm: 26 }}
            >
              Bio
            </Heading>

            {/* <HStack justify={'space-between'}>
            <VStack justify={'start'} align={'flex-start'}>
            <Text fontWeight={800}>2000</Text>
            <Text fontWeight={800}>2018</Text>
            <Text fontWeight={800}>2021</Text>
            <Text fontWeight={800}>2023</Text>
            <Text>t</Text>
            <Text></Text>
            </VStack>
            <VStack align={'left'} w={300}>
            <Text>Born in Sydney, Australia.</Text>
            <Text>Graduated from St Ives High School.</Text>
            <Text>Worked at Mastercard as a Software Intern.</Text>
            <Text>
            Expected completion of Bioinformatics Engineering (Honours) at
            the University of New South Wales (UNSW).
            </Text>
            </VStack>
          </HStack> */}

            <BioText>
              <BioYear>2000</BioYear>
              Born in Sydney, Australia.
            </BioText>
            <BioText>
              <BioYear>2018</BioYear>
              Graduated from St Ives High School.
            </BioText>
            <BioText>
              <BioYear>2021</BioYear>
              Worked at Mastercard as a Software Intern.
            </BioText>
            <BioText>
              <BioYear>2023</BioYear>
              Expected completion of Bioinformatics Engineering (Honours) at the
              University of New South Wales (UNSW).
            </BioText>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Home;
