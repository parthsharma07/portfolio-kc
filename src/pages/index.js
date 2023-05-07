import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am an experienced developer with good work experience in mobile and web development fields.
            I also love to contribute towards coding community and have demonstrated leadership skills by
            being one of the founding members of the developers' club of my college NIT Patna and the first technical
            lead of DSC NIT Patna.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Paytm</div>
              <p>
                Working with the backend team of Paytm Motor Insurance and currently responsible
                for modifying and developing different APIs for motor-insurance-backend project.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2022 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SWE Intern</h3>
              <div className="subheading mb-3">Paytm</div>
              <p>
                Worked with the backend team of Paytm Motor Insurance and wrote unit tests
                for different layers of the application and also did modification of some APIs
                of motor-insurance-backend project.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2022 - June 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SDE Intern</h3>
              <div className="subheading mb-3">Dresma</div>
              <p>
                Developed the Android app for the company in order to facilitate production
                of high quality images for sellers who sell their products on e-commerce
                websites.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2021 - September 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SDE Intern</h3>
              <div className="subheading mb-3">CoalShastra</div>
              <p>
                Developed the iOS app for the company in order to facilitate online
                coal trade within and outside India. It can be used by both coal sellers as well
                as buyers.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">November 2020 - July 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">SDE Intern</h3>
              <div className="subheading mb-3">Shoes On Loose</div>
              <p>
                Developed multiple products (website and mobile app) for the clients of the
                company mainly using React framework.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2020 - November 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">App Developer Intern</h3>
              <div className="subheading mb-3">Rydo</div>
              <p>
                Developed an android app for the company which aimed at helping street vendors by providing them
                a better reach to the consumers in order to increase their sales. There is a separate app for vendors
                as well as for consumers which meets their specific needs accordingly.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Technical Lead</h3>
              <div className="subheading mb-3">Developer Student Clubs NIT Patna</div>
              <p>
                Responsible for managing all the technical activities and projects of the DSC
                chapter of National Institute of Technology Patna.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2020 - June 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Secretary</h3>
              <div className="subheading mb-3">HackSlash Club NIT Patna</div>
              <p>
                Responsible for managing the administration and internal affairs of the HackSlash
                develpers' club of National Institute of Technology Patna.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2020 - June 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Web Developer</h3>
              <div className="subheading mb-3">SAC Council NIT Patna</div>
              <p>
                Responsible for developing the website of hackNITP 2.0, the annual hackathon of
                National Institute of Technology Patna.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">December 2019 - January 2020</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">National Institute of Technology, Patna</h3>
              <div className="subheading mb-3">Bachelor of Technology</div>
              <div>Computer Science and Engineering</div>
              <p>CGPA: 8.55</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 - June 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Vindhyachal Academy</h3>
              <div className="subheading mb-3">High School</div>
              <p>Percentage: 92.6%</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2016 - April 2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-cuttlefish"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-angular"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-android"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-app-store-ios"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Mobile Development, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Web Development, Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Machine Learning
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Natural Language Processing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a developer, I enjoy playing cricket with my friends
            in my free time. I am a travelling enthusiast and never miss an opportunity
            to travel to a new place whenever I get a chance.
          </p>
          <p className="mb-0">
            When forced indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows and also enjoy watching web series.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Google Cloud Platform - Google Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Joy of Computing using Python - NPTEL Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Software Testing - NPTEL Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Data Analytics with Python - NPTEL Certification
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>1<sup>st</sup>
              Place - UI/UX Design Competition 2020 - National Institute of Technology Patna
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>5<sup>th</sup>
              Place - Version Beta Hackathon 2019 - National Institute of Technology Bhopal
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>5<sup>th</sup>
              Place - hackNITP 1.0 Hackathon 2019 - National Institute of Technology Patna
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd</sup>
              Place - Inter School Science Model Making Competition 2018 - Prestige Institute Dewas
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
