import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';


const Header = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <LazyLoadImage src={image} alt="header image" effect="blur" />
        </div>

        <div className="header__content">
          <h2>{title}</h2>
          <p>{children}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
