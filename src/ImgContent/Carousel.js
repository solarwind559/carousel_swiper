import React, {useState} from 'react'
import '../stylings/Carousel.css'
import { images } from '../carousel-build/CarouselBuild'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

function Carousel() {

  const [currentImg, setCurrentImg] = useState(0);

  return (
    <div className="carousel-content">
      <div className="carousel-inner" 
      style={{
        backgroundImage: `url(${images[currentImg].img})`
      }}>
        <div className="left-arrow" onClick={() => {
          currentImg > 0 && setCurrentImg(currentImg - 1);
        }}>
        <ArrowBackIosIcon style={{fontSize:"60px"}} />
        </div>
        <div className="center">
          <h1>{images[currentImg].title}</h1>
        </div>
        <div className="right-arrow" onClick={() => {
          currentImg < images.length - 1 && setCurrentImg(currentImg + 1);
        }}>
          <ArrowForwardIosIcon style={{fontSize:"60px"}} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
