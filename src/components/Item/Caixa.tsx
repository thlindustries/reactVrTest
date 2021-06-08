import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    MOCKUP_MASSA_DOCE: THREE.Mesh
  }
  materials: {
    Burggeman_MassaDoce: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Caixa.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="MOCKUP_MASSA_DOCE"
          castShadow
          receiveShadow
          geometry={nodes.MOCKUP_MASSA_DOCE.geometry}
          material={materials.Burggeman_MassaDoce}
          rotation={[Math.PI / 2, 0, 0]}
          userData={{ name: 'MOCKUP_MASSA_DOCE' }}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Caixa.gltf')
