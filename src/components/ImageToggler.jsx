import { useState } from "react"
import localImage from "../assets/images.jpg"

function ImageToggler() {
    const [isImageVisible, setIsImageVisible] = useState(false);
    function toggleImageVisibility() {
        setIsImageVisible(isImageVisible => !isImageVisible);
      }

    return(
     <>
     <button onClick={toggleImageVisibility} className="imageTogglerButton">{isImageVisible ? "Hide Image" : "Show Image"}</button>
     {isImageVisible && <img src={localImage} alt="" />}
     </>
    )
  
  }
  export default ImageToggler