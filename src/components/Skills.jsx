import React from 'react'


const Skills = () => {
  const skills = [
    {id: 'html', color: 'bg-blue-200', height: '300px', width: '350px'},
    {id: 'javascript', color: 'bg-blue-300', height: '300px', width: '350px'},
    {id: 'css', color: 'bg-blue-400', height: '300px', width: '350px'},
    {id: 'python', color: 'bg-blue-500', height: '300px', width: '350px'},
    {id: 'java', color: 'bg-blue-600', height: '300px', width: '350px'},
  ]
  return (
    <>
      <h1 className='text-[100px] text-center pt-[50px]'>Skills</h1>
      <swiper-container 
        effect="cards" 
        rewind="true" 
        slides-per-view="auto" 
        space-between="20"
        className={`pt-[100px]`}
      >
        {skills.map((skill) => (
          <swiper-slide 
            key={skill.id} 
            id={skill.id} 
            className={`${skill.color} rounded-lg flex items-center justify-center text-white text-xl`}
            style={{ width: skill.width, height: skill.height }}
          >
            {skill.id} 
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  )
}

export default Skills