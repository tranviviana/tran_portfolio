import React from "react";
import myResume from "../images/generalImages/tranviviana.pdf";

export default function Resume() {
    return (
        <>
        <div className="resume-container">
        <div>
        <h2>Experience In A Glance</h2>
        </div>
        <div className="resume-div">
        <embed src={myResume} className='resume'/>
        </div>
        </div>
        </>
    );
}
