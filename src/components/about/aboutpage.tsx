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
import { Timeline } from "antd";
import "antd/dist/antd.css";

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
            <Col data-aos="fade-right" lg={4} xs={12} sm={5}>
              {getRandomSvgElement()}
            </Col>
            <Col data-aos="fade-left" lg={8} xs={12} sm={7}>
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
                        "Eat! Sleep! Code! Repeat "<span aria-labelledby="repeat" role="img">🔁</span>
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
                      style={{ fontSize: "16px" }}
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
              <Timeline>
                <Timeline.Item style={{ paddingBottom: "50px" }}>
                  <span className="eduCardTitle">
                    B.Tech. (Information Technology)
                  </span>
                  <br />
                  <span className="eduCardSubtitle">
                    KIIT Deemed to be University, Bhubaneswar
                  </span>
                  <br />
                  <span className="eduCardText">CGPA: 9.44</span>
                  <br />
                  <span className="eduCardText">Timespan: 2017-2021</span>
                  <br />
                </Timeline.Item>
                <Timeline.Item style={{ paddingBottom: "50px" }}>
                  <span className="eduCardTitle">Higher Secondary (12th)</span>
                  <br />
                  <span className="eduCardSubtitle">
                    Deshbandhu H.S. School
                  </span>
                  <br />
                  <span className="eduCardText">Percentage: 87%</span>
                  <br />
                  <span className="eduCardText">Timespan: 2015-2017</span>
                  <br />
                </Timeline.Item>
                <Timeline.Item style={{ paddingBottom: "50px" }}>
                  <span className="eduCardTitle">High School (10th)</span>
                  <br />
                  <span className="eduCardSubtitle">
                    Deshbandhu H.S. School
                  </span>
                  <br />
                  <span className="eduCardText">Percentage: 81.33%</span>
                  <br />
                  <span className="eduCardText">Timespan: 2013-2015</span>
                  <br />
                </Timeline.Item>
              </Timeline>
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
              <Timeline.Item style={{ paddingBottom: "50px" }}>
                <span className="eduCardTitle">
                  Developer Intern
                </span>
                <br />
                <span className="eduCardSubtitle">
                  LocalWire - The Hyperlocal News Platform
                </span>
                <br />
                <span className="eduCardText">Description: Mobile App Development</span>
                <br />
                <span className="eduCardText">Timespan: June 2019 - July 2019</span>
                <br />
              </Timeline.Item>
              <Timeline.Item style={{ paddingBottom: "50px" }}>
                <span className="eduCardTitle">
                  Full Stack Developer
                </span>
                <br />
                <span className="eduCardSubtitle">
                  LocalWire - The Hyperlocal News Platform
                </span>
                <br />
                <span className="eduCardText">Description: Full Stack Development</span>
                <br />
                <span className="eduCardText">Timespan: July 2019 - Jan 2020</span>
                <br />
              </Timeline.Item>
              
              <Timeline.Item style={{ paddingBottom: "50px" }}>
                <span className="eduCardTitle">
                  Web Developer
                </span>
                <br />
                <span className="eduCardSubtitle">
                  Mozilla Club Bhubaneswar
                </span>
                <br />
                <span className="eduCardText">Description: Core Team Member and Speaker</span>
                <br />
                <span className="eduCardText">Timespan: Aug 2019 - Present</span>
                <br />
              </Timeline.Item>
              
              <Timeline.Item style={{ paddingBottom: "50px" }}>
                <span className="eduCardTitle">
                  Summer Intern
                </span>
                <br />
                <span className="eduCardSubtitle">
                  HighRadius Corporation
                </span>
                <br />
                <span className="eduCardText">Description: Trainee-cum-Intern</span>
                <br />
                <span className="eduCardText">Timespan: Apr 2020 - June 2020</span>
                <br />
              </Timeline.Item>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default AboutPage;
