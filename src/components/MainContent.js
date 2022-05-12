import React from "react"
import ourImgData from "../ourImgData";

export default function MainContent(){
const [getImg , setGetImg] = React.useState("");

    function getUsImage(){
        const ourArr = ourImgData.data.ourImages
        const randomNumber = Math.floor(Math.random() * ourArr.length)
        setGetImg(ourArr[randomNumber].url)
    }

    return(
        <div className="fix">
           <div className="container">

           <button onClick={getUsImage} className="img--button">
              <h3>Best life ever!!!</h3>
           </button>
           <img src={getImg} className="button--img" />
        </div>
        </div>
    )
}