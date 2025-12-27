import React from 'react'
import profilePic from '../assets/me.png'


const HomeSection = () => {
  return (
    <div>
        <div className='w-[1024px] h-[423px] relative mt-[171px] ml-[123px]'>
            <div className='absolute left-0'>
                <div className="intro-1 text-[90px] font-[Fira_Code] font-semibold text-white">Hello, I'm Mandy Ly</div>
                <div className="intro-2 text-[50px] font-[Fira_Code] font-regular text-gray">Software Engineer</div>
                <div className="intro-3">I'm a software engineer with a passion for learning and creating.</div>
            </div>
            <div className='absolute right-0'>
                {/* picture */}
                <img src={profilePic} alt="A picture of Mandy Ly" className='w-sm'/>
                <div className='w-sm h-7 bg-white rounded-full'></div>
            </div>
        </div>
    </div>
  )
}

export default HomeSection