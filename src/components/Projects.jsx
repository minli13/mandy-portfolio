import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import tictactoe from '../assets/tictactoe-demo.gif'
import spotDemo from '../assets/spot-demo.mp4'
import ReactPlayer from 'react-player'
import musicare from '../assets/musicare-demo.mp4'
import githubLogo from '../assets/github-logo.png'

const Projects = ( {isVisible} ) => {

    const videoUrl = 'https://youtu.be/5Lp7fTeKa2g?si=dKmItlOXBhi2xhga';

    const projects = [
        {id: 'p1', color: 'gray-400', href: '#p1', src: tictactoe, name: 'Tic Tac Toe', description: 'A simple tic tac toe game', github: 'https://github.com/minli13/tic-tac-toe', live: 'https://stalwart-treacle-d1ea07.netlify.app/'},
        {id: 'p2', color: 'gray-500', href: '#p2', name: 'Study Tracker', description: 'A pomodoro student tracker', github: 'https://github.com/minli13/study-tracker', video: videoUrl},
        {id: 'p3', color: 'gray-600', href: '#p3', video: spotDemo, name: 'TicTacSPOT', description: 'Contributed to a game of Tic Tac Toe played by a user and Boston Dynamics\' SPOT robot', github: 'https://github.com/p-vinh/TicTacSPOT'},
        {id: 'p4', color: 'gray-700', href: '#p4', video: musicare, name: 'Musicare', description: 'A music recommendation app', github: 'https://github.com/PeterBahariance/CS_4800_MUSICARE', live: 'https://cs-4800-musicare.vercel.app/index.html'},
    ]

    var swiper = new Swiper(".mySwiper", {
        pagination: {
            el: ".swiper-pagination", // Target the pagination container
            clickable: true, // Enable clickable bullets
            type: "bullets"
        },
        // Other Swiper options (e.g., navigation, autoplay, etc.)
        navigation: { 
            nextEl: ".swiper-button-next", 
            prevEl: ".swiper-button-prev",
        },
        keyboard: {
            enabled: true,
        },

    });


    return (
        <div className='swiper mySwiper mt-[100px]'> 
            <div className='swiper-wrapper'>
                {projects.map(project => (
                    <div
                        key={project.id}
                        className={`swiper-slide text-center text-xl z-0`}
                    >
                        <div className={`flex flex-col w-[700px] mx-auto mb-8 p-8 border-[var(--primary)] gap-2 border-2 bg-[var(--background)]`}>
                            {project.live ?
                                <a href={`${project.live}`} target='_blank' rel="noopener noreferrer" className='mx-auto w-1/3'>
                                    <span className='text-4xl text-[var(--primary)] hover:underline'>{`${project.name}`}</span>
                                </a>
                            : <span className='text-4xl text-[var(--primary)]'>{`${project.name}`}</span>
                            }
                            <span className='text-xl w-[500px] mx-auto text-[var(--secondary)]'>{`${project.description}`}</span>
                            {project.src ?
                                <div>
                                    <img src={`${project.src}`} className='mx-auto w-1/2'></img> 
                                </div>
                            : null}
                            {project.video ?
                                <ReactPlayer src={`${project.video}`} className='mx-auto w-1/3' controls={true}></ReactPlayer>
                            : null}
                            <a href={`${project.github}`} target='_blank' rel="noopener noreferrer" className='mx-auto w-[50px]'>
                                <img src={`${githubLogo}`} className='mx-auto w-[50px] hover:-translate-y-1 hover:scale-110'></img>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-button-next z-100"></div>
            <div className="swiper-button-prev z-100"></div>
            <div className="swiper-pagination z-100"></div>

        </div>
    )
}

export default Projects