import {useState, useEffect} from 'react';

function Projects(props) {
    const [projects, setProjects] = useState(null);

    const getProjectsData = async () => {
        const response = await fetch("./projects.json");
        console.log(response)
        const data = await response.json();
        setProjects(data)
    };
    useEffect(() => getProjectsData(), []);

    const loaded = () =>{
        return projects.map((project) => (
            <div className="projects">
                <h1>{project.name}</h1>
                <p>{project.description}</p>
                <img src={project.image} />
                <a href={project.git}>
                    <button className="button-1">Github</button>
                </a>
                <a href={project.live}>
                    <button className="button-2">live site</button>
                </a>
            </div>
        ));
    };
    return projects ? loaded() : <h1>Loading...</h1>
  }
  
  export default Projects;