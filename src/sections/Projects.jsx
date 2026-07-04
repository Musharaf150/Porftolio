import React, { useState } from 'react'
import { myProjects } from '../constants'

const projectCount = myProjects.length;

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };
    return (
        <section className='c-space my-20' id='work'>
            <p className='head-text'>My Projects</p>

            <div className='grid lg:grid-cols-12 grid-cols-1 mt-12 gap-8 w-full items-stretch'>
                {/* Left Panel: Description */}
                <div className='lg:col-span-6 flex flex-col justify-between gap-5 relative sm:p-10 py-10 px-5 border border-white/5 bg-neutral-900/40 backdrop-blur-md rounded-2xl shadow-2xl'>
                    <div className="absolute top-0 right-0 pointer-events-none opacity-20">
                        <img src={currentProject.spotlight} alt="" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 bg-neutral-950 border border-white/10 w-fit rounded-xl shadow-lg" style={currentProject.logoStyle}>
                        <img className="w-10 h-10 object-contain" src={currentProject.logo} alt={`${currentProject.title} logo`} />
                    </div>

                    <div className="flex flex-col gap-4 text-neutral-400 my-4 min-h-[220px]">
                        <h3 className="text-white text-2xl font-bold tracking-tight">{currentProject.title}</h3>
                        <p className="text-sm leading-relaxed text-neutral-300">{currentProject.desc}</p>
                        <p className="text-xs leading-relaxed text-neutral-400 border-l border-cyan-500/40 pl-3 py-1 bg-cyan-950/10">{currentProject.subdesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5 pt-4 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="w-9 h-9 rounded-lg border border-white/5 bg-neutral-950 flex justify-center items-center hover:border-cyan-500/30 transition-colors" title={tag.name}>
                                    <img src={tag.path} alt={tag.name} className="w-5 h-5 object-contain" />
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-all active:scale-95 border border-cyan-500/20 bg-cyan-950/20 hover:bg-cyan-950/40 px-4 py-2 rounded-lg"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit live site for ${currentProject.title}`}>
                            <span>Github Repo</span>
                            <img src="/assets/arrow-up.png" alt="" aria-hidden="true" className="w-3.5 h-3.5 object-contain invert brightness-0" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')} aria-label="Previous project">
                            <img src="/assets/left-arrow.png" alt="" aria-hidden="true" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')} aria-label="Next project">
                            <img src="/assets/right-arrow.png" alt="" aria-hidden="true" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Right Panel: Premium Glassmorphic Mockup Container */}
                <div className='lg:col-span-6 border border-white/5 bg-neutral-900/20 rounded-2xl min-h-[400px] flex items-center justify-center p-6 md:p-10 relative overflow-hidden group shadow-2xl'>
                    {/* Background Soft Glow */}
                    <div className="absolute w-[320px] h-[320px] bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors duration-500" />

                    {/* Interactive Device Screen Frame */}
                    <div className="relative w-full h-full flex flex-col justify-center items-center transition-all duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                        <div className="w-full max-w-md border border-white/10 bg-neutral-950/80 p-2.5 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden flex flex-col">
                            {/* Window controls bar */}
                            <div className="flex items-center gap-1.5 pb-2 border-b border-white/5 mb-2.5 px-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-80" />
                            </div>

                            {/* Visual Display screen */}
                            <div className="relative w-full aspect-video rounded-lg border border-white/5 bg-neutral-900 overflow-hidden group/screen">
                                <img
                                    src={currentProject.spotlight}
                                    alt={`${currentProject.title} preview`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover/screen:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60 pointer-events-none" />
                            </div>

                            {/* Info tagline bar */}
                            <div className="flex justify-between items-center mt-2.5 px-2 text-[10px] text-neutral-500 font-mono select-none">
                                <span>HOSTED ON VERCEL</span>
                                <span>60FPS RESPONSIVE</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Projects
