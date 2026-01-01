import React from 'react'


const NavBar = ( {homeActive, aboutMeActive, projectsActive, skillsActive, contactActive} ) => {
  return (
    <div className='text-center text-white'>
        <nav className='w-full flex flex-row justify-around fixed top-0 z-100 border-b-2 bg-[var(--background)]'>
            <a href="#home" className={`${homeActive ? 'bg-[var(--primary)] nav-link-shine' : 'none'} nav-link`}>HOME</a>
            <a href="#about-me" className={`${aboutMeActive ? 'bg-[var(--primary)] nav-link-shine' : 'none'} nav-link`}>ABOUT ME</a>
            <a href="#projects" className={`${projectsActive ? 'bg-[var(--primary)] nav-link-shine' : 'none'} nav-link`}>PROJECTS</a>
            <a href="#skills" className={`${skillsActive ? 'bg-[var(--primary)] nav-link-shine' : 'none'} nav-link`}>SKILLS</a>
            <a href="#contact" className={`${contactActive ? 'bg-[var(--primary)] nav-link-shine' : 'none'} nav-link`}>CONTACT</a>
        </nav>
    </div>
  )
}

export default NavBar