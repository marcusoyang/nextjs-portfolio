import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Box = (props: any) => {
    // const texture = useLoader(TextureLoader, "/texture.jpg");
    return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <sphereBufferGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
export default Box;