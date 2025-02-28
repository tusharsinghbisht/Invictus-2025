/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\public\clock2.glb --transform 
Files: .\public\clock2.glb [20.08MB] > D:\projects\invictus25\clock2-transformed.glb [1.07MB] (95%)
*/


import { useGLTF } from '@react-three/drei'

export function Model(props: any) {
  const { nodes, materials }: { nodes: any, materials: any } = useGLTF('/clock2-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={materials['ambientCG/Concrete040/1K-JPG.001']} position={[1.081, -0.805, -0.068]} scale={9.298} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials['ambientCG/Bricks060/1K-JPG']} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials['ambientCG/Concrete040/1K-JPG']} />
    </group>
  )
}

useGLTF.preload('/clock2-transformed.glb')
