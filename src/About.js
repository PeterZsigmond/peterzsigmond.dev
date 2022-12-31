import './About.scss';

function About() {
  return (
      <div>
        <div className="hero">
          <div className="left">
            <h1>Hi there,<br />I'm <span>Peter Zsigmond!</span></h1>
            <h2>IT Engineer</h2>
            <p>I'm into web development, software development and DevOps.<br />I graduated from university in 2023.</p>
            <button>Check out my Projects</button>
          </div>
          <div className="right">
            asd
            <img src="" />
          </div>
        </div>

        <div className="skills">
          <div className="selector">
            <div className="left">
              <div className="box">
                <p>Tools I Use for Development</p>
              </div>
            </div>
            <div className="right">
              <div className="box">
                <p>Programming Languages I Know</p>
              </div>
            </div>
          </div>

          <div className="elements">

            <div className="element">
              <img src={require("./img/vs-code.png")} alt="VS Code" />
              <p>VS Code</p>
            </div>
            <div className="element">
              <img src={require("./img/git.png")} alt="VS Code" />
              <p>Git</p>
            </div>
            <div className="element">
              <img src={require("./img/aws.png")} alt="VS Code" />
              <p>AWS</p>
            </div>
            <div className="element">
              <img src={require("./img/photoshop.png")} alt="VS Code" />
              <p>Adobe Photoshop</p>
            </div>
            <div className="element">
              <img src={require("./img/figma.png")} alt="VS Code" />
              <p>Figma</p>
            </div>
            <div className="element">
              <img src={require("./img/docker.png")} alt="VS Code" />
              <p>Docker</p>
            </div>
            <div className="element">
              <img src={require("./img/kubernetes.png")} alt="VS Code" />
              <p>Kubernetes</p>
            </div>

          </div>

        </div>
      </div>
  );
}

export default About;
