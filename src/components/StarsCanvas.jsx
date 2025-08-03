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
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1}/>
        </group>
    )
}

const StarsBackground = () => {
    return (
        <div className={"absolute inset-0 z-0"}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <RotatingStars/>
            </Canvas>
        </div>
    );
};

export default StarsBackground;