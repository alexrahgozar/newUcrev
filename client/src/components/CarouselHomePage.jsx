import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel, Item, Caption, Image } from "react-bootstrap";

class CarouselHomePage extends Component {
  render() {
    return (
      <Carousel style={styleTopCarousel}>
        <Carousel.Item>
          <Image
            style={stylesImage}
            src="https://drive.google.com/uc?export=view&id=1ZYABrV5beOq4BS9DtLatWVxORN1itKFd"
          />
          <Carousel.Caption style={styleCarouselCap}>
            <h3 style={styleTopH3Top}>THE</h3>
            <h3 style={styleTopH3Bottom}>BLOOMIN' BURGER</h3>
            <h4 style={styleTopH3Bottom}>Try</h4>
            <h4 style={styleTopH3Bottom}>our spicy signature</h4>
            <h4 style={styleTopH3Bottom}>bloom sauce!!</h4>
            <p style={styleTopP}>Starting at $7.99</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={stylesImage}
            src="https://drive.google.com/uc?export=view&id=11tjMzgZh00AdcTyCZJ2N9PzNB-B1lcFP"
          />
          <Carousel.Caption style={styleCarouselCap}>
            <h3 style={stylesH3}>Early Birds Special!!</h3>
            <h4 style={stylesH4}>Perfect</h4>
            <h4 style={stylesH4}>gluten free buttermilk pancakes.</h4>
            <p style={stylesP}>Starting at $4.99</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={stylesImage}
            src="https://drive.google.com/uc?export=view&id=1oUjGiFp3iUzKtVHK6ieneK6o42Jjug0E"
          />
          <Carousel.Caption style={styleCarouselCap}>
            <h3 style={stylesH3}>Happy Hour Special!!</h3>
            <h4 style={stylesH4}>Fresh Chicken Burrito.</h4>
            <p style={stylesP}>Starting at $6.99</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

let styleTopCarousel = {
  height: "400px",
  marginLeft: "5%",
  marginRight: "5%",
  backgroundColor: "black"
};
let stylesH3 = {
  marginLeft: "15%",
  marginTop: "20%",
  fontSize: "30px",
  color: "#F3E5AB",
  fontStyle: "oblique",
  fontFamily: "Brush Script MT"
};
let stylesH4 = {
  marginLeft: "15%",
  color: "#F3E5AB",
  fontSize: "20px",
  fontStyle: "oblique",
  fontFamily: "Brush Script MT"
};
let stylesP = {
  marginLeft: "15%",
  fontVariant: "small-caps",
  fontSize: "25px",
  color: "#F3E5AB",
  fontStyle: "oblique",
  fontFamily: "Brush Script MT",
  textDecoration: "underline",
  textDecorationColor: "#C19A6B"
};
let stylesImage = { width: "600px", height: "400px" };
let styleCarouselCap = { width: "800px", height: "500px", marginLeft: "15%" };
let styleTopH3Top = {
  marginLeft: "10%",
  marginTop: "20%",
  fontVariant: "small-caps",
  fontSize: "20px",
  color: "#F3E5AB",
  fontStyle: "oblique",
  fontFamily: "Brush Script MT"
};
let styleTopH3Bottom = {
  marginLeft: "10%",
  fontVariant: "small-caps",
  fontSize: "20px",
  color: "#F3E5AB",
  fontStyle: "oblique",
  fontFamily: "Brush Script MT"
};
let styleTopP = {
  marginLeft: "10%",
  fontVariant: "small-caps",
  fontSize: "25px",
  color: "#F3E5AB",
  fontStyle: "oblique",
  fontFamily: "Brush Script MT",
  textDecoration: "underline",
  textDecorationColor: "#C19A6B"
};
export default CarouselHomePage;
