import Photo01 from "../Assets/photo 01.jpg";
import "./Hero.css";
import inta from '../Assets/insta.png'

const Hero = () => {
  return (
    <div className="Hero">
      <div>
        <img src={Photo01} alt="" />
      </div>
      <div className="content">
        <h2>
          "Capturing moments, creating memories," <br/><br/>"Frame your life,"  <br/><br/> "Where
          art meets the lens"
        </h2>
      </div>
      <div className="contact">
        <a href="https://www.instagram.com/amudhan_photography?igsh=OWhwbDkyOXlyejJy" target="blank"><img src={inta} alt="instagram" /><span>Instagram</span></a>
      
      </div>
   
    </div>
  );
};

export default Hero;
