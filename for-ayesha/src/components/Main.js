import React from "react";
import imgData from "../imgData";



export default function Main(){
const [getCoupleImage, setGetCoupleImage] = React.useState("");
    
    
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
            <img src={getCoupleImage} alt="prop"/>
          
          </div> 

    )

}

