import React, { useEffect, useState } from 'react'
import Swiper from 'swiper'
import tictactoe from '../assets/tictactoe-demo.gif'

const Projects = ( {isVisible} ) => {

    const projects = [
        {id: 'p1', color: 'bg-gray-400', href: '#p1', src: tictactoe, name: 'Tic Tac Toe', description: 'A simple tic tac toe game', github: 'https://github.com/minli13/tic-tac-toe', live: 'https://stalwart-treacle-d1ea07.netlify.app/'},
        {id: 'p2', color: 'bg-gray-500', href: '#p2', src:"https://64.media.tumblr.com/a94e9e2591e2487329e33457a1c4f9b7/5a3ddbddfec1487f-96/s540x810/899deb1c282ce0ec3caee715fdc5a169bc6c3548.gif"},
        {id: 'p3', color: 'bg-gray-600', href: '#p3', src:"https://64.media.tumblr.com/c17b9c00c218e2c020d40c58557ac94d/95f402335a310705-f6/s540x810/ce987e00c1d749c7de0bd89351ebf265a2082a93.gif"},
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
                            <a href={`${project.live}`} target='_blank' rel="noopener noreferrer">
                                <img src={`${project.src}`} className='mx-auto w-1/3'></img>
                            </a>
                            <button>
                                <a href={`${project.github}`} target='_blank' rel="noopener noreferrer">Github</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>

        </div>
    )
}

export default Projects