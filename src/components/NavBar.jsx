import React from 'react'


const NavBar = ( {homeActive, aboutMeActive, projectsActive, skillsActive, contactActive} ) => {
  return (
    <div className='text-center'>
        <nav className='w-full flex flex-row justify-around fixed top-0 z-100 border-b-2'>
            <a href="#home" className={`${homeActive ? 'bg-blue-400 nav-link-shine' : 'none'} nav-link`}>HOME</a>
            <a href="#about-me" className={`${aboutMeActive ? 'bg-blue-400 nav-link-shine' : 'none'} nav-link`}>ABOUT ME</a>
            <a href="#projects" className={`${projectsActive ? 'bg-blue-400 nav-link-shine' : 'none'} nav-link`}>PROJECTS</a>
            <a href="#skills" className={`${skillsActive ? 'bg-blue-400 nav-link-shine' : 'none'} nav-link`}>SKILLS</a>
            <a href="#contact" className={`${contactActive ? 'bg-blue-400 nav-link-shine' : 'none'} nav-link`}>CONTACT</a>
        </nav>
    </div>
  )
}

export default NavBar