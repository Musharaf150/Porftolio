import React, { Suspense, useEffect, useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import CanvasLoader from '../components/CanvasLoader';

const About = () => {

    const [hasCopied, setHasCopied] = useState(false);
    const [places, setPlaces] = useState([]);

  const handleCopy = () => {
    navigator.clipboard.writeText(' mushi.ashraf38@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  useEffect(() => {
    // load data
    fetch('https://vasturiano.github.io/react-globe.gl/example/datasets/ne_110m_populated_places_simple.geojson').then(res => res.json())
      .then(({ features }) => setPlaces(features));
  }, []);

  

    



  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5
        h-full'>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1"  className='w-full sm:h-[276px]
                    h-fit object-contain'/>
                    <div>
                        <p className='grid-headtext'>
                            Hi, I&apos;m M.Musharaf
                        </p>
                        <p className='grid-subtext'>
                        I&apos;m a Computer Science fresh graduate with a pazssion for building products and brands. I have honed my skills in front-end and back-end development, allowing me to create comprehensive and efficient applications.
                        </p>
                    </div>

                </div>
            </div>

            <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
            <div className='grid-container'>
                <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                  <Suspense fallback={<CanvasLoader />}>

              <Globe
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                
                labelsData={places}
                labelLat={d => d.properties.latitude}
                labelLng={d => d.properties.longitude}
                labelText={d => d.properties.name}
                labelSize={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelDotRadius={d => Math.sqrt(d.properties.pop_max) * 4e-4}
                labelColor={() => 'rgba(255, 165, 0, 0.75)'}
                labelResolution={2}
                />
                </Suspense>
                      </div>

                <div>
                    <p className='grid-headtext'>I work remotely across the globe.</p>
                    <p className='grid-subtext'>I&apos;m based in Pakistan, with remote work available</p>
                    <a href="#contact">
                    <Button name='Contace Me' isBeam containerClass="w-full mt-10"/>
                    </a>
                </div>

            </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>


        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">mushi.ashraf38@gmail.com</p>
              </div>
            </div>
          </div>
        </div>


        </div>
    </section>
  )
}

export default About
