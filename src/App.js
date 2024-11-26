import github from './images/github-mark.svg'
import linkedin from './images/linkedin-mark.svg'
import youtube from './images/youtube-mark.svg'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProjectDetail from './components/ProjectDetail';


// CUSTOM
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Navbar from './components/Navbar';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">

        <Routes>
          <Route>
            <Route path="/"         element={ <Home />      }/>
            <Route path="/Projects"  element={ <Projects />  }/>
            <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Add this line */}
            <Route path="/WorkExperience"    element={ <WorkExperience />     }/>
            <Route path="/About"    element={ <About />     }/>
          </Route>
        </Routes>
      </div>
      <div>
          <a
            className="App-link"
            href="https://github.com/pbrush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} className="github-svg" alt="git" />
          </a>

          <a
            className="App-link"
            href="https://github.com/pbrush"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} className="linkedin-svg" alt="li" />
          </a>

          <a
            className="App-link"
            href="https://www.youtube.com/@philb_7009"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} className="youtube-svg" alt="yt" />
          </a>
        </div>
        <div>
          <p>
            &copy; 2024 Phillip Brush | Contact: pdbrush33@comcast.net or (978) 831-7440
            </p>
        </div>
    </div>
  );
}

export default App;
