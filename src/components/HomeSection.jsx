import React, { useEffect } from 'react'
import profilePic from '../assets/me.png'

const HomeSection = () => {

  return (
    <div>
        <div className='w-[1024px] h-[423px] relative mt-[171px] ml-[123px]'>
            <div className='absolute left-0'>
                <div className="intro-1 text-[90px] font-[Fira_Code] font-semibold text-[var(--primary)] text-shadow-lg/50">Hello, I'm Mandy Ly</div>
                <div className="intro-2 text-[40px] font-[Fira_Code] font-regular text-[var(--secondary)] dark:text-[var(--dark-secondary)]  text-shadow-lg/50">Software Engineer</div>
                <div className="intro-3 text-[20px] font-[Fira_Code] font-regular text-[var(--secondary)] dark:text-[var(--dark-secondary)] w-[700px]">I’m a computer science student interested in building clean, user-focused web applications and learning how systems work end-to-end.</div>
            </div>
            <div className='absolute right-0'>
                {/* picture */}
                <img src={profilePic} alt="A picture of Mandy Ly" className='w-sm'/>
                <div className='w-sm h-7 bg-[var(--dark-background)] dark:bg-white rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection