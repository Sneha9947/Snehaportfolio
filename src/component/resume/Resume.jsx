import React, { useRef } from 'react';
import "./resume.css";
import image from "../../assests/myresume.jpg"; // Corrected path
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
