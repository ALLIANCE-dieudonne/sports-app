import Card from "../UI/Card";
import "../pages/trainers/trainers.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Trainer = ({ data }) => {
  return (
    <Card className="trainer">
      <div className="trainer__image">
        <LazyLoadImage src={data.image} alt={data.name} effect="blur" />
      </div>
      <h3>{data.name}</h3>
      <p>{data.job}</p>
      <div className="trainer_social">
        {data.socials.map((item) => (
          <a href={item.link} >{item.icon}</a>
        ))}
      </div>
    </Card>
  );
};
export default Trainer;
