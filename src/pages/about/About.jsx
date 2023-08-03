import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_1.jpg";
import StoryImage from "../../assets/images/about1.jpg";
import MissionImage from "../../assets/images/about2.jpg";
import VisionImage from "../../assets/images/about.jpeg";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


import "./about.css";

const About = (props) => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        perspiciatis sapiente blanditiis repellendus quia possimus id fuga
        facilis, aliquid!
      </Header>

      <div className="about__wrapper">
        <div className="about__story">
          <div className="about__section-img ">
            <LazyLoadImage
              src={StoryImage}
              alt="about image one"
              className="vision_image"
              effect="blur"
            />
          </div>

          <div className="about__section-content">
            <h2>Our Story</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              similique architecto minima unde voluptatum aut iure, officia nisi
              asperiores quos repudiandae veniam magni minus cupiditate
              reprehenderit at! Impedit, doloremque totam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              similique architecto minima unde voluptatum aut iure, officia nisi
              asperiores quos repudiandae veniam magni minus cupiditate
              reprehenderit at! Impedit, doloremque totam!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              similique architecto minima unde voluptatum aut iure, officia nisi
              asperiores quos repudiandae veniam magni minus cupiditate
            </p>
          </div>
        </div>
        <div className="vision__wrapper">
          <div className=" vision__story">
            <LazyLoadImage
              src={VisionImage}
              alt="vision image one"
              className="vision__section-img"
              effect="blur"
            />
            <div className="vision__section-content">
              <h2>Our Vision</h2>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                similique architecto minima unde voluptatum aut iure, officia
                nisi asperiores quos repudiandae veniam magni minus cupiditate
                reprehenderit at! Impedit, doloremque totam!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
                similique architecto minima unde voluptatum aut iure, officia
                nisi asperiores quos repudiandae veniam magni minus cupiditate
                reprehenderit at! Impedit, doloremque totam!
              </p>
            </div>
          </div>
        </div>

        <div className=" mission__story">
          <div className="about__section-img">
            <LazyLoadImage src={MissionImage} alt="misson img" effect="blur" />
          </div>

          <div className="about__section-content">
            <h2>Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit .
              Accusamus debitis omnis aspernatur fugiat magnam quasi! Quia
              deleniti eligendi recusandae ea tenetur vitae modi sed, similique
              consequatur sunt maxime corporis odit?
            </p>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae
              doloribus vitae aliquid officiis nihil alias ab repellendus,
              asperiores voluptates, unde a ipsam voluptatum iure nesciunt quos
              id obcaecati reprehenderit officia.
            </p>

            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              similique architecto minima unde voluptatum aut iure, officia nisi
              asperiores quos repudiandae veniam magni minus cupiditate
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
