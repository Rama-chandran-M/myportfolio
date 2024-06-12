import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  // Dummy data for demonstration
  const udemycertificates = [
    {id:'1',imageUrl:'/Certificates/Udemy Web Development.jpg',description:'The Complete 2023 Web Development Bootcamp'},
  ]
  const skillrackcertificates = [
    {id:'1', imageUrl:'/Certificates/SkillRack - Python certificate .png',description:'Python 3.x - Programming Course'},
    {id:'2', imageUrl:'/Certificates/SkillRack - Java 50 Easy Challenges.png',description:'Java 50 Easy Challenges'},
    {id:'3', imageUrl:'/Certificates/Java 50 Average Challenges.png',description:'Java 50 Average Challenges'},
    {id:'4', imageUrl:'/Certificates/SkillRack - SQL Certificate.png',description:'SQL - Basics(Standard)'},
  ]
  const ciscocertificates = [
    {id:'1', imageUrl:'/Certificates/Introduction to Networks.png', description:'CCNAv7 : Introduction to Networks'},
    {id:'2', imageUrl:'/Certificates/Introduction to Cybersersecurity.png', description:'Introduction to Cybersecurity'},
    {id:'3', imageUrl:'/Certificates/Introduction to Packet Tracer.png', description:'Introduction to Packet Tracer'},
    {id:'4', imageUrl:'/Certificates/Cybersecurity Essentials.png', description:'Cybersecurity Essentials'},
    {id:'5', imageUrl:'/Certificates/Cybersecurity Essentials (Internship).png', description:'Cybersecurity Essential (Internship Course)'},
    {id:'6', imageUrl:'/Certificates/Networking Essentials (Internship).png', description:'Networking Essentials (Internship Course)'},
  ]
  const certificates = [
    { id: 1, imageUrl: '/Certificates/Developing Backend Apps.png', description: 'Developing Backend Apps with Node.js and Express' },
    { id: 2, imageUrl: '/Certificates/Machine Learning Introduction.png', description: 'Machine Learning Introduction for Everyone' },
    { id: 3, imageUrl: '/Certificates/Supervised Machine Learning.png', description: 'Supervised Machine Learning : Regression' },
    { id: 4, imageUrl: '/Certificates/Exploratory Data Analysis.png', description: 'Exploratory Data Analysis for Machine Learning' },
    { id: 5, imageUrl: '/Certificates/Data Data Everywhere.png', description: 'Foundation : Data, Data, Everywhere' },
    { id: 6, imageUrl: '/Certificates/Introduction to Cybersecurity.png', description: 'Introduction to Cybersecurity Tools & CyberAttacks' },
    { id: 7, imageUrl: '/Certificates/Cybersecurity Roles.png', description: 'Cybersecurity Roles, Processes & Operating System Security' },
    { id: 8, imageUrl: '/Certificates/Cyber Attacks.png', description: 'Introduction to Cyber Attacks' },
    { id: 9, imageUrl: '/Certificates/AWS Certified Solution.png', description: 'Exam Prep : AWS Certified Solutions Architect - Associate' },
    { id: 10, imageUrl: '/Certificates/Excel Fundamentals.png', description: 'Excel Fundamentals for Data Analysis' },
    { id: 11, imageUrl: '/Certificates/Data Visulaization.png', description: 'Data Visualization in Excel' },
  ];
  
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
  }

  const closeImage = () => {
    setSelectedImage(null);
  }

  return (
    <div>
      <h1 className="certificates-title">Udemy Certificates</h1>
      <div className="udemycertificates-container">
        {udemycertificates.map(certificate=>(
            <div key={certificate.id} className="certificate-box">
                <img
                    src={certificate.imageUrl}
                    alt="Certificate"
                    className="certificate-image"
                    onClick={()=>openImage(certificate.imageUrl)}
                />
                <p className='certificate-description'>{certificate.description}</p>
            </div>
        ))}
      </div>
      <h1 className="certificates-title">SkillRack Certificates</h1>
      <div className="skillrackcertificates-container">
        {skillrackcertificates.map(certificate=>(
            <div key={certificate.id} className="certificate-box">
                <img
                    src={certificate.imageUrl}
                    alt="Certificate"
                    className="certificate-image"
                    onClick={()=>openImage(certificate.imageUrl)}
                />
                <p className='certificate-description'>certificate.description</p>
            </div>
        ))}
      </div>
      <h1 className='certificates-title'>Cisco Certificates</h1>
      <div className='ciscocertificates-container'>
        {ciscocertificates.map(certificate=>(
          <div key={certificate.id} className='certificate-box'>
            <img
              src={certificate.imageUrl}
              alt="certificate"
              className="certificate-image"
              onClick={()=>openImage(certificate.imageUrl)}
            />
            <p className='certificate-description'>{certificate.description}</p>
          </div>
        ))}
      </div>
      <h1 className='certificates-title'>Coursera Certificates</h1>
      <div className="certificates-container">
        {certificates.map(certificate => (
          <div key={certificate.id} className="certificate-box">
            <img
              src={certificate.imageUrl}
              alt="Certificate"
              className="certificate-image"
              onClick={() => openImage(certificate.imageUrl)}
            />
            <p className="certificate-description">{certificate.description}</p>
          </div>
        ))}
        {selectedImage && (
          <div className="image-popup" onClick={closeImage}>
            <img src={selectedImage} alt="Selected Certificate" className="popup-image" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificates;
