import React, { useRef } from 'react'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'
import { useFrame } from '@react-three/fiber'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

import state from '../store'
export const ShirtModel = ( ) => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('./shirt.glb')

    const logoTexture = useTexture(snap.logoDecal)
    const fullTexture = useTexture(snap.fullDecal)

    useFrame((state, delta) => easing.dampC(materials.Shirt00_1Material4782.color,
        snap.color, 0.25, delta))
    const stateString = JSON.stringify(snap)

  return (
    <group key={stateString} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Shirt00_1Button_FRONT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Shirt00_1Material4782}
          material-roughness={1}
          dispose={null}>
          {snap.isFullTexture && (
              <Decal
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={1}
                  map={fullTexture}
                  // map-anisotropy={16}
                  // depthTest={false}
                  // depthWrite={true}
              />
          )}
          {snap.isLogoTexture && (
              <Decal
                  position={[0, 0.04, 0.15]}
                  rotation={[0, 0, 0]}
                  scale={0.15}
                  map={logoTexture}
                  // map-anisotropy={16}
                  depthTest={false}
                  depthWrite={true}
              />
          )}
          </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.Shirt00_1Material4782}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Shirt00_1Material4782}
        />
      </group>
    </group>
  )
}

export default ShirtModel