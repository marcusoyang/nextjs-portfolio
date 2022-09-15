// @ts-nocheck
import React, { useEffect, useRef } from 'react';

import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/island/scene.gltf');
    const pointerDown = React.useRef(false);
    const mesh = React.useRef();

    let tick = 0;
    useFrame(() => {
        if (!pointerDown.current) {
            tick += 0.003;
        }
        mesh.current.rotation.y = tick;
    });
    return (
        <mesh
            ref={mesh}
            scale={0.11}
            onPointerDown={(e) => (pointerDown.current = true)}
            onPointerUp={(e) => (pointerDown.current = false)}
        >
            <primitive object={gltf.scene} />
        </mesh>
    );
};

export default Model;
