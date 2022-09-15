import { LayoutGroup, motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';

function TestComponent() {
    return (
        <>
            Test
            <ToggleContent />
            <ToggleContent />
        </>
    );
}

function ToggleContent({ header, content }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div layout onClick={() => setIsOpen(!isOpen)}>
            <motion.h2 layout>{header}</motion.h2>
            {isOpen ? 'content' : null}
        </motion.div>
    );
}

export default TestComponent;
