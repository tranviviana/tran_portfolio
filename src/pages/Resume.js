import React from "react";
import myResume from "../images/generalImages/tranviviana.pdf";
import "./Resume.css";

export default function Resume() {
    return (
        <div className="resume-container">
            <div>
                <h2>Experience In A Glance</h2>
            </div>
            <div className="resume-div">
                <object data={myResume} type="application/pdf" className="Resume" width="100%" height="600">
                    <p>This browser does not support PDFs. Please <a href={myResume} download>download the file</a> to view it.</p>
                </object>
            </div>
        </div>
    );
}