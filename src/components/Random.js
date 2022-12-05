

function Random(props) {
    return (
        <div className="border">
            Random value between {props.min} and {props.max} => {Math.ceil(Math.random()*(props.max -1))}
        </div>
    );
  }
  
  export default Random;

