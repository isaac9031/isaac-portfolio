import React from 'react'

const Contact = () => {
  return (
    <div>
        <div>
            <div>
                <p>Contact Me</p>
            </div>
            <div>
                <form action="">
                    <input
                        type="text"
                        name="name"
                        placeholder='Your Name'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                     <input
                        type="text"
                        name="email"
                        placeholder='Your E-mail'
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea
                        name="message"
                        className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    />
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
