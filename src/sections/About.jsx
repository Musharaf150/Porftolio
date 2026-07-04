import React, { useEffect, useState } from 'react'
import Button from '../components/Button'

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live Karachi Clock setup for Remote status card
  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString('en-US', {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setLocalTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('mushi.ashraf38@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1280);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Generate matrix grid representing dynamic coding history (commit heat map)
  const renderContributionGrid = () => {
    const totalBlocks = isMobile ? 60 : 120; // 12 columns on compact viewports, 24 on wide desktop
    const blocks = [];
    for (let i = 0; i < totalBlocks; i++) {
      // Create random distribution of intensity classes
      const rand = Math.random();
      let colorClass = 'bg-neutral-800/60';
      if (rand > 0.85) colorClass = 'bg-cyan-500';
      else if (rand > 0.6) colorClass = 'bg-cyan-600/60';
      else if (rand > 0.3) colorClass = 'bg-cyan-800/30';

      blocks.push(
        <div
          key={i}
          className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-sm border border-black-100 ${colorClass} transition-all duration-300 hover:scale-125 hover:border-cyan-400`}
        />
      );
    }
    return blocks;
  };

  return (
    <section className='c-space my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

        {/* Card 1: Biography */}
        <div className='col-span-1 xl:row-span-3'>
          <div className='grid-container relative overflow-hidden group'>
            <div className='absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none' />
            <div className='w-full sm:h-[276px] h-fit flex items-center justify-center py-6'>
              <div className='relative w-36 h-36 rounded-full p-[3px] bg-gradient-to-r from-cyan-500 to-teal-400 shadow-2xl flex items-center justify-center'>
                <div className='w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-4xl select-none'>
                  👨‍💻
                </div>
                <span className='absolute bottom-2 right-2 w-4 h-4 rounded-full bg-cyan-400 border-[3px] border-neutral-900 animate-pulse' />
              </div>
            </div>
            <div>
              <p className='grid-headtext'>
                Muhammad Musharaf
              </p>
              <p className='grid-subtext leading-relaxed'>
                I am a Software Engineer with 3+ years of professional experience building web and mobile applications. I specialize in Next.js, React Native, and full-stack JavaScript systems, delivering robust, optimized products from concept to production.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Tech Stack (categorized tag clouds) */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="w-full sm:h-[276px] h-fit flex flex-col justify-between space-y-4 py-2 pr-1">
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Frontend & Mobile</span>
                <div className="flex flex-wrap gap-1.5">
                  {['React.js', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'GSAP'].map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1.5 bg-neutral-900/60 border border-white/5 text-[#afb0b6] rounded hover:border-cyan-500/50 hover:text-white transition-colors cursor-default">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">Backend & Database</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'JWT Auth'].map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1.5 bg-neutral-900/60 border border-white/5 text-[#afb0b6] rounded hover:border-cyan-500/50 hover:text-white transition-colors cursor-default">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">State & CMS</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Redux Toolkit', 'RTK Query', 'Zustand', 'Recoil', 'Strapi', 'Sanity CMS', 'Umbraco'].map(tech => (
                    <span key={tech} className="text-xs px-2.5 py-1.5 bg-neutral-900/60 border border-white/5 text-[#afb0b6] rounded hover:border-cyan-500/50 hover:text-white transition-colors cursor-default">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                applications.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Global Timezone / Remote Collaboration */}
        <div className="col-span-1 xl:row-span-4">
          <div className='grid-container justify-between'>
            <div className='w-full sm:h-[326px] h-[250px] flex flex-col justify-center items-center overflow-hidden relative rounded-xl border border-white/5 bg-neutral-950/40'>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_60%)] animate-pulse" />
              <div className="z-10 flex flex-col items-center justify-center p-6 text-center space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest text-cyan-400/80 uppercase">Pakistan Standard Time</span>
                <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight bg-neutral-900/80 border border-white/5 px-6 py-4 rounded-xl shadow-inner select-none">
                  {localTime || '12:00:00 AM'}
                </span>
                <span className="text-xs text-[#afb0b6] mt-2 max-w-[200px]">Active for remote integration across US, Canada, EU, UK, and APAC.</span>
              </div>
            </div>

            <div className="pt-4">
              <p className='grid-headtext'>Remote Collaboration & Delivery</p>
              <p className='grid-subtext leading-relaxed'>Based in Pakistan, I work seamlessly across global timezones to build and deploy enterprise-grade digital products.</p>
              <a href="#contact">
                <Button name='Contact Me' isBeam containerClass="w-full mt-6 font-semibold" />
              </a>
            </div>
          </div>
        </div>

        {/* Card 4: Contribution Grid & Engineering values */}
        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container justify-between">
            <div className="w-full sm:h-[266px] h-fit flex flex-col justify-center py-4">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-3 font-mono">Simulated Activity Codebase</span>
              <div className="grid grid-flow-col grid-rows-5 gap-1.5 p-4 rounded-xl border border-white/5 bg-neutral-950/40 w-fit mx-auto overflow-x-auto select-none">
                {renderContributionGrid()}
              </div>
              <div className="flex justify-between items-center max-w-[340px] w-full mx-auto mt-2 text-[10px] text-neutral-500 font-mono">
                <span>Less</span>
                <div className="flex gap-1">
                  <span className="w-2.5 h-2.5 rounded-sm bg-neutral-800/60" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-800/30" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-600/60" />
                  <span className="w-2.5 h-2.5 rounded-sm bg-cyan-500" />
                </div>
                <span>More commits</span>
              </div>
            </div>

            <div>
              <p className="grid-headtext">Engineering Philosophy</p>
              <p className="grid-subtext leading-relaxed">
                I focus on writing clean, maintainable, and type-safe code that balances rapid feature shipping with architectural integrity. I enjoy solving complex performance bottlenecks, optimizing bundle sizes, and building robust API infrastructures.
              </p>
            </div>
          </div>
        </div>

        {/* Card 5: Direct contact Copy element */}
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container justify-center py-8">
            <div className="space-y-4">
              <p className="grid-subtext text-center font-semibold text-xs uppercase tracking-wider">Quick Link</p>
              <div className="copy-container p-4 rounded-lg bg-neutral-950/50 border border-white/5 hover:border-cyan-500/30 hover:bg-neutral-900/60 transition-all cursor-pointer flex flex-col items-center justify-center space-y-2 group" onClick={handleCopy}>
                <div className="flex items-center gap-2">
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
                  <span className="text-xs text-neutral-400 font-mono">{hasCopied ? 'Copied to clipboard!' : 'Click to copy email'}</span>
                </div>
                <p className="text-base sm:text-lg font-bold text-white tracking-tight">{hasCopied ? 'mushi.ashraf38@gmail.com' : 'mushi.ashraf38@gmail.com'}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
