import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import cv from '../assets/isaac_resume.pdf';

const Resume = () => {

    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages}) {
      setNumPages(numPages);
    }

  return (
    <div
        name='resume'
        className='h-fit w-full bg-gradient-to-b from-black to-blue-800 text-white py-20'
    >
        <div className='max-w-screen-lg mx-auto  h-full px-4 md:flex-row'>
            <div className='flex flex-row pt-8  h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-50'>Resume</p>
                </div>
                <div>
                    <Document file={cv} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                    {/* <p>
                        Page {pageNumber} of {numPages}
                    </p> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume
