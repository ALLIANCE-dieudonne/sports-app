import { LazyLoadImage } from "react-lazy-load-image-component";

const Header = ({ title, image, children }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          <LazyLoadImage src={image} alt="header image" />
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
