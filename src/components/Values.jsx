import SectionHead from "./SectionHead";
import { values } from "../data";
import { GiCutDiamond } from "react-icons/gi";
import Card from "../UI/Card";
import Image from "../assets/images/values.jpg";
const Values = () => {
  return (
    <section className="values">
      <div className="container values__container">
        <div className="values__left">
          <div className="values__img">
            <img src={Image} alt="values img" />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" className="value__icon" />

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            repellendus ea repellat provident dolor natus.
          </p>
          <div className="values_wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values_value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
