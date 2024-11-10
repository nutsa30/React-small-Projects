import { useState } from "react"

function Widthbox() {
  const [num,setNum]=useState(300)
   
  function widthChangeButton(){
      setNum(prevNum => prevNum + 10)
  }  
      
      return( 
        <>
        <div 
          className="width-box-div"
          style={{width:`${num}px`}}
          >
          <button onClick={widthChangeButton} className="width-box-button">
            Click
          </button>
        </div>
      </>
    );
  }
  export default Widthbox
  
