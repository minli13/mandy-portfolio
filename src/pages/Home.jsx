import React, {useEffect, useState} from 'react'
import HomeSection from '../components/HomeSection'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import starryBg from '../assets/starry-bg.png'
import lightMode from '../assets/light-mode.png'
import darkMode from '../assets/dark-mode.png'


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
        <div>
            <NavBar 
                homeActive={homeActive} 
                aboutMeActive={aboutMeActive} 
                projectsActive={projectsActive} 
                skillsActive={skillsActive} 
                contactActive={contactActive}
            />

            <div className="fixed top-[100px] right-0">
              <label className="image-toggle-button" htmlFor="image-toggle">
                <input type="checkbox" id="image-toggle" className="checkbox-input" onChange={toggleMode} />
                <span className='toggle-slider'></span>
              </label>
            </div>
         
            <div className='' id='window'>
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className={`min-h-screen flex items-center justify-center h-${section.height}`}>
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