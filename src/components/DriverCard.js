
import Rating from './Rating';

function DriverCard(props) {
  return (
    <div className="driverCard">
      <div>
        <img className="driverPicture" src={props.img} alt="pic"/>
      </div>
      <div>
        <h4>{props.name}</h4>
        <Rating>{props.rating}</Rating>
        <div>{props.car.model} {props.car.licensePlate}</div>
        </div>
      <div>

      </div>
    </div>
  );
}

export default DriverCard;
