import React from 'react'

const Skills = () => {
  const skills = [
    {
      id: 'Programming Languages', 
      color: 'bg-green-300', 
      height: '300px', 
      width: '350px', 
      items: ['Python', 'Java', 'JavaScript', 'C', 'C++']
    },
    {
      id: 'Frontend & Styling', 
      color: 'bg-green-400', 
      height: '300px', 
      width: '350px', 
      items: ['HTML', 'CSS', 'React', 'Tailwind CSS']
    },
    {
      id: 'Backend & Databases', 
      color: 'bg-green-500', 
      height: '300px', 
      width: '350px', 
      items: ['Node.js', 'Flask', 'Django', 'MySQL', 'SQL']
    },
    {
      id: 'Tools & Platforms', 
      color: 'bg-green-600', 
      height: '300px', 
      width: '350px', 
      items: ['Git', 'VS Code', 'Figma']
    },
    {
      id: 'Concepts & Methodologies', 
      color: 'bg-green-700', 
      height: '300px', 
      width: '350px', 
      items: ['REST APIs', 'Responsive Design', 'Version Control']
    },
  ]

  return (
    <div className='flex flex-col w-full '>
      <h1 className='text-3xl md:text-5xl lg:text-7xl text-[var(--primary)] dark:text-[var(--dark-primary)] text-center font-[Fira_Code] text-shadow-lg/50'>Skills</h1>
      <p className='text-lg md:text-xl lg:text-2xl text-[var(--secondary)] dark:text-[var(--dark-secondary)] text-center font-[Fira_Code] text-shadow-lg/50'>Hold and drag to scroll each card</p>
      <swiper-container 
        effect="cards" 
        rewind="true" 
        slides-per-view="auto" 
        space-between="20"
        className={`m-5`}
      >
        {skills.map((skill) => (
          <swiper-slide 
            key={skill.id} 
            id={skill.id} 
            className={`${skill.color} w-60 h-60 md:w-80 md:h-70 lg:w-96 lg:h-80 rounded-lg flex items-center justify-center text-black dark:text-white text-xl font-[Fira_Code]`}
          >
            <div className='flex-col text-center p-4'>
              <p className='text-base md:text-lg lg:text-2xl font-bold mb-4'>{skill.id}</p>
              {skill.items && skill.items.length > 0 && (
                <ul className='text-base md:text-lg lg:text-2xl text-left space-y-2'>
                  {skill.items.map((item, index) => (
                    <li key={index} className=''>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  )
}

export default Skills