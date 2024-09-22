import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations, useVideoTexture } from '@react-three/drei'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import * as THREE from 'three'; // Import THREE.js

const DemoLaptop = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/laptop.glb')
  const { actions } = useAnimations(animations, group)

  const txt = useVideoTexture(props.texture ? props.texture : '/textures/project/project1.mp4');

  useEffect(() => {
    if (txt) {
      txt.flipY = false;
    }
  }, [txt]);

  useGSAP(() => {
    gsap.from(group.current.rotation, {
      y: Math.PI / 2,
      duration: 1,
      ease: 'power3.out',
    });
  }, [txt]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="model" rotation={[-Math.PI / 2, 0, -0.5]}>
          <group
            name="3098fab7ad1c4c87883c6c08c76f4ebffbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
            >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="laptop"
                  position={[0, 1.74, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}
                />
                <group
                  name="Armature"
                  position={[-5.7, 1.28, 0]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <group name="Object_6">
                    <primitive object={nodes._rootJoint} 
                  />

                    <skinnedMesh
                      name="Object_9"
                      geometry={nodes.Object_9.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_9.skeleton}
                    />

                    
                  
                    
                    <group
                      name="Object_8"
                      position={[0, 1.74, 0]}
                      rotation={[-Math.PI / 2, 0, 0]}
                      scale={100}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/laptop.glb')

export default DemoLaptop;
