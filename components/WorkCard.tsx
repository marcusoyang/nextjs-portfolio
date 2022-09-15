import {
    Center,
    useColorModeValue,
    Stack,
    Heading,
    Avatar,
    Box,
    Image,
    Text,
} from '@chakra-ui/react';
import React from 'react';

interface WorkCardProps {
    thumbnail?: string;
    subtitle: string;
    title: string;
    desc: string;
}

const WorkCard = (props: WorkCardProps) => {
    return (
        <>
            <Center py={6}>
                <Box
                    w={'full'}
                    // bg={useColorModeValue('white', '#222')}
                    boxShadow={'2xl'}
                    rounded={'sm'}
                    overflow={'hidden'}
                    p={6}
                >
                    <Box
                        h={'125px'}
                        // bg={'gray.100'}
                        mt={-6}
                        mx={-6}
                        mb={6}
                        pos={'relative'}
                    >
                        <Image src={props.thumbnail} alt={'Maptime'} />
                    </Box>
                    <Stack>
                        <Text
                            color={'green.500'}
                            textTransform={'uppercase'}
                            fontWeight={800}
                            fontSize={'sm'}
                            letterSpacing={1.1}
                        >
                            {props.subtitle}
                        </Text>
                        <Heading
                            // color={useColorModeValue('gray.700', 'white')}
                            fontSize={'2xl'}
                            fontFamily={'body'}
                        >
                            {props.title}
                        </Heading>
                        <Text color={'gray.500'}>{props.desc}</Text>
                    </Stack>
                </Box>
            </Center>
        </>
    );
};

export default WorkCard;