import { Link } from "react-router-dom";
import { useState } from 'react';
import './About.scss';

function About() {

  let skills = [
    [
      {name: 'VS Code', img: 'vs-code'},
      {name: 'Git', img: 'git'},
      {name: 'Photoshop', img: 'photoshop'},
      {name: 'Figma', img: 'figma'},
      {name: 'Docker', img: 'docker'},
      {name: 'Kubernetes', img: 'kubernetes'},
      {name: 'AWS', img: 'aws'}
    ],
    [
      {name: 'Assembly', img: 'asm'},
      {name: 'C', img: 'c'},
      {name: 'C++', img: 'cpp'},
      {name: 'C#', img: 'c-sharp'},
      {name: 'Java', img: 'java'},
      {name: 'PHP', img: 'php'},
      {name: 'JavaScript', img: 'js'},
      {name: 'Python', img: 'python'},
      {name: 'SQL*', img: 'sql'}
    ]
  ];
  
  const [skill, setSkill] = useState(0);

  let elements = skills[skill];

  return (
      <div>
        <div className="hero">
          <div className="left">
            <h1>Hi there,<br />I'm <span>Peter Zsigmond!</span></h1>
            <h2>IT Engineer</h2>
            <p>I'm into web development, software development and DevOps.<br />I graduated from university in 2023.</p>
            <Link to="/projects"><button>Check out my Projects</button></Link>
          </div>
          <div className="right">
            <div className="circle">
              <img src={require("../../Images/peterzsigmond/peterzsigmond.png")} alt="Peter Zsigmond" />
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="selector">
            <div className="left">
              <div className={"box" + (skill === 0 ? ' active': '')} onClick={() => setSkill(0)}>
                <p>Tools I Use for Development</p>
              </div>
            </div>
            <div className="right">
              <div className={"box" + (skill === 1 ? ' active': '')} onClick={() => setSkill(1)}>
                <p>Programming Languages I Know</p>
              </div>
            </div>
          </div>

          <div className="elements">

          {elements.map((element, index) => {
              return (
                <div className="element" key={index}>
                  <img src={require("../../Images/skills/" + element.img + ".png")} alt={element.name} />
                  <p>{element.name}</p>
                </div>
              );
          })}

          </div>

        </div>
      </div>
  );
}

export default About;
