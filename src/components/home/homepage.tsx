import React from 'react';
import Hero from "./Hero";
import AOS from 'aos';

interface AppProps {}
interface AppState {
  name: string;
}

class HomePage extends React.Component<AppProps, AppState> {

  constructor(props: AppProps, context: AppState) {
    super(props, context);
    AOS.init({
      duration: 2000
    });
  }

  componentWillReceiveProps (){ 
    AOS.refresh(); 
  } 

  render() {
    return (
    <div className="homePage">
      <Hero />
    </div>
  );
  }
}


export default HomePage;