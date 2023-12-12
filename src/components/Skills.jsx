import React from 'react'
import css from '../assets/css.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import docker from '../assets/docker.png'
import bootstrap from '../assets/bootstrap.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import django from '../assets/django.png'
import fastapi from '../assets/fastapi.png'
import github from '../assets/github.png'
import gitlab from '../assets/gitlab.png'
import mysql from '../assets/mysql.png'
import postgresql from '../assets/postgresql.png'
import rabbitmq from '../assets/rabbitmq.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {

    const skills_list = [
        {
            id:1,
            src: bootstrap,
            title: "Bootstrap",
            style: 'shadow-purple-900'
        },
        {
            id:2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-800'
        },
        {
            id:4,
            src: html,
            title: "HTML",
            style: 'shadow-orange-600'
        },
        {
            id:5,
            src: docker,
            title: "Docker",
            style: 'shadow-blue-500'
        },
        {
            id:6,
            src: fastapi,
            title: "FastAPI",
            style: 'shadow-emerald-500'
        },
        {
            id:7,
            src: github,
            title: "Github",
            style: 'shadow-black'
        },
        {
            id:8,
            src: gitlab,
            title: "Gitlab",
            style: 'shadow-amber-400'
        },
        {
            id:9,
            src: django,
            title: "Django",
            style: 'shadow-emerald-900'
        },
        {
            id:10,
            src: javascript,
            title: "JavaScript",
            style: 'shadow-yellow-400'
        },
        {
            id:11,
            src: mysql,
            title: "MySQL",
            style: 'shadow-gray-300'
        },
        {
            id:12,
            src: postgresql,
            title: "PostgreSQL",
            style: 'shadow-blue-700'
        },
        {
            id:13,
            src: python,
            title: "Python",
            style: 'shadow-gray-300'
        },
        {
            id:14,
            src: rabbitmq,
            title: "RabbitMQ",
            style: 'shadow-orange-500'
        },
        {
            id:15,
            src: reactImage,
            title: "React",
            style: 'shadow-cyan-300'
        },
        {
            id:16,
            src: tailwind,
            title: "Tailwind CSS",
            style: 'shadow-cyan-600'
        },

    ]
  return (
    <div name = "skills" className='h-fit w-full bg-gradient-to-b from-black to-blue-800 py-20'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full text-white '>
            <div className='pb-12'>
                <p className='text-3xl font-extra inline border-b-4 border-gray-500 p-2'>Skills</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 sm:px-0 text-center py-8 '>
                {
                    skills_list.map(({id, src, title, style}) => (
                        <div key={id}
                            className={`py-2 shadow-md font-bold rounded-lg hover:scale-105 duration-500 ${style}`}>
                            <img src= {src}
                                alt = ''
                                className='w-20 mx-auto py-6'
                            />
                            <p className='mt-4'>{title}</p>
                        </div> ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Skills
// {/* <div name = "skills" className='h-fit w-full text-white bg-gradient-to-b from-black to-blue-800 py-20'> */}
// className='h-52 w-full object-cover object-top rounded-md duration-300 hover:scale-105'
