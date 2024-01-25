// import React from 'react'
// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';
// import cv from '../assets/isaac_resume.pdf';

// const Resume = () => {

//     const screenWidth = window.innerWidth;

//     const [numPages, setNumPages] = useState();
//     const [pageNumber, setPageNumber] = useState(1);

//     function onDocumentLoadSuccess({ numPages}) {
//       setNumPages(numPages);
//     }

//   return (
//     <div
//         name='resume'
//         className='h-fit w-full bg-gradient-to-b from-black to-blue-800 text-white py-20'
//     >
//         <div className='max-w-screen-lg mx-auto flex flex-col justify-center h-full p-4'>
//             <div className='pb-12'>
//                 <p className='text-3xl sm:text-5xl font-bold text-purple-500'>Resume</p>
//             </div>
//             <div className='max-w-full overflow-hidden p-4 sm:p-10'>
//                 <Document file={cv}
//                     onLoadSuccess={onDocumentLoadSuccess}
//                     className= "object-contain w-full max-w-screen-sm "
//                     >
//                     <Page pageNumber={pageNumber} renderTextLayer={false} renderAnnotationLayer={false} />
//                 </Document>
//                 {/* <p>
//                     Page {pageNumber} of {numPages}
//                 </p> */}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Resume
