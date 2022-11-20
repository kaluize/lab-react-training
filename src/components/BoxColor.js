

function BoxColor({ r, g, b }) {
  
  let styleInLine = { backgroundColor: `rgb(${r}, ${g}, ${b})`}
  
  return (
      <div className="border" style={styleInLine}>
        <p>rgb ({r}, {g}, {b})</p>
        <p>
        #{r.toString(16)}
        {g.toString(16)}
        {b.toString(16)} </p>
      </div>
    );
  }
  
  export default BoxColor;

  