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
              <h3 className="mb-0">Framework Engineer</h3>
              <div className="subheading mb-3">Quantiphi Analytics Solution</div>
              <p>
              Currently working as a Framework Engineer and working in Insurance project to perform data ingestion, data
              transformation and storing of data. Also worked on ingesting data, creating model, transforming data and generating user
              friendly reports.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">July 2022 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Framework Engineer Intern</h3>
              <div className="subheading mb-3">Quantiphi Analytics Solution</div>
              <p>
              I have done my 6 month internship in this organization and got exposure to various technologies. Worked on data
              ingestion, transformation and storing of data.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2022 - June 2022</span>
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
              <h3 className="mb-0">Institute of Engineering And Technology, DAVV</h3>
              <div className="subheading mb-3">Bachelor of Engineering</div>
              <div>Computer Science and Engineering</div>
              <p>CGPA: 9</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2018 - June 2022</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Vindhyachal Academy</h3>
              <div className="subheading mb-3">High School</div>
              <p>Percentage: 95.8%</p>
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
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-cuttlefish"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
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
              Agile Development
            </li>
          </ul>

          <div className="subheading mb-3">Other Technical Skills</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Power BI
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              IICS
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Snow Flake
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              ETL
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
              Machine Learning - Stanford University
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Machine learning and Data Science Bootcamp
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>Achieved 5 star rating in Python on Hacker Rank
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>2<sup>nd </sup>
              positionin district in PCM stream in class XII. 
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>Dynamo award winner in the FSI unit in Quantiphi.
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
