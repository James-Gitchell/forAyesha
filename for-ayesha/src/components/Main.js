import React from "react";
import imgData from "../imgData"

export default function Main(props){
    
    let src;
    
    function getOurImage() {
        const ourImgArray = imgData.data.ourImg
        const randomNumber = Math.floor(Math.random() * ourImgArray.length)
        src = ourImgArray[randomNumber].src
        
    }

    return (
        <>
         <button 
            onClick={getOurImage}>
         </button>
         <p>{src}</p>
           </>
    )

}
/*

    let url
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }
    
    return (
        <main>
            <p>{url}</p>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
        </main>
    )
}*/