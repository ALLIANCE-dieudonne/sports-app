import './contact.css'
import Header from '../../components/Header';
import {MdEmail} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io';
import HeaderImage from '../../assets/images/header_bg_2.jpg';
const Contact = (props) => {
  return (
   <>
   <Header title ="Get In Touch" image={HeaderImage} >
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui neque maxime possimus! Blanditiis, repellat aut?</p>
   </Header>

    <section className='contact__info'>
      <div className="section__icons">
        <div className="contact__icon">
          <a href="www.google.com" target="blank" rel='noreferrer noopener' ><MdEmail/></a>
        </div>

        <div className="contact__icon">
          <a href="www.google.com" target="blank" rel='noreferrer noopener' ><BsMessenger/></a>
        </div>

        <div className="contact__icon">
          <a href="www.google.com" target="blank" rel='noreferrer noopener' ><IoLogoWhatsapp/></a>
        </div>
      </div>

    </section>
   </>
  )
}

export default Contact
