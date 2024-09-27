import Typed from 'typed.js';
import React from 'react';
import './Intro.css';
import Spline  from '@splinetool/react-spline';
// import { Canvas } from '@react-three/fiber';
// import {OrbitControls, useGLTF } from '@react-three/drei';
//
const Intro = () => {
  const el = React.useRef(null);
  const el2 = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Khatamul Ambia Library'],
      typeSpeed: 40,
   
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  React.useEffect(() => {
    // const typed = new Typed(el.current, {
    //   strings: ['Khatamul Ambia Library'],
    //   typeSpeed: 50,
    // });
    let typed2 = new Typed(el2.current, {
      strings: ['reading','learning','self nourishment'],
      typeSpeed: 80,
      loop: true,
      loopCount: Infinity,
    
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      // typed.destroy();
      typed2.destroy();
    };
  }, []);
  // const book = useGLTF('./book.gltf');

  return (
        <div className=' flex flex-col tablet:flex-row items-center justify-self-auto laptop:justify-around tablet:h-[90vh] h-fit'>
            {/* <img className='h-[400px]' src="./kalpLogo.png" alt="" /> */}
            <main className='flex justify-center w-[100%] tablet:w-[50%] h-[50vh] tablet:h-[90vh]'>
            <Spline scene="https://prod.spline.design/RRe5X8uqf3PJULtk/scene.splinecode"
             />
              {/* <Canvas frameloop="demand" camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}> 
              <primitive object={book.scene} scale={2.5} />
              <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enablePan={false} />
              </Canvas> */}
        </main >
            <div className='w-[100%] tablet:w-[50%] h-fit flex flex-col  items-center bg-transparent justify-center'>
            <h2 className='laptop:text-3xl  text-2xl text-white font-bold mb-3'>Welcome to</h2>
            <h1 className='text-[#42b1de] text-3xl laptop:text-4xl font-bold mb-3'><span ref={el} /></h1>
            <p className='text-white text-xl'>The best place for <span ref={el2} /> </p>
            </div>
        </div>
  )
}


export default Intro