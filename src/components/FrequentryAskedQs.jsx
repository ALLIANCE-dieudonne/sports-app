import {FaQuestion} from 'react-icons/fa'
import SectionHead from './SectionHead'
import FrequentryAskedQ from './FrequentryAskedQ';
import { faqs } from '../data';

const FrequentryAskedQs = () => {
  return (
    <section className='faqs'> 
        <div className="container faqs__container">
          <SectionHead icon={<FaQuestion/>} title = "FAQs"/>
          <div className="faqs__wrapper">
          {
            faqs.map(({id, answer, question}) => {
              return <FrequentryAskedQ key={id} question = {question} answer ={answer}/>
            })
          }
          </div>
        </div>
    </section>
  )
}
export default FrequentryAskedQs