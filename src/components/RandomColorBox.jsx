import { useState } from "react"

function RandomColorBox() {
    const [backgroundColor,setbackgroundColor]=useState("black")
    function generateRandomColor(){
        const random1=Math.floor(Math.random()*256)
        const random2=Math.floor(Math.random()*256)
        const random3=Math.floor(Math.random()*256)
    
   
        const randomColor="rgb(" +random1+ "," +random2+ "," +random3+ ")"
        setbackgroundColor(randomColor)
    }



    return(
     <div onClick={generateRandomColor} className="RandomColorBox"
     style={{backgroundColor:backgroundColor}}
     >
       
     </div>
    )
  
  }
  export default RandomColorBox
  

