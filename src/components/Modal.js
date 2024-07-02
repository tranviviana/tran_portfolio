import React from "react";

export default function Modal({ open_text, closed_image }) {
    return (
        <div>
            <button data-modal-target="#modal">
                <img src={closed_image} alt="Closed Modal" />
            </button>
            <div className="modal" id="modal">
                <div className="modal-header">
                    <div className="title">URL</div>
                    <button data-close-button className="close-button">&times;</button>
                </div>
                <div className="modal-body">
                    {open_text}
                    <a href={open_text} target="_blank" rel="noopener noreferrer">
                        <button>Send Me There</button>
                    </a>
                </div>
            </div>
            <div id="overlay"></div>
        </div>
    );
}