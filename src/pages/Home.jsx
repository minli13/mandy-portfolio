import React, {use, useState} from 'react'
import NavBar from '../components/NavBar'
import AboutMe from '../components/AboutMe'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
    const sections = [
        {id: 'home', color: 'bg-amber-200', height: 'screen'},
        {id: 'about-me', color: 'bg-amber-300', height: 'screen'},
        {id: 'projects', color: 'bg-amber-400', height: 'screen'},
        {id: 'skills', color: 'bg-amber-500', height: 'screen'},
        {id: 'contact', color: 'bg-amber-600', height: 'screen'},
        {id: 'footer', color: 'bg-amber-700', height: '60'},
    ]

    // projects scrollbar visibility
    const [ isVisible, setIsVisible ] = useState(false);

    // used for navbar highlighting
    const [ homeActive, setHomeActive ] = useState(true);
    const [ aboutMeActive, setAboutMeActive ] = useState(false);
    const [ projectsActive, setProjectsActive ] = useState(false);
    const [ skillsActive, setSkillsActive ] = useState(false);
    const [ contactActive, setContactActive ] = useState(false);

    const handleProjectsScroll = () => {
        const scrollableWindow = document.getElementById('window');
        const currentScrollY = scrollableWindow.scrollTop;
        const windowHeight = window.innerHeight; 

        // show navbar highlight at home section
        if ((currentScrollY >= 0) && (currentScrollY <= windowHeight)) {
            setHomeActive(true);
        } else {
            setHomeActive(false);
        }

        // show navbar highlight at about-me section
        if ((currentScrollY >= windowHeight) && (currentScrollY <= windowHeight * 2)) {
            setAboutMeActive(true);
        } else {
            setAboutMeActive(false);
        }
        
        // show scrollbar and navbar highlight at projects section
        if ((currentScrollY >= windowHeight * 2) && (currentScrollY <= windowHeight * 3)) {
            setIsVisible(true);
            setProjectsActive(true);
        } else {
            setIsVisible(false);
            setProjectsActive(false);
        }

        // show navbar highlight at skills section
        if ((currentScrollY >= windowHeight * 3) && (currentScrollY <= windowHeight * 4)) {
            setSkillsActive(true);
        } else {
            setSkillsActive(false);
        }

        // show navbar highlight at contact section
        if ((currentScrollY >= windowHeight * 4) && (currentScrollY <= windowHeight * 5)) {
            setContactActive(true);
        } else {
            setContactActive(false);
        }
    }

    return (
        <div>
            <NavBar 
                homeActive={homeActive} 
                aboutMeActive={aboutMeActive} 
                projectsActive={projectsActive} 
                skillsActive={skillsActive} 
                contactActive={contactActive}
            />
         
            <div className='snap-home-parent' onScroll={handleProjectsScroll} id='window'>
                {sections.map((section) => (
                    <section key={section.id} id={section.id} className={`snap-center snap-home-child bg-[var(--background)] h-${section.height}`}>
                        {section.id == 'about-me' && <AboutMe />}
                        {section.id == 'projects' && <Projects isVisible={isVisible}/>}
                        {section.id == 'skills' && <Skills />}
                        {section.id == 'contact' && <Contact />}
                        {section.id == 'footer' && <Footer />}
                    </section>
                ))}
            </div> 

            <div className=''>
                <div>intro</div>
                <div>
                    {/* picture */}
                    <img src="me.png" alt="A picture of Mandy Ly" />
                </div>
            </div>
            

        </div>
    )
}

export default Home