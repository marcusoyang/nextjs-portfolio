import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';

const AnimatedText = ({ text }: any) => {
    // splitting text into letters
    const letters = Array.from(text);

    // Variants for Container
    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.05 * i },
        }),
    };

    // Variants for each letter
    const child = {
        visible: {
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.05,
            },
        },
        hidden: {
            opacity: 0,
        },
    };

    return (
        // <Suspense fallback={null}>
        <motion.div
            style={{ overflow: 'hidden', display: 'flex' }}
            variants={container}
            initial='hidden'
            animate='visible'
            // transition={{ delay: 1 }}
        >
            <Box display={'flex'}>
                {letters.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                        {letter === ' ' ? '\u00A0' : letter}
                    </motion.span>
                ))}
            </Box>
        </motion.div>
        // </Suspense>
    );
};

export default AnimatedText;
