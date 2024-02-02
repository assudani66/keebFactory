/* eslint-disable react/no-unknown-property */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Keeb } from "./components/keeb";
import { Suspense } from "react";
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 25 }}>
        <Environment preset={"forest"} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <Suspense>
          <PresentationControls
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 200 }}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
          >
            <Keeb rotation={[Math.PI / 3, 0, 0]} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
