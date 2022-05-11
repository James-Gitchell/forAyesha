import React from "react";
import imgData from "../imgData"

export default function Main(){
const [getCoupleImage, setGetCoupleImage] = React.useState("");
    ///let src;
    
    function getOurImage() {
        const ourImgArray = imgData.data.ourImg
        const randomNumber = Math.floor(Math.random() * ourImgArray.length)
        setGetCoupleImage(ourImgArray[randomNumber].src);
        
    }

    return (
       <div className="button--container"> 
            <button 
                onClick={getOurImage}>
            </button>
             <img src={getCoupleImage} />
             <img src="./images/asset1.jpg" />
          </div> 
    )

}
/*(for-ayesha\src\images\asset1.jpg)*/
