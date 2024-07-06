import projectdata from '../data/projectdata.json'
import './AllProjects.css'
export default function AllProjects() {
    const itemArray = Array.from(projectdata);
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>All Projects</h1>
        </div>
        <div className='all-projects'>
        {itemArray.map(item => (
            <div key={item.column1} className='project-holder'>
                
                <h2>{item.nameOfProject}</h2>
                <div className='info'>
                    <h3>Task: </h3>
                    <p>{item.task}</p>
                </div>
                <div className='info'>
                    <h3>Category: </h3>
                    <h3 className='category'>{item.groupings}</h3>
                </div>
                {/*<embed src={item.pictures} className='project-picture'/>*/}
                <div className='info'>
                    <h3>Challenges Encountered: </h3>
                    <p>{item.challenges}</p>
                </div>
                <div className='info'>
                    <h3>Process and Outcome: </h3>
                    <p>{item.outcomeuniqueAdditions}</p>
                </div>
                <div className='info'>
                <h3>Link: </h3>
                {item.resource && (
                    <a href={item.resource} target="_blank" rel="noopener noreferrer">{item.resource}</a>
                    )}
                </div>
                <div className='info'>
                    <h3>Topics Used: </h3>
                    <p>{item.topicsUsed}</p>
                </div>
                
            </div>
        ))}
        
    </div>
    </>
   
)}
  