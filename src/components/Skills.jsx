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
    <div className='flex flex-col mt-[10px]'>
      <h1 className='text-[100px] text-[var(--primary)] text-center pt-[40px] font-[Fira_Code] text-shadow-lg/50'>Skills</h1>
      <p className='text-[var(--secondary)] text-[20px] text-center font-[Fira_Code] mb-[-20px] text-shadow-lg/50'>Hold and drag to scroll each card</p>
      <swiper-container 
        effect="cards" 
        rewind="true" 
        slides-per-view="auto" 
        space-between="20"
        className={`pt-[80px]`}
      >
        {skills.map((skill) => (
          <swiper-slide 
            key={skill.id} 
            id={skill.id} 
            className={`${skill.color} rounded-lg flex items-center justify-center text-white text-xl font-[Fira_Code]`}
            style={{ width: skill.width, height: skill.height }}
          >
            <div className='flex-col text-center px-4'>
              <p className='text-2xl font-bold mb-4'>{skill.id}</p>
              {skill.items && skill.items.length > 0 && (
                <ul className='text-left space-y-2'>
                  {skill.items.map((item, index) => (
                    <li key={index} className='text-lg'>{item}</li>
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