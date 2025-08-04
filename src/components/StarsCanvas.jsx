import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const RotatingStars = () => {
    const groupRef = useRef();

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.0003;
            groupRef.current.rotation.x += 0.0003;
        }
    });
    return (
        <group ref={groupRef}>
            <Stars radius={100} depth={50} count={10000} factor={4} saturation={0} fade speed={1}/>
        </group>
    )
}

const StarsBackground = () => {
    return (
        <div className={"fixed top-0 left-0 inset-0 z-0 max-h-dvh overflow-hidden"}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <RotatingStars/>
            </Canvas>
        </div>
    );
};

export default StarsBackground;