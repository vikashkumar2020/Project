import React, {useEffect,useState} from 'react';
import useWindowDimensions from './useWindowDimensions';
import Slider from "react-slick";
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';
import img6 from './images/6.jpg';

const Carousel = () => {

    const [slidesToShow, setslidesToShow] = useState(3)
    var settings = {
        dots: true,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: slidesToShow,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
      const { height, width } = useWindowDimensions();

      useEffect(() => {
        if(width<=600)
        {
          setslidesToShow(1);
        }
        else
        {
          setslidesToShow(3);
        }
      }, [width])
      
    return (
        <div style={{width:"84vw",alignItems:"center"}}>
        <Slider {...settings}>
          <div style={{display: "flex",
        justifyContent: "center"}}>
            <img src={img1} alt="1" height="200px" width="100%" />
          </div>
          <div style={{display: "flex",
        justifyContent: "center"}}>
          <img src={img2} alt="1" height="200px" width="100%" />
          </div >
          <div style={{display: "flex",
        justifyContent: "center"}}>
          <img src={img3} alt="1" height="200px" width="100%" />
          </div>
          <div style={{display: "flex",
        justifyContent: "center"}}>
          <img src={img4} alt="1" height="200px" width="100%" />
          </div >
          <div style={{display: "flex",
        justifyContent: "center"}}>
          <img src={img5} alt="1" height="200px" width="100%" />
          </div>
          <div style={{display: "flex",
        justifyContent: "center"}}>
          <img src={img6} alt="1" height="200px" width="100%" />
          </div>
        </Slider>
      </div>
    )
}

export default Carousel
