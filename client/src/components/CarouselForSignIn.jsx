import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel, Item, Caption, Image } from "react-bootstrap";

class CarouselForSignIn extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <Image
            style={styleImage1}
            src="https://drive.google.com/uc?export=view&id=1ZYABrV5beOq4BS9DtLatWVxORN1itKFd"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={styleImage1}
            src="https://drive.google.com/uc?export=view&id=11tjMzgZh00AdcTyCZJ2N9PzNB-B1lcFP"
          />
          <Carousel.Caption />
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={styleImage1}
            src="https://drive.google.com/uc?export=view&id=1oUjGiFp3iUzKtVHK6ieneK6o42Jjug0E"
          />
          <Carousel.Caption />
        </Carousel.Item>
      </Carousel>
    );
  }
}

let styleImage1 = { width: "650px", height: "300px" };

export default CarouselForSignIn;
