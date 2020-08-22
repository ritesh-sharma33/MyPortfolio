import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import Typist from "react-typist";

import firebase from "../../firebase";
import BlogCard from "./BlogCard";
import "./blogs.css";

class BlogsPage extends React.Component<any, any> {
  ref: any;
  unsubscribe: any;

  constructor(props: any) {
    super(props);
    this.ref = firebase
      .firestore()
      .collection("blogs")
      .orderBy("articleNo", "asc");
    this.unsubscribe = null;

    this.state = {
      blogs: []
    };
  }

  onCollectionUpdate = (querySnapshot: any) => {
    const blogs: any = [];
    querySnapshot.forEach((doc: any) => {
      const {
        title,
        shortDescription,
        minsRead,
        publishDate,
        publicUrl,
        imageUrl
      } = doc.data();
      blogs.push({
        key: doc.id,
        doc,
        title,
        shortDescription,
        minsRead,
        publishDate,
        publicUrl,
        imageUrl
      });
    });

    this.setState({
      blogs
    });

    console.log(this.state.blogs);
  };

  componentWillMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    let { blogs } = this.state;
    return (
      <div className="listOfBlogs">
        <div className="blogPageIntroSection">
          <Typist
            cursor={{ hideWhenDone: true }}
            avgTypingDelay={30}
            stdTypingDelay={20}
          >
            <Typist.Delay ms={500} />
            <span className="blogIntroText" style={{ color: "white" }}>
              I'm a Writer
            </span>
            <Typist.Backspace count={11} delay={300} />
            <span className="blogIntroText">
              {" write "}
              <span style={{ color: "#ff4f4f" }}>Code.</span>
            </span>
            <Typist.Backspace count={11} delay={300} />
            <span className="blogIntroText">
              write <span style={{ color: "#5896FF" }}>blogs.</span>
            </span>
            <Typist.Backspace count={14} delay={300} />
            <span className="blogIntroText" style={{ color: "white" }}>
              Learn about latest web and mobile technologies.
            </span>
          </Typist>
        </div>
        <div className="blogsListSection">
          {blogs.length === 0 ? (
            <div style={{ marginTop: "30vh", textAlign: "center" }}>
              <Spinner animation="grow" variant="danger" />
            </div>
            
          ) : (
            <Row className="blogColumn">
              {blogs.map((blog: any) => {
                return (
                  <Col xs={12} lg={5}>
                    <BlogCard
                      title={blog.title}
                      shortDescription={blog.shortDescription}
                      minsRead={blog.minsRead}
                      publishDate={blog.publishDate}
                      publicUrl={blog.publicUrl}
                      imageUrl={blog.imageUrl}
                    />
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
      </div>
    );
  }
}

export default BlogsPage;
