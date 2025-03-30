import { useRef, useState } from "react";

function Demo(){
    let x=0;

const [y, setY] =useState(0);

//update z
const z = useRef(0);
console.log(z.current);



function handleUpdate(){
    x = x+1;
    console.log(x);
}

function handleY(){
    setY(y+1);
}

function handleZ(){
    z.current =z.current+1;
    console.log(z);
}
    
    return(
        <>
        <div className="container mx-auto p-14 bg-white shadow-lg rounded-lg">
            <h1>{x}</h1>
            <button onClick={handleUpdate}>Increment x</button>
             <h2>{y}</h2>
            <button onClick={handleY}>Increment Y</button>
            <h2>{z.current}</h2>
            <button onClick={handleZ}>Incrment Z</button>
        </div>
      </>
    )
}
export default Demo;