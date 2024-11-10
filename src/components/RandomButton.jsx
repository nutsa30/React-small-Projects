import { useState } from "react"

function RandomBUtton() {


    const [num,setNum]=useState(0)

    function generateRandomNUmber(){
        setNum(Math.floor(Math.random() * 101));
    }

    return(
    <>
    <button onClick={generateRandomNUmber} className="Random-Button">{num}</button>
    
    </>
    )
  
  }
  export default RandomBUtton
  

