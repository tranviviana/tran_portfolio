import React from "react";
import myResume from "../images/generalImages/tranviviana.pdf";


export default function Resume() {
    return (
        <>
        <h2>Experience In A Glance</h2>
        <div className="resume-div">
        <embed src={myResume} className='resume'/>
        </div>
        </>
    );
}
