// @ts-nocheck
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import THREE from 'three';

import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei'

import { Box } from '@chakra-ui/react';

interface group {
  current: {
    rotation: {
      x: number;
      y: number;
    };
  };
}

interface actions {
  current: {
    idle: {
      play: () => void;
    };
  };
}

// const Model = () => {
//   const group: group = useRef();
//   const actions: actions = useRef();

//   const [model, setModel] = React.useState<THREE.Object3D | null>(null);
//   const [animation, setAnimation] = React.useState<AnimationClip[] | null>(null);

//   const [mixer] = React.useState(() => new THREE.AnimationMixer(null));

//   useEffect(() => {
//     const loader = new THREE.GLTFLoader();
//     loader.load('/public/island/scene.gltf', async (gltf) => {
//       const nodes = await gltf.parser.getDependencies('node');
//       const animations = await gltf.parser.getDependencies('animation');
//       setModel(nodes[0]);
//       setAnimation(animations[0]);
//     });
//   }, []);

//   useEffect(() => {
//     if (animation && typeof group.current !== 'undefined') {
//       actions.current = {
//         idle: mixer.clipAction(animation[0], group.current as THREE.Object3D),
//       };
//       actions.current.idle.play();
//       return () => {
//         animation.forEach((clip) => mixer.uncacheClip(clip));
//       };
//     }
//   }, [animation]);

//   useFrame((_, delta) => mixer.update(delta));

//   useFrame(() => {
//     if (typeof group.current !== 'undefined') {
//       return (group.current.rotation.y += 0.01);
//     }
//   });

//   return (
//     <>
//       {model ? (
//         <group ref={group} position={[0, -150, 0]} dispose={null}>
//           <primitive ref={group} name='Object_0' object={model} />
//         </group>
//       ) : (
//         <Box>Loading...</Box>
//       )}
//     </>
//   );
// };

const Model = (props?: any) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/island/scene.gltf')
  const gltf = useLoader(GLTFLoader, "/island/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={gltf.scene} scale={0.1}/>
    </group>
  )
}

useGLTF.preload('/island/scene.gltf')

export default Model;
