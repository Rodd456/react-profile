import React from "react";
import profileImg from '../../images/profile.png'

const AboutMe = () => {
  return (
    <div>
      <div className="about-container">
        <h1 className="text-center name-header">Rodney Major</h1>
        <div className="content-container">
          <div className="text-container">
            <h4 className="about-text">
              As a driven web developer, I'm eager to enhance my proficiency and
              technical aptitude. I am a flexible communicator who can cooperate
              efficiently with colleagues from diverse cultural backgrounds.
              <br />
              <br />
              During my participation in the Full Stack Web Development Bootcamp
              at Georgia Tech, I acquired practical skills in developing full-stack
              web applications and collaborated with my team to deliver excellent
              websites within tight deadlines.
              <br />
              <br />
              I am excited to utilize my expertise and knowledge to tackle fresh
              opportunities in the realm of web development.
            </h4>
          </div>
          <div className="image-container">
            <img src={profileImg} alt="profile image" className="profile-image" />
          </div>
        </div>
      </div>
      <footer className="footer">
        <a href="https://github.com/Rodd456">GitHub</a>
      </footer>
      <style type='text/css'>{`
        .about-container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .name-header {
          margin-top: 40px;
          font-size: 75px;
        }

        .content-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          width: 90%;
          margin-top: 30px;
        }

        .text-container {
          width: 80%;
          margin-right: 100px;
        }

        .about-text {
          text-align: left;
          margin: 0;
        }

        .image-container {
          width: 35%;
        }

        .profile-image {
          width: 100%;
        }

        .footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
        }

        .footer a {
          text-decoration: none;
          font-size: 18px;
        }
      
        .footer a:hover {
        }
      `}</style>
    </div>
  )
}

export default AboutMe;
