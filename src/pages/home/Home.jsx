import FrequentryAskedQs from '../../components/FrequentryAskedQs'
import FAQS from '../../components/FrequentryAskedQs'
import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

const Home = (props) => {
  return (
    <div>
      <MainHeader/>
      <Programs/>
      <Values/>
      <FrequentryAskedQs/>
      <Testimonials/>
     
    </div>
  )
}
export default Home