function CreditCard(props) {
  return (
    <div >
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
