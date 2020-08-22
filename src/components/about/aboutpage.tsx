import React, { useState } from "react";
import {
  programmingSvgElement,
  reactSvgElement,
  codeReviewSvgElement,
  codeInsectionSvgElement,
  openSourceSvgElement,
  bugFixingSvgElement,
  versionControlSvgElement,
  codingSvgElement,
  freelancerSvgElement,
  webDeveloperSvgElement,
  javascriptFrameworkSvgElement,
  educationIllustration,
  professionalIllustration
} from "./svgelements";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typist from "react-typist";

import EducationCard from "./EducationCard";
import ProfessionalCard from "./ProfessionalCard";

const getRandomSvgElement = () => {
  const arrayOfSvgElements = [
    programmingSvgElement,
    reactSvgElement,
    codeReviewSvgElement,
    codeInsectionSvgElement,
    openSourceSvgElement,
    bugFixingSvgElement,
    versionControlSvgElement,
    codingSvgElement,
    freelancerSvgElement,
    webDeveloperSvgElement,
    javascriptFrameworkSvgElement
  ];
  let index = Math.ceil(Math.random() * (10 - 0) + 0);
  console.log("Random: " + index);
  return arrayOfSvgElements[index];
};

const data = {
  name: "Ritesh Sharma",
  age: 21,
  currentLocation: "Cuttack, Odisha",
  status: "Eat! Sleep! Code! Repeat! 🔁",
  passion: "Technical Blogging"
};

const AboutPage = () => {
  const [ideVisible, setIdeVisible] = useState(true);

  return (
    <div className="aboutPage">
      <div className="aboutPageHero">
        <Container>
          <Row className="aboutPageHeroRow">
            <Col data-aos="fade-right" lg={4} xs={12} sm={12}>
              {getRandomSvgElement()}
            </Col>
            <Col data-aos="fade-left" lg={8} xs={12} sm={12}>
              {ideVisible ? (
                <div className="ideSection" id="sectionForIde">
                  <Typist
                    className="introSection"
                    cursor={{
                      show: true,
                      blink: true,
                      element: "|",
                      hideWhenDone: false,
                      hideWhenDoneDelay: 1000
                    }}
                    avgTypingDelay={40}
                    stdTypingDelay={70}
                  >
                    <span className="heroIntroText">
                      <span className="classname">Developer</span>{" "}
                      <span className="variablename"> developer</span> ={" "}
                      <span className="keyword">new </span>{" "}
                      <span className="classname">Developer</span>();
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setName</span>(
                      <span className="stringliteral">"Ritesh Sharma"</span>);
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setAge</span>(
                      <span className="numberliteral">21</span>);
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setCurrentLocation</span>(
                      <span className="stringliteral">"Cuttack, Odisha"</span>);
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setStatus</span>(
                      <span className="stringliteral">
                        "Eat! Sleep! Code! Repeat <span role="img" aria-label="hi" aria-hidden="false">🔁</span>"
                      </span>
                      );
                    </span>
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">developer</span>.
                      <span className="methodname">setPassion</span>(
                      <span className="stringliteral">
                        "Technical Blogging"
                      </span>
                      );
                    </span>
                    <br />
                    <br />
                    <span className="heroIntroText">
                      <span className="variablename">console</span>.
                      <span className="methodname">log</span>(
                      <span className="variablename">developer</span>);
                    </span>
                    <br />
                    <br />
                    <br />
                    <Button
                      onClick={() => setIdeVisible(false)}
                      variant="outline-success"
                    >
                      Run Snippet
                    </Button>
                  </Typist>
                </div>
              ) : (
                <div className="outputSection">
                  <pre className="introOutput">
                    {JSON.stringify(data, null, 2)}
                  </pre>
                  <br />
                  <br />
                  <Button
                    onClick={() => setIdeVisible(!ideVisible)}
                    variant="outline-info"
                  >
                    Back to basics
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Container className="scroller">
          <section id="technologiesSection">
            <span />
            <span />
            <span />
          </section>
        </Container>
      </div>
      <section id="educationalBackground">
        <Row>
          <Col lg={6} xs={12} sm={12}>
            <div className="sectionHeadingContainer">
              <span className="sectionHeadingText">Educational Background</span>
            </div>
            <div className="eduSectionContainer">
              <div className="node">
                <EducationCard
                  title={"10th Grade"}
                  grade={"81.33%"}
                  passYear={2015}
                  school={"Deshbandhu H.S. (Eng. Med.) School"}
                />
              </div>
              <div className="node">
                <EducationCard
                  title={"12th Grade"}
                  grade={"87%"}
                  passYear={2017}
                  school={"Deshbandhu H.S. (Eng. Med.) School"}
                />
              </div>
              <div className="node">
                <EducationCard
                  title={"B.Tech."}
                  grade={"9.44 CGPA"}
                  passYear={2021}
                  school={"KIIT Deemed to be University, Bhubaneswar, India"}
                />
              </div>
            </div>
          </Col>

          <Col className="eduBackColumn" lg={6} xs={12} sm={12}>
            <div className="educationIllustration">{educationIllustration}</div>
          </Col>
        </Row>
      </section>
      <section id="professionalExperience">
        <Row>
          <Col className="proColumn" lg={6} xs={12} sm={12}>
            <div className="professionalIllustration">
              {professionalIllustration}
            </div>
          </Col>
          <Col lg={6} xs={12} sm={12}>
            <div className="sectionHeadingContainer">
              <span className="sectionHeadingText">Experience</span>
            </div>
            <div className="eduSectionContainer">
              <div className="node">
                <ProfessionalCard
                  title="Developer Intern"
                  company="LocalWire - A Hyperlocal News Platform"
                  timeframe="May 2019 - June 2019"
                  description="Mobile App Development"
                />
              </div>
              <div className="node">
                <ProfessionalCard
                  title="Full Stack Developer"
                  company="LocalWire - A Hyperlocal News Platform"
                  timeframe="July 2019 - January 2020"
                  description="Full Stack Development"
                />
              </div>
              <div className="node">
                <ProfessionalCard
                  title="Full Stack Developer"
                  company="Mozilla Club BBSR"
                  timeframe="August 2019 - Present"
                  description="Core member"
                />
              </div>
              <div className="node">
                <ProfessionalCard
                  title="Summer Intern"
                  company="HighRadius Corporation"
                  timeframe="April 2020 - June 2020"
                  description="Trainee-cum-Intern"
                />
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutPage;
