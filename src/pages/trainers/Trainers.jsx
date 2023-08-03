import Header from "../../components/Header";
import Image from "../../assets/images/header_bg_5.jpg";
import { trainers } from "../../data";
import Trainer from "../../components/Trainer.jsx";
import "./trainers.css";

const Trainers = (props) => {
  return (
    <>
      <Header title="Our Trainners" image={Image}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae
        perspiciatis ea iure nesciunt nemo quia repellat. Assumenda praesentium.
      </Header>

      <section className="container trainers_wrapper">
        {trainers.map((item, i) => (
          <Trainer data={item} key={i} />
        ))}
      </section>
    </>
  );
};
export default Trainers;
