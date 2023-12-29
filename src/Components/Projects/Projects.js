import './Projects.scss';

function Projects() {

	let projects = [
		{
			img: 'kubeflow',
			title: 'Bachelor\'s thesis',
			desc: 'Title: Management of machine learning application on a distributed container platform\n\n' +
				'While making my bachelor\'s thesis, I gained experiences with Machine Learning, Container orchestration, Automatization, Cloud services, etc. ' +
				'I used Kubeflow as a ML workflow toolset, that runs on Kubernetes.',
			link_text: 'Document',
			link: 'https://bit.ly/3XIB6pl'
		},
		{
			img: 'peterzsigmondOS',
			title: 'peterzsigmondOS',
			desc: 'A very basic x86 OS. It includes some images and a terminal, ' +
				'where the users can write their own hex coded x86 instructions, which the OS can then run. ' +
				'Theoretically, with this terminal, any task can be done on a computer.\n\n' +
				'I learned a lot about how the x86 architecture works.',
			link_text: 'GitHub',
			link: 'https://github.com/PeterZsigmond/peterzsigmondOS'
		},
		{
			img: 'peterzsigmond.dev',
			title: 'peterzsigmond.dev',
			desc: 'This is my personal portfolio website. I made it in React, and used other tools like Sass and Docker.',
			link_text: 'GitHub',
			link: 'https://github.com/PeterZsigmond/peterzsigmond.dev'
		}
	];

	return (
		<div className="projects">
			<h1>My projects</h1>

			<div className="cards">
				{projects.map((project, index) => {
					return (
						<div className="card" key={index}>
							<div className="image">
								<img src={require("../../Images/projects/" + project.img + ".png")} alt={project.title} />
							</div>
							<h3>{project.title}</h3>
							<p>{project.desc}</p>
							<a href={project.link} target="_blank" rel="noreferrer">{project.link_text} <i className="icon bi-box-arrow-up-right"></i></a>
						</div>
					);
				})}
			</div>

		</div>
	);
}

export default Projects;