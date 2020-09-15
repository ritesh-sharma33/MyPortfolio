import React from "react";
import { Card } from "react-bootstrap";
import "./blogs.css";

type BlogCardProps = {
  title: string;
  shortDescription: string;
  minsRead: string;
  publishDate: string;
  publicUrl: string;
  imageUrl: string;
};

const BlogCard = ({
  title,
  shortDescription,
  minsRead,
  publishDate,
  publicUrl,
  imageUrl
}: BlogCardProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={publicUrl}>
      <div className="blogCardContainer">
        <Card className="blogCard">
          <Card.Title className="blogTitle">{title}</Card.Title>
          <Card.Subtitle>
            <div className="sutitleRow">
              <span className="blogSubtitle">{minsRead}</span>
              <span className="blogSubtitle">{publishDate}</span>
            </div>
          </Card.Subtitle>
          <Card.Body className="blogBody">
            <div className="overflow module">
              <span style={{ color: "white" }}>{shortDescription}</span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </a>
  );
};

export default BlogCard;
