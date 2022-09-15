import { motion } from 'framer-motion';

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 },
            },
        };
    },
};

const Line = () => {
    return (
        <>
            <motion.svg
                width='1000'
                height='230'
                viewBox='0 0 600 600'
                initial='hidden'
                animate='visible'
            >
                <motion.line
                    x1='0'
                    y1='10'
                    x2='1000'
                    y2='10'
                    stroke='#00cc88'
                    variants={draw}
                    custom={2}
                />
                <motion.line
                    x1='220'
                    y1='10'
                    x2='360'
                    y2='10'
                    stroke='#00cc88'
                    variants={draw}
                    custom={2.5}
                />
            </motion.svg>
            <motion.line
                x1='220'
                y1='30'
                x2='360'
                y2='170'
                stroke='#00cc88'
                variants={draw}
                custom={2}
                initial='hidden'
                animate='visible'
            />
        </>
    );
};

export default Line;
