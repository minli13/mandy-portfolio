import React from 'react'

const AboutMe = () => {
  return (
 
      <div className="hover-3d">
        {/* content */}
        <div className="rounded-2xl p-8 bg-[var(--background)] dark:bg-[var(--dark-background)] ml-10 mr-10 md:ml-30 md:mr-30 lg:ml-[300px] lg:mr-[300px]">
          <h1 className='text-base md:text-lg lg:text-3xl text-center font-[Fira_Code] text-[var(--primary)] text-shadow-lg/50'>About me</h1>
          <p className='text-base md:text-lg lg:text-xl text-center font-[Fira_Code] text-[var(--secondary)] dark:text-[var(--dark-secondary)] '>
            I’m a fourth-year computer science student who got into programming 
            by building small projects and wanting to understand how things work 
            behind the scenes. Over time, that curiosity grew into an interest in 
            developing complete applications and improving how users interact with 
            them. I enjoy working on web-based projects that involve both 
            problem-solving and design. I like breaking things down step by step and 
            improving my work as I go. Recently, I’ve been focusing on full-stack 
            development and creating projects that feel 
            practical and user-friendly. When I’m not coding, I enjoy creative projects 
            like crocheting and drawing.
          </p>
        </div>
        {/* 8 empty divs needed for the 3D effect */}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
  )
}

export default AboutMe