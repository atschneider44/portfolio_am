import { TypeAnimation } from 'react-type-animation';
import projectData from "./projectsData.json";
import Project from "../components/Project.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from '../components/Footer';
import "./css/MyProjects.css"

const MyProjects = () => {
  const ProjectList = () =>
    projectData.map((project, i) => (
      <Project
        key={i}
        id={project.id}
        title={project.title}
        technologies={project.technologies}
        image={project.image}
        color={project.bgcolor}
        github={project.github}
        deployed={project.deployed}
        description={project.description}
        year={project.year}
      />
    ));

  return (
  <div>
    <Navbar></Navbar>
    <section className="portfolio">
      <div className="projects-title">
      <TypeAnimation
      sequence={[
        1000,
        'My Projects',
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
      </div>
      <div className="row">
        <ProjectList />
      </div>
    </section>
    <Footer></Footer>
    </div>
  );
};

export default MyProjects;