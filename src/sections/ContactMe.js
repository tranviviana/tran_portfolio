import React from 'react';
import './ContactMe.css';
import gmail from '../images/contactMe/gmail.png';
import linkedin from '../images/contactMe/linkedin.png';
import github from '../images/skills/github.png';
import Modal from '../components/Modal';

{/*modal with url and then click on to send*/}
export default function ContactMe() {
    return (
        <>
        <h1>Contact Me</h1>
        <div className='ContactModals'>
            <Modal open_text='tranviviana@berkeley.edu' closed_image={gmail} link_text='mailto:tranviviana@berkeley.edu' />
            <Modal open_text='https://www.linkedin.com/in/viviana-tran' closed_image={linkedin} link_text='https://www.linkedin.com/in/viviana-tran' />
            <Modal open_text='https://github.com/tranviviana' closed_image={github} link_text='https://github.com/tranviviana'/>
        </div>
        </>
    )
}
