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
  name: string;
};

const technologyCardStyle = {
  height: 100,
  marginTop: 10,
  marginRight: 10,
  marginLeft: 10
};

const TechnologyCard = ({ name, key, technology }: TechCardProps) => {
  return (
    <Col className="techCardColumn">
      <div className="techCard" style={technologyCardStyle}>
        <a href={technology.websiteUrl}>
          <TechIcon iconElement={technology.imageUrl} />
          <br />
          <span className="techName">
            {name}
          </span>
        </a>
      </div>
    </Col>
  );
};

type TechnologiesPros = {
  techType: string;
  heading: string;
};

const Technologies = ({ techType, heading }: TechnologiesPros) => {
  return (
    <div className="technologies" style={{ justifyContent: "center" }}>
      <span className="techHeading">{heading}</span>
      <Row>
        {technologies.map(technology => {
          if (technology.techType === techType)
            return (
              <TechnologyCard name={technology.name} key={technology.name} technology={technology} />
            );

            return <div></div>
        })}
      </Row>
    </div>
  );
};

export default Technologies;
