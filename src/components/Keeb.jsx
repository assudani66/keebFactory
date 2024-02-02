import { useGLTF } from "@react-three/drei";

const path = "../public/models/keeb.glb";
import { NodeToyMaterial } from '@nodetoy/react-nodetoy';

export function Keeb(props) {
  const { nodes, materials } = useGLTF(path);

  function MouseOver(event) {
    console.log(event);
  }
  function MouseOut(event) {
    console.log(event);
  }
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.276, 0.048, -0.044]}
        rotation={[0.024, 0, 0]}
        scale={0.033}
      >
        <mesh
          onPointerEnter={(e) => console.log(e)}
          geometry={nodes.Cube063_1.geometry}
          material={materials["Polycarbonate Case"]}
        />
        <mesh
          geometry={nodes.Cube063_2.geometry}
        >
        <NodeToyMaterial data={data} />
      </group>
    </group>
  );
}

useGLTF.preload("/keeb.glb");
