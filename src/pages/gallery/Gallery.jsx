import "./gallery.css";
import Header from "../../components/Header";
import HeaderImage from "../../assets/images/header_bg_3.jpg";
import Image1 from '../../assets/images/gallery1.jpg'
import Image2 from '../../assets/images/gallery2.jpg'
import Image3 from '../../assets/images/gallery3.jpg'
import Image4 from '../../assets/images/gallery4.jpg'
import Image5 from '../../assets/images/gallery5.jpg'
import Image6 from '../../assets/images/gallery6.jpg'
import Image7 from '../../assets/images/gallery7.jpg'
import Image8 from '../../assets/images/gallery8.jpg'
import Image9 from '../../assets/images/gallery9.jpg'
import Image10 from '../../assets/images/gallery10.jpg'
import Image11 from '../../assets/images/gallery11.jpg'
import Image12 from '../../assets/images/gallery12.jpg'
import Image13 from '../../assets/images/gallery13.jpg'
import Image14 from '../../assets/images/gallery14.jpg'
import Image15 from '../../assets/images/gallery15.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Galley = (props) => {
  return (
    <>
      <Header title="Our Gallery" image={HeaderImage}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam,
          repudiandae ab aliquid delectus officia commodi.
        </p>
      </Header>

      <section>
        <div className="container gallery_images_container">
          <div className="gallery__image_wrapper_one">
            <LazyLoadImage src={Image1} alt="image one" effect="blur" />
            <LazyLoadImage src={Image2} alt="image two" effect="blur"/>
            <LazyLoadImage src={Image3} alt="image three" effect="blur"/>
            <LazyLoadImage src={Image4} alt="image four" effect="blur"/>
            <LazyLoadImage src={Image5} alt="image five" effect="blur"/>
            <LazyLoadImage src={Image6} alt="image six" effect="blur"/>
          </div>

          <div className="gallery__image_wrapper_two">
            <LazyLoadImage src={Image7} alt="image seven"effect="blur" />
            <LazyLoadImage src={Image8} alt="image eight" effect="blur"/>
            <LazyLoadImage src={Image9} alt="image nine" effect="blur"/>
          </div>

          <div className="gallery__image_wrapper_one">
            <LazyLoadImage src={Image10} alt="image ten" effect="blur"/>
            <LazyLoadImage src={Image11} alt="image eleven" effect="blur"/>
            <LazyLoadImage src={Image12} alt="image twelve" effect="blur"/>
            <LazyLoadImage src={Image13} alt="image thirteen" effect="blur"/>
            <LazyLoadImage src={Image14} alt="image fourteen" />
            <LazyLoadImage src={Image15} alt="image fifteen" effect="blur"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Galley;
