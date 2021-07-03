import React, { Component } from "react";
import { Icon } from "@iconify/react";
import bootstrapIcon from '@iconify/icons-logos/bootstrap';
import reactIcon from "@iconify/icons-logos/react";
import materialUi from '@iconify/icons-logos/material-ui';
import profilepic from '../profile.png'

class About extends Component {
  render() {
    
    

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>About Me</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    src={profilepic}
                    alt="Mohammed Asif"
                  />
                  <Icon
                    icon={bootstrapIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={materialUi}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;{" "}
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">Hello there!! :) </span>
                    <br />
                    I am,
                    <h2 className="p-3 shadow rounded text-info w-50">Mohammed Asif.</h2>
                    <br />
                    I am very passionate web developer. In my web development journey I have learnt few technologies and applied several as well.
                    I have expertise on:

                    <p><strong>React.js, React Bootstrap, Firebase Auth, Firebase Hosting, Heroku, PHP, MySQL, Laravel, HTML, CSS, Responsive CSS, Bootstrap.</strong></p>
                    I am also comfortable with:

                    <p><strong>Node.js, Express.js, Milligram CSS, MongoDB.</strong></p>
                    I am familiar with:

                    <p><strong> Redux, Next.js, React Native, Laravel Backpack</strong></p>
                    I know the use of:

                    <p><strong>cPanel, Project Management, Git (GitHub, Bitbucket, GitLab), Postman, Visual Studio Code, PHP Storm, Sublime Text, Figma, photoshop, illustrator.</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
