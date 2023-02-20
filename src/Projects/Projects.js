import './Projects.scss';

function Projects() {

    let projects = [
            {
                  img: 'peterzsigmondOS',
                  title: 'peterzsigmondOS',
                  desc: 'A very basic x86 OS. It includes some images, and a terminal, where the users can write their own hex coded x86 instructions, which then the OS can run. Theoretically, with this terminal, any task can be done on a computer. Link: https://github.com/PeterZsigmond/peterzsigmondOS'
            },
            {
                  img: 'peterzsigmond.dev',
                  title: 'peterzsigmond.dev',
                  desc: 'This personal portfolio webpage. It was made in React.'
            },
            {
                  img: 'peterzsigmond-thesis',
                  title: 'Bachelor\'s thesis',
                  desc: 'My bachelor\'s thesis, titled: Management of machine learning application on a distributed container platform. Link: https://bit.ly/3XIB6pl'
            }
    ];

    return (
          <div className="projects">
            <h1>My projects</h1>

            <div className="cards">
                  {projects.map((project, index) => {
                        return (
                              <div className="card" key={index}>
                                    <img src={require("../img/projects/" + project.img + ".png")} alt={project.title} />
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                              </div>
                        );
                  })}
            </div>

          </div>
    );
}
  
export default Projects;
  