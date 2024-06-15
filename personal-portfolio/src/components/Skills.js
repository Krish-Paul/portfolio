
import py4 from "../assets/img/py4.png";  // Import the image here
import sql2 from "../assets/img/sql2.png";
import ai2 from "../assets/img/ai2.png";
import c2 from "../assets/img/c2.png";
import excel from "../assets/img/excel.png";
import java2 from "../assets/img/java2.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Hi Again....Check out my Skills.<br></br> Things in which I'm supposedly not very bad at.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={ai2} alt="Image" />
                  <h5>AI/ML/DL</h5>
                </div>
                <div className="item">
                  <img src={py4} alt="Image" /> {/* Use the imported image here */}
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={java2} alt="Image" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={c2} alt="Image" />
                  <h5>C</h5>
                </div>
                <div className="item">
                  <img src={sql2} alt="Image" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={excel} alt="Image" />
                  <h5>Excel</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
