import React, {useEffect, useState} from 'react'
import HomeSection from '../components/HomeSection'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import lightBackground from '../assets/starry-bg-white.png'
import darkBackground from '../assets/starry-bg.png'
import Footer from '../components/Footer'

// Things to do:
// 1. add email contact section
// 2. add mobile nav bar
// 3. arrows for project section is funky

const Home = () => {
    const sections = [
        {id: 'home', color: 'bg-amber-200', height: 'screen'},
        {id: 'about-me', color: 'bg-amber-300', height: 'screen'},
        {id: 'projects', color: 'bg-amber-400', height: 'screen'},
        {id: 'skills', color: 'bg-amber-500', height: 'screen'},
        {id: 'contact', color: 'bg-amber-600', height: 'screen'},
    ]

    // projects scrollbar visibility
    const [ isVisible, setIsVisible ] = useState(false);

    // used for navbar highlighting
    const [ homeActive, setHomeActive ] = useState(true);
    const [ aboutMeActive, setAboutMeActive ] = useState(false);
    const [ projectsActive, setProjectsActive ] = useState(false);
    const [ skillsActive, setSkillsActive ] = useState(false);
    const [ contactActive, setContactActive ] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight; 

        // show navbar highlight at home section
        if ((scrollPosition >= 0) && (scrollPosition <= windowHeight)) {
            setHomeActive(true);
        } else {
            setHomeActive(false);
        }

        // show navbar highlight at about-me section
        if ((scrollPosition >= windowHeight) && (scrollPosition <= windowHeight * 2)) {
            setAboutMeActive(true);
        } else {
            setAboutMeActive(false);
        }
        
        // show scrollbar and navbar highlight at projects section
        if ((scrollPosition >= windowHeight * 2) && (scrollPosition <= windowHeight * 3)) {
            setIsVisible(true);
            setProjectsActive(true);
        } else {
            setIsVisible(false);
            setProjectsActive(false);
        }

        // show navbar highlight at skills section
        if ((scrollPosition >= windowHeight * 3) && (scrollPosition <= windowHeight * 4)) {
            setSkillsActive(true);
        } else {
            setSkillsActive(false);
        }

        // show navbar highlight at contact section
        if ((scrollPosition >= windowHeight * 4) && (scrollPosition <= windowHeight * 5)) {
            setContactActive(true);
        } else {
            setContactActive(false);
        }
    }

    // Add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Call once on mount to set initial state
        handleScroll();
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

      function toggleMode() {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      }
    
      useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
          document.documentElement.classList.add('dark');
        }
      }, []);

    return (
        <div className="relative left-0 right-0 dark:text-white text-black bg-cover bg-center bg-no-repeat overflow-x-hidden bg-[image:var(--light-background-image-url)] dark:bg-[image:var(--dark-background-image-url)]">
            <NavBar 
                homeActive={homeActive} 
                aboutMeActive={aboutMeActive} 
                projectsActive={projectsActive} 
                skillsActive={skillsActive} 
                contactActive={contactActive}

            />

            <div className="fixed top-[80px] right-[20px]">
              <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="synthwave" onChange={toggleMode}/>

                    {/* sun icon */}
                    <svg
                        className="swap-off h-10 w-10 fill-[var(--secondary)]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                        className="swap-on h-10 w-10 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24">
                        <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                </label>
            </div>
         
            <div className='' id='window'>
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className={`flex items-center justify-center h-${section.height}`}>
                        {section.id == 'home' && <HomeSection />}
                        {section.id == 'about-me' && <AboutMe />}
                        {section.id == 'projects' && <Projects isVisible={isVisible}/>}
                        {section.id == 'skills' && <Skills />}
                        {section.id == 'contact' && <Contact />}
                    </section>
                ))}
                
            </div> 

            
        </div>
    )
}

export default Home