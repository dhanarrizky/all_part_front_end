import React from "react";
import './App.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from './assets/data';
import Card from './component/card';
import Imges from './assets/img.jpg';

const App = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 10
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return(
    <div>
      <h1>multi react carousel</h1>
      <Carousel responsive={responsive}>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
       <Card imgs={Imges} title="test" description="test description"/>
      </Carousel>
    </div>
  )
}

export default App;