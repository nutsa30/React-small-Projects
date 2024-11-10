

import React, { useState } from 'react';

function NumberButtons() {
    const [num1,setNum1]=useState(20)
    const [num2,setNum2]=useState(64)
    const [num3,setNum3]=useState(33)

    function handleButtonClick(numType) {
        if (numType === 1) {
          setNum1((prevNum) => prevNum + 3);
        } else if (numType === 2) {
          setNum2((prevNum) => prevNum / 2);
        } else if (numType === 3) {
          setNum3((prevNum) => prevNum - 5);
        }
      }
  return (
    <>
    <div className='Number-Buttons'>
     <button onClick={()=>handleButtonClick(1)} className="Number-Button">{num1}</button>
     <button onClick={()=>handleButtonClick(2)} className="Number-Button">{num2}</button>
     <button onClick={()=>handleButtonClick(3)} className="Number-Button">{num3}</button>

    </div>
    </>
  )
}

export default NumberButtons
