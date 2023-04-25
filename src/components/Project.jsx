import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Modal from "react-modal";
import { useState } from "react";
import close from "../images/close.png";
import projectData from "../pages/projectsData.json";
//Icons
import { IoMdClose } from "react-icons/io";



  
const Project = ({ technologies, title, image, color, id, github, deployed, description, year, documentation }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });



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
  

  const variants = {
    hidden: { x: id % 2 === 0 ? "10vw" : "-10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <motion.div
      ref={ref}
      className="col-sm-12 col-lg-6"
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        style={{ backgroundColor: color }}
        className="projectCard d-flex align-items-center justify-content-center p-5"
        onClick={handleOpenModal}
      >
        <div className="textWrap col-6 d-flex flex-column justify-content-center align-items-center m-5">
          <p className="tech">
            <em>{technologies}</em>
          </p>
          <h3 className="projectTitle">{title}</h3>
          <p className="tech">
            <em>{year}</em>
          </p>
          <span className="viewWork">Read more &#8594;</span>
        </div>
        <div className="imageContainer col-6 d-flex align-items-center justify-content-center">
          <img src={image} alt="Project" />
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            backgroundColor: "#101010",
            color: "#9f9f9f",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            width: "33vw",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
            overflow: "hidden"
          },
        }}
      >
        <img src={close} className="closeMenu closeModal" onClick={handleCloseModal} alt="Close"></img>
        <h3 className="modalTitle">{title}</h3>
        <p className="projectDescription">{description}</p>
    <div>
     
    </div>
        <button className="button-projects" onClick={() => (window.location.href = github)}>
          Github
        </button>
        <button className="button-projects" onClick={() => (window.location.href = deployed)}>
          Final Product
        </button>
        <button className="button-projects" onClick={() => (window.location.href = documentation)}>
          Documentation
        </button>
      </Modal>
    </motion.div>
  );
};

export default Project;