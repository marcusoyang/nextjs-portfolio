import {
    Center,
    useColorModeValue,
    Stack,
    Heading,
    Avatar,
    Box,
    Text,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface WorkCardProps {
    thumbnail: string;
    subtitle: string;
    title: string;
    desc: string;
    link?: string;
}

const WorkCard = (props: WorkCardProps) => {
    return (
        <a href={props.link} target='_blank' rel='noreferrer'>
            <Box
                my={6}
                // border='1px red dotted'
                w={'100%'}
                // bg={useColorModeValue('white', '#222')}
                boxShadow={'2xl'}
                rounded={'sm'}
                overflow={'hidden'}
                p={6}
            >
                <Box
                    h={{ base: '200px', sm: '125px' }}
                    // bg={'gray.100'}
                    mt={-6}
                    mx={-6}
                    mb={6}
                    pos={'relative'}
                >
                    <Image
                        layout='fill'
                        src={props.thumbnail}
                        alt={'Maptime'}
                    />
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
        </a>
    );
};

export default WorkCard;
