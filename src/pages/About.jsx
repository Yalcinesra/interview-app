import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate=useNavigate()
  return (
    <div className="container m-5 ">
      <div className="row d-flex  justify-content-center">
        <div className="col-md-7 ">
        <div className="bg-opacity-50">
          <div className="card new p-3 py-4  ">
            <div className="text-center">
              <img
                src="https://avatars.githubusercontent.com/u/140017461?v=4"
                width={200}
                className="rounded-circle"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
             
              <h5 className="mt-2 mb-0">Esra Yalcin</h5>
              <span>Fullstack Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts">
                I am a graduate of Selcuk University Computer Systems teaching and worked as an information technologies teacher for 8 years. While I was learning C++ and Java programming languages during my university education, I also learned to use important web development tools such as HTML, CSS and Photoshop.

Throughout my career, I have gained various experiences in computer technologies and computing. I worked as an IT leader at Deutsches Rotes Kreuz for 6 months, during which I was responsible for managing and developing the technology infrastructure.
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                <a className=" contact text-decoration-none" href="www.linkedin.com/in/esra--yalcin">
                  <i className="fa-brands fa-linkedin" /></a>
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4" onClick={() => navigate("/contact")}>
                 
                    Message
                  
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/Yalcinesra"

                    target="true">
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
