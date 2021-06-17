
import * as THREE from 'three'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

type GLTFResult = GLTF & {
  nodes: {
    MOCKUP_MASSA_DOCE002: THREE.Mesh
    MOCKUP_MASSA_DOCE002_1: THREE.Mesh
  }
  materials: {
    Burggeman_MassaSalgada: THREE.MeshStandardMaterial
    Metalico: THREE.MeshStandardMaterial
  }
}

export default function Model(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('/Burggeman_Salgada.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOCKUP_MASSA_DOCE002.geometry}
        material={materials.Burggeman_MassaSalgada}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MOCKUP_MASSA_DOCE002_1.geometry}
        material={materials.Metalico}
      />
    </group>
  )
}

useGLTF.preload('/Burggeman_Salgada.gltf')