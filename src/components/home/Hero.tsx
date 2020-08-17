import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typist from "react-typist";
import Technologies from "./technologies";
import "./home.css";

const heroSection = {
  marginTop: 20,
  marginLeft: 20,
  color: "white"
} as React.CSSProperties;

const nameText = {
  color: "white",
  fontSize: 45,
  fontWeight: "bold",
  fontFamily: "Varela Round"
} as React.CSSProperties;

const descriptionText = {
  color: "#ABABAB",
  fontFamily: "Varela Round",
  fontSize: "2rem"
} as React.CSSProperties;

const helloText = {
  color: "#ABABAB"
} as React.CSSProperties;

const Hero = () => {
  return (
    <div style={heroSection}>
      <div className="hero-screen-full">
        <Container>
          <Row style={{ height: "100vh" }}>
            <div />
            <Col data-aos="fade-right" lg={6} xs={12} sm={12}>
              <div className="photoSection">
                <img
                  className="myImage"
                  src="https://user-images.githubusercontent.com/45563022/89817007-1d6bb800-db65-11ea-8ee9-ac76704ddb99.png"
                  alt="Ritesh Sharma"
                />
                <svg style={{ marginTop: "50%" }}>
                  <path
                    fill="none"
                    stroke="deeppink"
                    stroke-width="14"
                    stroke-miterlimit="0"
                    d="M50 250 Q100 350 200 350 L300 350 L400 350 L500 350 L600 350 L700 350"
                  />
                </svg>
              </div>
            </Col>

            <Col
              data-aos="fade-left"
              lg={6}
              xs={12}
              sm={12}
              style={{ marginTop: 70 }}
            >
              <span style={helloText}>
                Hello &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; नमस्ते
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Hola
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 你好
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; مرحبا
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; salut &nbsp;
              </span>
              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={30}
                stdTypingDelay={20}
              >
                <span style={nameText}>I'm Ritesh Sharma</span>
                <br />
                <Typist.Delay ms={500} />
                <span style={descriptionText}>A Software Developer</span>
                <Typist.Backspace count={18} delay={300} />
                <span style={descriptionText}>Blogger</span>
                <Typist.Backspace count={8} delay={300} />
                <span style={descriptionText}>n Explorer</span>
                <Typist.Backspace count={11} delay={300} />
                <span style={descriptionText}>Web Development</span>
                <Typist.Backspace count={15} delay={300} />
                <span style={descriptionText}>Mobile App Development</span>
                <Typist.Backspace count={22} delay={300} />
                <span style={descriptionText}>Machine Learning</span>
                <Typist.Backspace count={16} delay={300} />
                <span style={descriptionText}>Deep Learning</span>
                <Typist.Backspace count={13} delay={300} />
                <span style={descriptionText}>A Software Developer</span>
              </Typist>
              <div className="socialHandleSection">
                <a href="https://www.facebook.com/sharmaritesh3312/">
                  <img
                    alt="Facebook"
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330017-48bc3000-dfc7-11ea-8171-bdac7c7f2ba3.png"
                  />
                </a>
                <a href="https://github.com/ritesh-sharma33">
                  <img
                    alt="GitHub"
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330053-89b44480-dfc7-11ea-8f97-b0f1f45761bd.png"
                  />
                </a>
                <a href="https://twitter.com/sharma_ritesh33">
                  <img
                    alt="Twitter"
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330082-cbdd8600-dfc7-11ea-998d-d3ebfeb3728c.png"
                  />
                </a>
                <a href="https://www.linkedin.com/in/sharmaritesh33/">
                  <img
                    alt="LinkedIn"
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330101-edd70880-dfc7-11ea-9a1b-ed15bd2b52f4.png"
                  />
                </a>
                <a href="https://medium.com/@sharmaritesh3312">
                  <img
                    alt="Medium"
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330143-1bbc4d00-dfc8-11ea-8aab-39f0e04f7e91.png"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCULHutsJDu3AayYWPZD8f9g">
                  <img
                    alt="YouTube"
                    className="socialHandleIcon"
                    src="https://user-images.githubusercontent.com/45563022/90330161-4d351880-dfc8-11ea-93a3-72f45d58dcdb.png"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="scroller">
          <section id="technologiesSection">
            <a href="#techSection">
              <span />
              <span />
              <span />
            </a>
          </section>
        </Container>
      </div>
      <section id="techSection">
        <Container>
          <Row data-aos="fade-left" className="technologies">
            <Technologies
              heading={"Programming Languages"}
              techType={"programming"}
            />
          </Row>
          <Row data-aos="fade-left" className="technologies">
            <Technologies heading={"Web Frameworks"} techType={"framework"} />
          </Row>
          <Row data-aos="fade-left" className="technologies">
            <Technologies
              heading={"Mobile App Development"}
              techType={"mobile"}
            />
          </Row>
          <Row data-aos="fade-left" className="technologies">
            <Technologies heading={"Others"} techType={"misc"} />
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Hero;
