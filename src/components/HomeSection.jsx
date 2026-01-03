import React, { useEffect } from 'react'
import profilePic from '../assets/me.png'

const HomeSection = () => {

  return (
    <div>
        <div className='w-full flex flex-col lg:flex-row p-4 m-auto'>
            <div className='flex flex-col'>
                <div className="intro-1 text-base md:text-lg lg:text-3xl font-[Fira_Code] font-semibold text-[var(--primary)] text-shadow-lg/50">Hello, I'm Mandy Ly</div>
                <div className="intro-2 text-base md:text-lg lg:text-2xl font-[Fira_Code] font-regular text-[var(--secondary)] dark:text-[var(--dark-secondary)]  text-shadow-lg/50">Software Engineer</div>
                <div className="intro-3 text-base md:text-lg lg:text-xl font-[Fira_Code] font-regular text-[var(--secondary)] dark:text-[var(--dark-secondary)]">I’m a computer science student interested in building clean, user-focused web applications and learning how systems work end-to-end.</div>
            </div>
            <div className='ml-auto mr-auto'>
                {/* picture */}
                <img src={profilePic} alt="A picture of Mandy Ly" className='w-xs sm:w-sm md:w-sm lg:w-sm'/>
                <div className='w-xs sm:w-sm md:w-sm lg:w-sm h-7 bg-[var(--dark-background)] dark:bg-white rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection