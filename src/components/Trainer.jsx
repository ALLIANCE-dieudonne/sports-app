import Card from "../UI/Card";
import "../pages/trainers/trainers.css"
const Trainer = ({ data }) => {
  return (
    <Card className="trainer">
      <div className="trainer__image">
        <img src={data.image} alt={data.name} />
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
