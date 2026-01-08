import React from 'react'


const NavBar = ( {homeActive, aboutMeActive, projectsActive, skillsActive, contactActive} ) => {
  return (
      <div className='text-center text-black dark:text-white'>

        {/* Desktop Navbar */}
        <nav className='hidden max-w-screen left-0 right-0 md:flex md:flex-row md:justify-around fixed top-0 z-100 border-b-2 bg-[var(--background)] dark:bg-[var(--dark-background)]'>
          <a href="#home" className={`${homeActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>HOME</a>
          <a href="#about-me" className={`${aboutMeActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>ABOUT ME</a>
          <a href="#projects" className={`${projectsActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>PROJECTS</a>
          <a href="#skills" className={`${skillsActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>SKILLS</a>
          <a href="#contact" className={`${contactActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>CONTACT</a>
        </nav>

        {/* Mobile Navbar */}
        <nav className='lg:hidden md:hidden flex flex-col'>

        </nav>

      </div>
      

  
  )
}

export default NavBar