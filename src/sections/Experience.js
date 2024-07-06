import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Experience() {
    return (
        <>
        <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
        <h1 id='experience' >Experience</h1>
        </div>
        <h4 style={{marginLeft: '1rem'}}>***The most recent 5 positions</h4>

    <VerticalTimeline lineColor='var(--blue2black)'>
    <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--blue2black)'}}
    contentArrowStyle={{ borderRight: '7px solid  var(--blue2black' }}
    date="May 2024 - Present"
    iconStyle={{ background: 'var(--blue2black)' }}
   
  >
    <h3 className="vertical-timeline-element-title">Communications Chair - Computer Science Mentors</h3>
    <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
    <p>
      Manage 2-way communication between 500+ student and club members via email and slack. Conduct data analysis on student applications and club members for diversity, merit, and experience during recruitment and feedback periods via Jupyter notebook and Google Sheets.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--black2white)'}}
    contentArrowStyle={{ borderRight: '7px solid  var(--black2white' }}
    date="January 2023 - Present"
    iconStyle={{ background: 'var(--black2white)' }}
   
  >
    <h3 className="vertical-timeline-element-title" style={{color: 'var(--white2blue)'}}>Code Coach - theCoderSchool</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{color: 'var(--white2blue)'}}>Berkeley, CA and Corona, CA</h4>
    <p style={{color: 'var(--white2blue)'}}>
      Guide and teach students aged 6-14 in the fundamentals of programming and design iteration in languages like Scratch and Python. Developed adaptive, project-based curriculum for students.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--blue2black)'}}
    contentArrowStyle={{ borderRight: '7px solid  var(--blue2black' }}
    date="December 2023 - May 2024"
    iconStyle={{ background: 'var(--blue2black)' }}
   
  >
    <h3 className="vertical-timeline-element-title">Startup Spring Committee Member - Society of Women Engineers</h3>
    <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
    <p>
      Collaborated with a team of 8 to host monthly events for student professional development including tea sessions with professors, mixers, and lecturers. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--black2white)'}}
    contentArrowStyle={{ borderRight: '7px solid  var(--black2white' }}
    date="December 2023 - May 2024"
    iconStyle={{ background: 'var(--black2white)' }}
   
  >
    <h3 className="vertical-timeline-element-title" style={{color: 'var(--white2blue)'}}>Front-End Technology Mentor - Computer Science Mentors</h3>
    <h4 className="vertical-timeline-element-subtitle" style={{color: 'var(--white2blue)'}}>Berkeley, CA</h4>
    <p style={{color: 'var(--white2blue)'}}>
      Designed coordinator perspective interface for Berkeley's Computer Science Mentors' website through Figma. Worked with one other front-end developer and one back-end developer to create custom components for interface. Integrated custom output table that filters club members by inputted search query using back-end API's, tsx, and css.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'var(--blue2black)'}}
    contentArrowStyle={{ borderRight: '7px solid  var(--blue2black' }}
    date="August 2023 - Present"
    iconStyle={{ background: 'var(--blue2black)' }}
   
  >
    <h3 className="vertical-timeline-element-title">Senior Mentor - Computer Science Mentors</h3>
    <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
    <p>
      Lead a team of 5 mentors to teach Berkeley's EECS 16A curriculum and provide technical and social support through digital resources, weekly meetings, and monthly socials. Also, taught my own discussion section, guiding Berkeley students through the technical and practical applications of the EECS 16A (introduction to circuits and linear algebra) curriculum via review sheets, on-demand support, and meetings.
    </p>
  </VerticalTimelineElement>

 

  
  
    </VerticalTimeline>
        </>
    )
}