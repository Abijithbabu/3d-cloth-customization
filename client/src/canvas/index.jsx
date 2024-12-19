import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei'
import Backdrop from './Backdrop'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import { ShirtModel } from './Shirt1'
import { Model } from './NewShirt'
import { Shirt3 } from './Shirt3'
// import { Shirt } from './Shirt'
// import { Backdrop } from './Backdrop'
// import { CameraRig } from './CameraRig'

const CanvasModel = ({index}) => {
  return (
    <Canvas
      shadows 
      camera={{ position: [0, 0, 0], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }}
      className='w-full max-full h-full transition-all ease-in'
      >
      <ambientLight intensity={1.5} />
      <Environment preset="city" />
      <CameraRig>
        <Backdrop />
        <Center>
          {/* <Shirt /> */}
          {/* <Model/> */}
          {/* <ShirtModel/> */}
          <Shirt3 index={index}/>
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel