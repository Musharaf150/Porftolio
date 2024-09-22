import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import Character from '../components/Character'

const Hero = () => {
   // Use media queries to determine screen size
   const isSmall = useMediaQuery({ maxWidth: 440 });
   const isMobile = useMediaQuery({ maxWidth: 768 });
   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
 
   const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='my-15 min-h-screen w-full flex flex-col relative' id='home'>

      <div className=' w-full grid lg:grid-cols-2'>

      <div className='w-full md:min-h-[380px] mx-auto flex flex-col sm:mt-52 inset-0 c-space
        gap-3 cool-intro'>
            <p className='sm:text-3xl text-2xl font-medium text-white md:text-start text-center font-generalsans'>
                Hi, I&apos;m M.Musharaf <span className='waving-hand'>👋
                     </span>
                </p>
                <p className='hero_tag text-gray_gradient  hover:text-white
                transition-colors cursor-pointer'>I&apos;m a recent Computer Science graduate with a strong foundation in the MERN stack, Next.js, and .NET. I&apos;m passionate about building seamless digital experiences and looking to kickstart my career by contributing to innovative projects. Ready to dive into new challenges and grow as a developer!
                </p>

        </div>


        <div className="lg:mt-20 grid min-h-[400px] mb-20 lg:mb-0">
            <Canvas>
              <ambientLight intensity={2} />
              <spotLight position={[3, 4, 8]} angle={0.5} penumbra={1} />
              <directionalLight position={[10, 20, -2]} intensity={12} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              <Suspense fallback={<CanvasLoader />}>
              <Character rotation={[0,-0.3,0]} position-y={-3.2} scale={3.3}/>
              </Suspense>
            </Canvas>
          </div>
  
      </div>


        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero
