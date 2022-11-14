

function Rating(props) {
    
    let children=Math.round(props.children);
    let stars;

    if (children === 0){
        stars = "☆☆☆☆☆";
    }

    if (children === 1){
        stars = "★☆☆☆☆";
    }

    if (children === 2){
        stars = "★★☆☆☆";
    }

    if (children === 3){
        stars = "★★★☆☆";
    }

    if (children === 4){
        stars = "★★★★☆";
    }

    if (children === 4){
        stars = "★★★★★";
    }


    return (
      <div className="stars">
        {stars}
      </div>
    );
  }
  
  export default Rating;
  