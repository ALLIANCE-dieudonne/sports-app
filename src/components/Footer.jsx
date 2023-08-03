import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaLinkedin} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Logo from '../assets/images/logo.png'

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <div className="footer__logo">
            <Link to="/">
              <img src={Logo} alt="footer logo" className="logo" />
            </Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit at
            esse debitis rem maiores delectus ab. Ab ipsam corrupti distinctio
            ut aliquam? Doloribus, possimus molestias natus distinctio quaerat
            rem sequi!
          </p>

          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="norefferer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="norefferer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="norefferer noopener"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="norefferer noopener"
            >
              <AiFillTwitterCircle />
            </a>
          </div>
        </article>

        <article>
          <h4>Permalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/">Blog</Link>
          <Link to="/">Case Studies</Link>
          <Link to="/">Events</Link>
          <Link to="/">Communities</Link>
          <Link to="/">FAQS</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/contact">Contact</Link>
          <Link to="/">Support</Link>
        </article>
      </div>

      <div className="footer__copywrite">
        <small>
          <p>copywrite {currentYear} &copy; made by Silver Seeker</p>
        </small>
      </div>
    </footer>
  );
}
export default Footer