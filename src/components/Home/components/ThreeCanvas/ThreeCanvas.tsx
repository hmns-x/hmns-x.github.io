import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {}

const initCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,                                   // Field of view
      window.innerWidth/window.innerHeight, // Aspect ratio
      0.1,                                  // Near clipping pane
      1000                                  // Far clipping pane
    );
    // Reposition the camera
    camera.position.set(5,5,0);
    // Point the camera at a given coordinate
    camera.lookAt(new THREE.Vector3(0,0,0));
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvasRef.current });
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff );
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry( 5, 5, 5, 5 ),
      new THREE.MeshBasicMaterial( { color: 0x393839, wireframe: true } )
    );
    plane.rotateX(Math.PI/2);
    scene.add( plane );
    renderer.render(scene, camera);
    }, []);

  return canvasRef;
}

const ThreeCanvas: React.FC<Props> = () => {
  const canvasRef = initCanvas();
  return (
    <canvas ref={canvasRef}/>
  );
}

export default ThreeCanvas;
