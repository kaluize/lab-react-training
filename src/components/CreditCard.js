import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/mastercard.png';


function CreditCard(props) {
  return (
    <div className= "creditCard" style={{ backgroundColor: props.bgColor, color: props.color }}>
      <img src={props.type === "Visa" ? visa : mastercard} alt="Bandeira do Cartão"/>
      <h3>**** **** **** {props.number.slice(-4)}</h3>
      <div className="date">
        <div>Expires {props.expirationMonth}/{props.expirationYear}</div>
        <div>{props.bank}</div>
      </div>
      <div>{props.owner}</div>
      
    </div>
  );
}

export default CreditCard;
