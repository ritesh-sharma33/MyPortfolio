import React from 'react';
import "./about.css";

type ProfessionalCardProps = {
  title: string;
  company: string;
  timeframe: string;
  description: string;
};

const ProfessionalCard = ({ title, company, timeframe, description }: ProfessionalCardProps) => {
  return (
    <div className="proCardElement">
      <span className="proCardTitle">{title}</span> <br />
      <span className="proCardSubtitle">{company}</span> <br />
      <span className="proCardText">Description: {description}</span><br />
      <span className="proCardText">Timespan: {timeframe}</span><br />
    </div>
  );
}

export default ProfessionalCard;