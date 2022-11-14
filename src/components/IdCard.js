

function IdCard(props) {
    return (
      <div className="border idCard">
        <img src={props.picture} alt="profile pic" style={{margin: "20px", height:"150px"}} />
        <div>
          <p><b>First name:</b> {props.firstName}</p>
          <p><b>Last name:</b> {props.lastName}</p>
          <p><b>Gender:</b> {props.gender}</p>
          <p><b>Height:</b> {props.height}</p>
          <p><b>Birth:</b> {props.birth}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;
