// The library based stuff are imported here.
import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

// The user-defined components used are imported here.
import Header from "./components/common/Header";

// The pages used are imported here.
import HomePage from "./components/home/homepage";
import AboutPage from "./components/about/aboutpage";
import BlogsPage from "./components/blogs/blogspage";
import ContactPage from "./components/contact/contactpage";

import "./index.css";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/blogs">
              <BlogsPage />
            </Route>
            <Route>
              <ContactPage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
