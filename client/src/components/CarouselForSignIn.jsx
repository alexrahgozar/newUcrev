import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, Item, Caption, Image} from 'react-bootstrap'

class CarouselForSignIn extends React.Component {

  render() {
    return (
      <Carousel style={{marginTop: "50px"}}>
        <Carousel.Item>
          <Image style={{width:"650px", height:"400px"}} src="https://drive.google.com/uc?export=view&id=1ZYABrV5beOq4BS9DtLatWVxORN1itKFd" />
          <Carousel.Caption style={{}}>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ width:"650px", height:"400px"}}src="https://drive.google.com/uc?export=view&id=11tjMzgZh00AdcTyCZJ2N9PzNB-B1lcFP"/>
          <Carousel.Caption style={{}}>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{width:"650px", height:"400px"}} src="https://drive.google.com/uc?export=view&id=1oUjGiFp3iUzKtVHK6ieneK6o42Jjug0E" />
          <Carousel.Caption style={{}}>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}


export default CarouselForSignIn
