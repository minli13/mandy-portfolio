import React from 'react'


const NavBar = ( {homeActive, aboutMeActive, projectsActive, skillsActive, contactActive} ) => {

  const toggleNav = () => {
    document.getElementById("nav-overlay").classList.toggle("hidden");
    /* hide everything else */
    document.getElementById("mode").classList.toggle("hidden");
    document.getElementById("home").classList.toggle("hidden");
    document.getElementById("about-me").classList.toggle("hidden");
    document.getElementById("projects").classList.toggle("hidden");
    document.getElementById("skills").classList.toggle("hidden");
    document.getElementById("contact").classList.toggle("hidden");
    /* close nav when window expands */
    window.addEventListener("resize", () => {
      closeNav();
    });

    const navContainer = document.getElementById("nav-overlay")
    navContainer.addEventListener("click", function(e) {
      if (e.target.tagName === 'A') {
        closeNav();
      }
    });
  }

  /* close navbar after click */
  const closeNav = () => {
    document.getElementById("nav-overlay").classList.add("hidden");
    /* show everything else */
    document.getElementById("mode").classList.remove("hidden");
    document.getElementById("home").classList.remove("hidden");
    document.getElementById("about-me").classList.remove("hidden");
    document.getElementById("projects").classList.remove("hidden");
    document.getElementById("skills").classList.remove("hidden");
    document.getElementById("contact").classList.remove("hidden");
  }

  return (
      <div className='text-center text-black dark:text-white z-200'>

        {/* Desktop Navbar */}
        <nav className='hidden max-w-screen left-0 right-0 md:flex md:flex-row md:justify-around fixed top-0 z-100 border-b-2 bg-[var(--background)] dark:bg-[var(--dark-background)]'>
          <a href="#home" className={`${homeActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>HOME</a>
          <a href="#about-me" className={`${aboutMeActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>ABOUT ME</a>
          <a href="#projects" className={`${projectsActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>PROJECTS</a>
          <a href="#skills" className={`${skillsActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>SKILLS</a>
          <a href="#contact" className={`${contactActive ? 'bg-[var(--primary)] dark:bg-[var(--dark-primary)] nav-link-shine' : 'none'} nav-link`}>CONTACT</a>
        </nav>

        {/* Mobile Navbar */}
        <nav className='lg:hidden md:hidden flex flex-col fixed top-0 z-100 w-full'>
          <div class="navbar bg-base-100 shadow-sm">
            <div class="flex-none">
              <button class="btn btn-square btn-ghost text-white" onClick={toggleNav}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg>
              </button>
            </div>
            <div class="flex-1">
              <a class="btn btn-ghost text-xl text-white">Mandy's Portfolio</a>
            </div>
            {/* <div class="flex-none text-white">
              <button class="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
              </button>
            </div> */}
          </div>
        </nav>

        <div id="nav-overlay" className="hidden fixed left-0 w-screen h-screen bg-[var(--background)] dark:bg-[var(--dark-background)] text-3xl">
          <div className="overlay-content h-screen flex flex-wrap flex-col content-evenly gap-5 pt-20 pb-2.5">
            <a href="#home" className='border-b-2 border-[var(--primary)] dark:border-[var(--dark-primary)] p-5 hover:bg-[var(--primary)] dark:hover:bg-[var(--dark-primary)] hover:nav-link-shine hover:nav-link'>HOME</a>
            <a href="#about-me" className='border-b-2 border-[var(--primary)] dark:border-[var(--dark-primary)] p-5 hover:bg-[var(--primary)] dark:hover:bg-[var(--dark-primary)] hover:nav-link-shine hover:nav-link'>ABOUT ME</a>
            <a href="#projects" className='border-b-2 border-[var(--primary)] dark:border-[var(--dark-primary)] p-5 hover:bg-[var(--primary)] dark:hover:bg-[var(--dark-primary)] hover:nav-link-shine hover:nav-link'>PROJECTS</a>
            <a href="#skills" className='border-b-2 border-[var(--primary)] dark:border-[var(--dark-primary)] p-5 hover:bg-[var(--primary)] dark:hover:bg-[var(--dark-primary)] hover:nav-link-shine hover:nav-link'>SKILLS</a>
            <a href="#contact" className='border-b-2 border-[var(--primary)] dark:border-[var(--dark-primary)] p-5 hover:bg-[var(--primary)] dark:hover:bg-[var(--dark-primary)] hover:nav-link-shine hover:nav-link'>CONTACT</a>
          </div>
        </div>

      </div>
      

  
  )
}

export default NavBar