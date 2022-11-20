import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';


function CreditCard(props) {
  return (
    <div style={{ backgroundColor: props.bgColor, color: props.color }}>
      <div>{props.type}</div>
      <div>{props.number}</div>
      <div>
      Expires {props.expirationMonth}/{props.expirationYear}
      {props.bank}
      </div>
      <div>{props.owner}</div>
      
    </div>
  );
}

export default CreditCard;
