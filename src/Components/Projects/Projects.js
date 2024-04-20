import './Projects.scss';

function Projects() {

	const projects = [
		{
			img: 'salesforce-certification',
			title: 'Salesforce Certification',
			desc: 'I got Salesforce certified as a Platform Developer I.',
			date: 'August, 2023'
		},
		{
			img: 'peterzsigmond.dev',
			title: 'peterzsigmond.dev',
			desc: 'This is my personal portfolio website. I made it in React, and used other tools like Sass and Docker.',
			date: 'March, 2023',
			link_text: 'GitHub',
			link: 'https://github.com/PeterZsigmond/peterzsigmond.dev'
		},
		{
			img: 'peterzsigmondOS',
			title: 'peterzsigmondOS',
			desc: 'A very basic x86 OS. It includes some images and a terminal, ' +
				'where the users can write their own hex coded x86 instructions, which the OS can then run. ' +
				'Theoretically, with this terminal, any task can be done on a computer.\n\n' +
				'I learned a lot about how the x86 architecture works.',
			date: 'February, 2023',
			link_text: 'GitHub',
			link: 'https://github.com/PeterZsigmond/peterzsigmondOS'
		},
		{
			img: 'kubeflow',
			title: 'Bachelor\'s thesis',
			desc: 'Title: Management of machine learning application on a distributed container platform\n\n' +
				'While making my bachelor\'s thesis, I gained experiences with Machine Learning, Container orchestration, Automatization, Cloud services, etc. ' +
				'I used Kubeflow as a ML workflow toolset, that runs on Kubernetes.',
			date: 'December, 2022'
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
							<p className="desc">{project.desc}</p>
							<p className="date">{project.date}</p>
							{!project.link ||
								<a href={project.link} target="_blank" rel="noreferrer">{project.link_text} <i className="icon bi-box-arrow-up-right"></i></a>
							}
						</div>
					);
				})}
			</div>

		</div>
	);
}

export default Projects;