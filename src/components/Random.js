

function Random(props) {
    return (
        <div className="border">
            Random value between {props.min} and {props.max} => {Math.floor(Math.random()*props.max)}
        </div>
    );
  }
  
  export default Random;

