import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import docker from '../assets/docker.png'
import bootstrap from '../assets/bootstrap.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import django from '../assets/django.jpeg'
import fastapi from '../assets/fastapi.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import mysql from '../assets/mysql.jpg'
import postgresql from '../assets/postgresql.png'
import rabbitmq from '../assets/rabbitmq.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {

    const skills_list = [
        {
            id:1,
            src: bootstrap,
            title: "BOOTSTRAP",
            style: 'shadow-purple-900'
        },
        {
            id:2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-800'
        },
        {
            id:1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-600'
        },
        {
            id:1,
            src: docker,
            title: "DOCKER",
            style: 'shadow-blue-500'
        },
        {
            id:1,
            src: fastapi,
            title: "FASTAPI",
            style: 'shadow-emerald-500'
        },
        {
            id:1,
            src: github,
            title: "GITHUB",
            style: 'shadow-black'
        },
        {
            id:1,
            src: gitlab,
            title: "GITLAB",
            style: 'shadow-amber-400'
        },
        {
            id:1,
            src: django,
            title: "DJANGO",
            style: 'shadow-emerald-900'
        },
        {
            id:1,
            src: javascript,
            title: "JAVASCRIPT",
            style: 'shadow-yellow-400'
        },
        {
            id:1,
            src: mysql,
            title: "MYSQL",
            style: 'shadow-orange-400'
        },
        {
            id:1,
            src: postgresql,
            title: "POSTGRESQL",
            style: 'shadow-blue-700'
        },
        {
            id:1,
            src: python,
            title: "PYTHON",
            style: 'shadow-gray-300'
        },
        {
            id:1,
            src: rabbitmq,
            title: "RABBITMQ",
            style: 'shadow-orange-500'
        },
        {
            id:1,
            src: reactImage,
            title: "REACT",
            style: 'shadow-cyan-300'
        },
        {
            id:1,
            src: tailwind,
            title: "TAILWIND",
            style: 'shadow-cyan-600'
        },

    ]
  return (
    <div name = "skills" className='h-fit w-full bg-gradient-to-b from-black to-blue-800 py-20'>
        <div className='max-w-sceen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  text-white '>
            <div className='pb-12'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500 p-2'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center py-8 '>
                {
                    skills_list.map(({id, src, title, style}) => (
                        <div key={id}
                            className={`py-2 shadow-md rounded-lg hover:scale-105 ${style}`}>
                        <img src= {src}
                            alt = ''
                            className='w-24 mx-auto py-6'
                        />
                        <p className='mt-4'>{title}</p>
                    </div>

                    ))

                }

            </div>
        </div>
    </div>
  )
}

export default Skills
{/* <div name = "skills" className='h-fit w-full text-white bg-gradient-to-b from-black to-blue-800 py-20'> */}
// className='h-52 w-full object-cover object-top rounded-md duration-300 hover:scale-105'
