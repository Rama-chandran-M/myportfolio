import React from 'react';
import './About.css';

const Home = () => {
  return (
    <div className="content">
      <div className="photo-container">
        <img src="/images/Photograph.jpg" alt="Ramachandran M" className="photo"/>
      </div>
      <div className="about-note">
        <h2>About Me</h2>
        <p>
          Hi, I'm Ramachandran M. I am a pre-final year student pursuing a degree in Computer Science Engineering,
          passionately working towards a career as a Full Stack Developer. With a solid foundation in both front-end
          and back-end technologies, I am dedicated to building dynamic and responsive web applications. My academic
          journey has been complemented by hands-on projects and internships, allowing me to hone my skills and stay
          abreast of the latest industry trends. I am committed to continuous learning and improvement, striving to
          contribute effectively to innovative and impactful development projects.
        </p>
      </div>
    </div>
  );
}

export default Home;
