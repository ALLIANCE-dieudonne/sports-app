import "./plans.css";
import Header from "../../components/Header";
import Image from "../../assets/images/header_bg_4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";
const Plans = (props) => {
  return (
    <>
      <Header title="Membership Plan" image={Image}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
          quam laboriosam, autem modi veritatis inventore?
        </p>
      </Header>
      <section className="plans container">
        {plans.map(({ id, name, desc, price, features }) => (
          <Card key={id} className="plan">
            <h3>{name}</h3>
            <small className="plan_desc">{desc}</small>
            <h3 className="price">${price} /mon</h3>
            <h4 className="features">Features</h4>
            {features.map(({ feature, available }, i) => (
              <p className={!available ? "disabled" : "abled"}>{feature}</p>
            ))}
            <button className="btn lg">Choose Plan</button>
          </Card>
        ))}
      </section>
    </>
  );
};

export default Plans;
