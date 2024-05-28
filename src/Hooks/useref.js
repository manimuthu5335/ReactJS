import React,{useRef,useEffect} from 'react'

const Useref = () => {
    const colorparagraph = useRef(null);
    const colors = ["#d529d0","#ffc107","#d51858"];

    useEffect(() =>{
        console.log(colorparagraph);
        console.log(colorparagraph.current);

    });

    const styleparagraph = () =>{
        const randomcolor = Math.floor(Math.random()*colors.length);
        colorparagraph.current.style.color = colors[randomcolor];
    }
  return (
    <div style={{textAlign:'center'}}>

        <h1>USEREF HOOKS</h1>
        <button onClick={() =>{styleparagraph()}}>
            Click me!   
        </button>    
        <h2 ref={colorparagraph}> Welcome to my Page</h2>
    </div>
  )
}

export default Useref;