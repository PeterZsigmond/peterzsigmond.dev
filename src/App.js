import './App.scss';

function App() {
  return (
    <div>
      <div className="sidebar">
        <p className="title">peterzsigmond.dev</p>

        <div className="menu">
          <div className="element">
            <img src="" />
            <p>About</p>
          </div>
          <div className="element">
            <img src="" />
            <p>Projects</p>
          </div>
          <div className="element">
            <img src="" />
            <p>Contact</p>
          </div>
          <div className="element">
            <img src="" />
            <p>Cheatsheet</p>
          </div>
        </div>

      </div>

      <div className="main">
        <div className="hero">
          <div className="left">
            <h1>Hi there, I'm Peter Zsigmond!</h1>
            <h2>IT Engineer</h2>
            <p>I'm into web development, software development and DevOps. I graduated from university in 2023.</p>
            <button>Check out my Projects</button>
          </div>
          <div className="right">
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
