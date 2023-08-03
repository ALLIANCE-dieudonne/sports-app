import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_1.jpg";
import StoryImage from "../../assets/images/about1.jpg";
import MissionImage from "../../assets/images/about2.jpg";
import VisionImage from "../../assets/images/about.jpeg";
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
            <img
              src={StoryImage}
              alt="about image one"
              className="vision_image"
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
            <img
              src={VisionImage}
              alt="vision image one"
              className="vision__section-img"
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
            <img src={MissionImage} alt="misson img" />
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
