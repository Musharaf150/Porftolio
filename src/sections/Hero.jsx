import React, { useState } from 'react'
import Button from '../components/Button'
import { useMediaQuery } from 'react-responsive'

const Hero = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Terminal data structures
  const terminalData = {
    profile: `// Muhammad Musharaf - Software Engineer
const engineer = {
  name: 'Muhammad Musharaf',
  title: 'Senior Web & Mobile Engineer',
  experience: '3+ Years Professional',
  specialties: ['React Native', 'Next.js', 'MERN Stack'],
  location: 'Pakistan (UTC+5)',
  status: 'Open for Remote Contracts',
  values: ['Clean Architecture', 'Type-Safety', '60FPS Performance']
};

console.log(engineer.specialties.join(' && '));
// Output: React Native && Next.js && MERN Stack`,

    skills: `{
  "frontend": ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
  "mobile": ["React Native", "Expo", "Fastlane", "Store Releases"],
  "backend": ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
  "databases": ["MongoDB", "PostgreSQL"],
  "cms": ["Strapi", "Sanity CMS", "Umbraco"]
}`,

    contact: `#!/bin/bash
# Pinging social and professional networks...

ping -c 1 mailto:mushi.ashraf38@gmail.com
# PING successful [200 OK] -> mushi.ashraf38@gmail.com

ping -c 1 https://github.com/Musharaf150
# PING successful [200 OK] -> Active Repos: 40+

ping -c 1 https://linkedin.com/in/muhammad-musharaf-346b52229/
# PING successful [200 OK] -> Connected`
  };

  return (
    <section className='min-h-screen w-full flex flex-col relative overflow-hidden pt-28 sm:pt-36 pb-20 bg-grid-pattern' id='home'>
      {/* Background Radial Glow */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.08),transparent_60%)] pointer-events-none' />

      <div className='max-w-7xl mx-auto w-full c-space grid lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10'>
        {/* Left Side: Copywriting */}
        <div className='lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-start space-y-6'>
          {/* Pulse Status Indicator */}
          <div className='inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-[8px] sm:text-xs font-semibold tracking-wider uppercase max-w-[280px] sm:max-w-none text-ellipsis overflow-hidden whitespace-nowrap'>
            <span className='w-2 h-2 rounded-full bg-cyan-400 animate-ping flex-shrink-0' />
            Available for remote contracts worldwide
          </div>

          <h1 className='text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-none font-generalsans'>
            Building High-Performance <br />
            <span className='bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent'>
              Web & Mobile Experiences
            </span>
          </h1>

          <p className='text-neutral-400 text-sm sm:text-lg max-w-xl leading-relaxed'>
            I&apos;m Muhammad Musharaf, a Software Engineer specializing in React Native, Next.js, and Full-Stack MERN development. I craft clean, scalable code and high-performance digital products for companies globally.
          </p>

          <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-2'>
            <a href="#contact" className="w-full sm:w-auto">
              <Button name="Let's work together" isBeam containerClass="w-full sm:w-fit font-semibold" />
            </a>
            <a
              href="/assets/resume.pdf"
              download="Muhammad_Musharaf_Resume.pdf"
              className='flex items-center justify-center border border-white/10 hover:border-cyan-500/30 bg-neutral-900/40 hover:bg-neutral-900/80 text-white font-semibold px-6 py-3 rounded-md transition-all active:scale-95 text-center text-sm sm:text-base'
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Right Side: Interactive Terminal Simulator */}
        <div className='lg:col-span-5 w-full flex justify-center'>
          <div className='w-full max-w-lg border border-white/10 bg-neutral-900/60 backdrop-blur-md rounded-xl overflow-hidden shadow-2xl flex flex-col'>
            {/* Terminal Top Window Bar */}
            <div className='flex items-center justify-between px-4 py-3 bg-neutral-950/60 border-b border-white/5'>
              <div className='flex gap-1.5'>
                <div className='w-3 h-3 rounded-full bg-[#FF5F56] opacity-80' />
                <div className='w-3 h-3 rounded-full bg-[#FFBD2E] opacity-80' />
                <div className='w-3 h-3 rounded-full bg-[#27C93F] opacity-80' />
              </div>
              <span className='text-xs font-mono text-neutral-500 select-none'>bash - musharaf@portfolio</span>
              <div className='w-12' />
            </div>

            {/* Terminal Command Tabs */}
            <div className='flex bg-neutral-950/30 border-b border-white/5 font-mono text-xs text-neutral-400 select-none overflow-x-auto'>
              {['profile', 'skills', 'contact'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2.5 sm:px-4 py-2.5 border-r border-white/5 transition-colors duration-150 flex items-center gap-1 sm:gap-1.5 ${activeTab === tab
                    ? 'bg-neutral-900/80 text-cyan-400 border-t border-t-cyan-500 font-semibold'
                    : 'hover:bg-neutral-900/30 hover:text-white'
                    }`}
                >
                  <span className='text-[10px] text-neutral-600 font-bold hidden xs:inline'>
                    {tab === 'profile' ? 'JS' : tab === 'skills' ? '{}' : 'SH'}
                  </span>
                  {tab === 'profile' ? (
                    <>
                      <span className='hidden xs:inline'>musharaf</span>
                      <span className='xs:hidden'>mush</span>.js
                    </>
                  ) : tab === 'skills' ? (
                    <>
                      <span className='hidden xs:inline'>skills</span>
                      <span className='xs:hidden'>libs</span>.json
                    </>
                  ) : (
                    <>
                      <span className='hidden xs:inline'>contact</span>
                      <span className='xs:hidden'>ping</span>.sh
                    </>
                  )}
                </button>
              ))}
            </div>

            {/* Terminal Command Area */}
            <div className='p-4 sm:p-6 bg-neutral-900/80 min-h-[300px] font-mono text-xs text-neutral-300 leading-relaxed overflow-x-auto select-text'>
              <div className='flex items-center gap-2 mb-4 text-neutral-500 select-none'>
                <span>$</span>
                <span className='text-white'>cat {activeTab === 'profile' ? 'musharaf.js' : activeTab === 'skills' ? 'skills.json' : 'contact.sh'}</span>
              </div>
              <pre className='whitespace-pre-wrap font-mono text-cyan-400/90'>{terminalData[activeTab]}</pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
