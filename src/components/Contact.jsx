import React from 'react'
import Footer from './Footer'
import '../contact.css'
import linkedinLogo from '../assets/linkedin-logo.png'
import githubLogo from '../assets/github-full-logo.png'

const Contact = () => {
  return (
    <div>
      <div className='p-6'>
        <h1 className='text-[100px] text-center font-[Fira_Code] text-[var(--primary)] text-shadow-lg/50'>Contact me</h1>
        <div className='flex flex-col m-auto justify-center items-center gap-2.5'>
          <a href="https://www.linkedin.com/in/mandy-ly-ab74a723a/" target='_blank' rel="noopener noreferrer"><button className="button-8 w-[150px] h-[50px]" role="button"><img src={`${linkedinLogo}`} ></img></button></a>
          <a href="https://github.com/minli13" target='_blank' rel="noopener noreferrer"><button className="button-8 w-[150px] h-[50px]" role="button"><img src={`${githubLogo}`} className='w-full h-full object-cover'></img></button></a>
        </div>
        
      </div>
    </div>

  )
}

export default Contact

