import { useState } from 'react';
import Card from '../UI/Card';
import SectionHead from './SectionHead';
import {ImQuotesLeft} from 'react-icons/im'
import {
IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from '../data';

const Testimonials = () => {

  const [index, setIndex] = useState(0);
  const {name, quote, job, avatar} = testimonials[index];

  const handleNextTestimonial = () =>{
    setIndex(prev => prev +1 );

     if (index >= testimonials.length - 1) {
       setIndex(0);
     }
  }
  const handlePreviousTestimonial = () =>{
    setIndex(prev => prev -1 );

    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  }
  return (
    <section className="testimonials">
      <div className="container testimonial__container">
        <SectionHead
          icon={<ImQuotesLeft />}
          title="Testimonials"
          className="testimonials__head"
        />
      </div>

      <Card className="testimonials">
        <div>
          <img src={avatar} alt="" className="testimonial__avatar" />
          <p className="testimonial__quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial__title">{job}</small>
        </div>
      </Card>
      <div className="testimonial__btns-container">
        <button onClick={handlePreviousTestimonial}  className='testimonial_btn'>
          <IoIosArrowDropleftCircle />
        </button>
        <button onClick={handleNextTestimonial} className='testimonial_btn'>
          <IoIosArrowDroprightCircle />
        </button>
      </div>
    </section>
  );
}
export default Testimonials