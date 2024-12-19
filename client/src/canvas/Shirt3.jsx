import React, { useRef , useState , useEffect} from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'
import state from '../store'

export const Shirt3 = ({index}) => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('./shirt3.glb')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)

    useFrame((_, delta) => {
        easing.dampC(materials.MaterialOne, snap.color, 0.25, delta);
    });


    const [currentMaterial, setCurrentMaterial] = useState(materials.MaterialOne);

    useEffect(() => {
        const textureArray = [
            materials.MaterialOne,
            materials.MaterialTwo,
            materials.MaterialThree,
        ];
        setCurrentMaterial(textureArray[snap.selectedTextureIndex]);
    }, [snap.selectedTextureIndex]);

  const stateString = JSON.stringify(snap)

  return (
    <group key={stateString} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2001.geometry}
          material={materials['Shirt00_1Button_FRONT.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3001.geometry}
          material={currentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4001.geometry}
          material={currentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5001.geometry}
          material={currentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6001.geometry}
          material={currentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7001.geometry}
          material={currentMaterial}
        />
      </group>
    </group>
  )
}

