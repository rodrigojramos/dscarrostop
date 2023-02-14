import "./styles.css";
import carImg from "../../assets/car.png";

export default function CardCar() {
  return (
    <>
      <div className="dsct-container-card-car">
        <h2>Venha nos visitar</h2>
        <div className="dsct-card-car">
          <div>
            <img src={carImg} alt="car" />
          </div>
          <div>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
        <div className="dsct-card-car">
          <div>
            <img src={carImg} alt="car" />
          </div>
          <div>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>
      </div>
    </>
  );
}
