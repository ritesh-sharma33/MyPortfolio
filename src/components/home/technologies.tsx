import React, { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";
import "./home.css";
import { technologies } from "./data";
import Technology from "./Technology";


type TechIconProps = {
  iconElement: ReactElement;
};

const TechIcon = ({ iconElement }: TechIconProps) => iconElement;

type TechCardProps = {
  key: string;
  technology: Technology;
};

const technologyCardStyle = {
  height: 100,
  marginTop: 10,
  marginRight: 10,
  marginLeft: 10
} as React.CSSProperties;

const TechnologyCard = ({ key, technology }: TechCardProps) => {
  return (
    <Col className="techCardColumn">
      <div className="techCard" style={technologyCardStyle}>
        <a href={technology.websiteUrl}>
          <TechIcon iconElement={technology.imageUrl} />
          <br />
          <span className="techName" style={{ color: "white" }}>
            {key}
          </span>
        </a>
      </div>
    </Col>
  );
};

const techHeadingStyle = {
  fontSize: 30,
  fontFamily: "Varela Round",
  fontWeight: "bold"
} as React.CSSProperties;

type TechnologiesPros = {
  techType: string;
  heading: string;
};

const Technologies = ({ techType, heading }: TechnologiesPros) => {
  return (
    <div className="technologies" style={{ justifyContent: "center" }}>
      <span style={techHeadingStyle}>{heading}</span>
      <Row>
        {technologies.map(technology => {
          if (technology.techType === techType)
            return (
              <TechnologyCard key={technology.name} technology={technology} />
            );
          return <div></div>
        })}
      </Row>
    </div>
  );
};

export default Technologies;
