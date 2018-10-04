import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, Item, Caption, Image} from 'react-bootstrap'

class CarouselHomePage extends React.Component {

  render() {
    return (
      <Carousel style={{height:"400px",marginLeft:"5%", marginRight:"5%", backgroundColor: "black"}} >
        <Carousel.Item>
          <Image style={{width:"600px", height:"400px"}} src="https://drive.google.com/uc?export=view&id=1ZYABrV5beOq4BS9DtLatWVxORN1itKFd" />
          <Carousel.Caption style={{width:"800px", height:"500px",marginLeft:'15%'}}>
            <h3 style={{marginLeft: "10%", marginTop: "20%", fontVariant: "small-caps", fontSize:"30px", color: '#FF4500', fontStyle: "oblique", fontFamily: "Brush Script MT"}} >THE BLOOMIN' BURGER</h3>
            <h4 style={{marginLeft: "10%", fontVariant: "small-caps", fontSize:"20px", color: '#FF4500', fontStyle: "oblique", fontFamily: "Brush Script MT"}}>Try our spicy signature bloom sauce!!</h4>
            <p style={{marginLeft: "10%", fontVariant: "small-caps", fontSize:"25px", color: '#FF4500', fontStyle: "oblique", fontFamily: "Brush Script MT", textDecoration: "underline", textDecorationColor: "#C19A6B"}}>Starting at $7.99</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ width:"600px", height:"400px"}}src="https://drive.google.com/uc?export=view&id=11tjMzgZh00AdcTyCZJ2N9PzNB-B1lcFP"/>
          <Carousel.Caption style={{width:"800px", height:"500px",marginLeft:'15%'}}>
            <h3 style={{marginLeft: "5%", marginTop: "20%", fontSize:"30px",  color: '#FF4500',  fontStyle: "oblique", fontFamily: "Brush Script MT"}} >Early Birds Special!!</h3>
            <h4 style={{marginLeft: "5%", color: '#FF4500', fontSize:"20px", fontStyle: "oblique", fontFamily: "Brush Script MT"}}>Perfect gluten free buttermilk pancakes.</h4>
            <p style={{marginLeft: "5%", fontVariant: "small-caps", fontSize:"25px", color: '#FF4500', fontStyle: "oblique", fontFamily: "Brush Script MT" , textDecoration: "underline", textDecorationColor: "#C19A6B"}}>Starting at $4.99</p>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ width:"600px", height:"400px"}} src="https://drive.google.com/uc?export=view&id=1oUjGiFp3iUzKtVHK6ieneK6o42Jjug0E" />
          <Carousel.Caption style={{width:"800px", height:"500px",marginLeft:'15%'}}>
            <h3 style={{marginLeft: "5%", marginTop: "20%", fontSize:"30px", color: '#FF4500',  fontStyle: "oblique", fontFamily: "Brush Script MT"}}>Happy Hour Special!!</h3>
            <h4 style={{marginLeft: "5%", color: '#FF4500', fontSize:"20px", fontStyle: "oblique", fontFamily: "Brush Script MT"}}>Fresh Chicken Burrito.</h4>
            <p style={{marginLeft: "5%",fontVariant: "small-caps", fontSize:"25px", color: '#FF4500', fontStyle: "oblique", fontFamily: "Brush Script MT" , textDecoration: "underline", textDecorationColor: "#C19A6B"}}>Starting at $6.99</p>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}


export default CarouselHomePage
