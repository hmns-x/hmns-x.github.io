import * as THREE from 'three';
import React from 'react';
import { Canvas } from 'react-three-fiber';

interface Props {}

const MainFX: React.FC<Props> = () => {
  return (
    <Canvas>
      <group>
        <line>
          <geometry
            attach="geometry"
            vertices={[[-2, 0, 0], [0, 2, 0], [2, 0, 0], [0, -2, 0], [-2, 0, 0]].map(v => new THREE.Vector3(...v))}
            onUpdate={self => (self.verticesNeedUpdate = true)}
          />
          <lineBasicMaterial attach="material" color="black" />
        </line>
      </group>
    </Canvas>
  );
}

export default MainFX;
