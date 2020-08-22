import React from "react";
import "./about.css";

type EducationCardProps = {
  title: string;
  school: string;
  grade: string;
  passYear: Number;
};

const EducationCard = ({
  title,
  school,
  grade,
  passYear
}: EducationCardProps) => {
  return (
    <div className="eduCardElement">
      <span className="eduCardTitle">{title}</span> <br />
      <span className="eduCardSubtitle">{school}</span> <br />
      <span className="eduCardText">Grade: {grade}&nbsp;&nbsp;&nbsp; Pass Year: {passYear}</span><br />
    </div>
  );
};

export default EducationCard;
