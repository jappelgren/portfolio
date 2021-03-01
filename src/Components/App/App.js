import { useSelector } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from '../About/About';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import ProjectBlock from '../ProjectBlock/ProjectBlock.js';
import './App.css';

function App() {
  const projectReducer = useSelector(state => state.projectReducer);
  const gg = projectReducer[0];
  console.log(gg);

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <Menu />
        </Route>
        {projectReducer.map((project) => {
          return (
            <Route exact path={project.link}>
              <ProjectBlock
                body={project.body}
                projectName={project.name}
                photo={project.photo}
                githubUrl={project.githubUrl}
                featuredImg={project.featuredImg}
                youtube={project.youtube}
              />
            </Route>
          );
        })}
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
