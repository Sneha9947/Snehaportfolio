import React, { useRef } from 'react';
import "./resume.css";
import image from "../../assests/1729319884272-84ea2eb3-6863-4ea9-a56f-2b0f3119dd38_1.jpg"; // Corrected path
import { GrFormUpload } from "react-icons/gr";
import { useReactToPrint } from 'react-to-print';

const Resume = () => {
    const myref = useRef();

    const downloadPDF = useReactToPrint({
        content: () => {
            console.log(myref.current); // Check what it returns
            return myref.current;
        },
        documentTitle: "resumedata",
        onAfterPrint: () => alert("Print successful")
    });

    return (
        <>
            <div className='resume-page' ref={myref}>
                <div className='view-page'>
                    <img src={image} alt="Resume" />
                </div>

                <div className='download-12345'>
                    <button onClick={downloadPDF}>
                        Download
                        <GrFormUpload className="resume-button" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Resume;
