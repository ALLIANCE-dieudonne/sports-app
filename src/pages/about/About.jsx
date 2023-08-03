import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_1.jpg";
import StoryImage from '../../assets/images/about1.jpg';
import MissionImage from '../../assets/images/about2.jpg';
import VisionImage from '../../assets/images/about3.jpg';
import "./about.css";

const About = (props) => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
        perspiciatis sapiente blanditiis repellendus quia possimus id fuga
        facilis, aliquid!
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-img">
            <img src={StoryImage} alt="about image one" />
          </div>

          <div className="about__section-content">
            <h1>Our Story</h1>

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
      </section>
      <section className="our__vision">
        <div className="container vision__container">
          <div className="about__section-content">
            <h1>Our Vision</h1>

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
           
          </div>

          <div className="about__section-img">
            <img src={VisionImage} alt="vision image one" />
          </div>
        </div>
      </section>

      <section className="our__mission">
        <div className="container mission__container">
          <div className="about__section-img">
            <img src={MissionImage} alt="misson img" />
          </div>

          <div className="about__section-content">
            <h1>Our Mission</h1>
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
      </section>
    </>
  );
};
export default About;
