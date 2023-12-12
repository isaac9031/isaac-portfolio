import React from 'react'

const Contact = () => {
  return (
    <div name = "Contact" className='w-full h-fit bg-gradient-to-b from-black to-blue-500 p-4 py-20 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full'>
            <div className='pb-12'>
                <p className='text-3xl font-bold inline border-b-4 border-gray-500'>Contact Me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/485a1959-acda-4adb-8531-0ad5ba26e702"
                      method="POST"
                      className='flex flex-col w-full md:w-1/2 gap-6'>
                    <div className='flex flex-col'>
                        <span class="text-white font-bold mb-2">Name:</span>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your Name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span class="text-white font-bold mb-2">Email:</span>
                        <input
                            type="text"
                            name="email"
                            placeholder='Your E-mail'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                        />
                    </div>
                    <div className='flex flex-col'>
                        <span class="text-white font-bold mb-2">Message:</span>
                        <textarea
                            name="message"
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            rows = '10'
                            placeholder='Your Message'
                        >
                        </textarea>
                    </div>
                    <button className="text-white bg-gradient-to-r from-cyan-600 to-purple-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
