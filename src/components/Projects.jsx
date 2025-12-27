import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import tictactoe from '../assets/tictactoe-demo.gif'
import spotDemo from '../assets/spot-demo.mp4'
import ReactPlayer from 'react-player';

const Projects = ( {isVisible} ) => {

    const videoUrl = 'https://youtu.be/5Lp7fTeKa2g?si=dKmItlOXBhi2xhga';

    const projects = [
        {id: 'p1', color: 'bg-gray-400', href: '#p1', src: tictactoe, name: 'Tic Tac Toe', description: 'A simple tic tac toe game', github: 'https://github.com/minli13/tic-tac-toe', live: 'https://stalwart-treacle-d1ea07.netlify.app/'},
        {id: 'p2', color: 'bg-gray-500', href: '#p2', name: 'Study Tracker', description: 'A pomodoro student tracker', github: 'https://github.com/minli13/study-tracker', video: videoUrl},
        {id: 'p3', color: 'bg-gray-600', href: '#p3', video: spotDemo, name: 'TicTacSPOT', description: 'Contributed to a game of Tic Tac Toe played by a user and Boston Dynamics\' SPOT robot', github: 'https://github.com/p-vinh/TicTacSPOT'},
        {id: 'p4', color: 'bg-gray-700', href: '#p4', src: "https://64.media.tumblr.com/a18cfe31669c6b72de5d0aed6e550c38/5a3ddbddfec1487f-f7/s540x810/7316b92e9a673a8ac4e3a7870b1d820cb16c4993.gif"},
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
        <div className='swiper mySwiper h-screen'> 
            <div className='swiper-wrapper'>
                {projects.map(project => (
                    <div
                        key={project.id}
                        className={`${project.color} swiper-slide text-center text-white text-xl w-screen z-0]`}
                    >
                        <div className='w-screen h-screen flex flex-col mt-[56px]'>
                            <span className='text-2xl'>{`${project.name}`}</span>
                            <span className='text-2xl'>{`${project.description}`}</span>
                            {project.src ?
                                <a href={`${project.live}`} target='_blank' rel="noopener noreferrer" className='mx-auto w-1/3'>
                                    <img src={`${project.src}`} className=''></img>
                                </a>
                            : null}
                            {project.video ?
                                <ReactPlayer src={`${project.video}`} className='mx-auto w-1/3' controls={true}></ReactPlayer>
                            : null}
                            <button>
                                <a href={`${project.github}`} target='_blank' rel="noopener noreferrer">Github</a>
                            </button>
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