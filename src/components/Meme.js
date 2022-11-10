import React, {useState} from 'react'
import memeData from "../memeData"


function Meme() {

// const [memeImage, setMemeImage ]= useState("https://i.imgflip.com/1bij.jpg")
const [meme, setMeme] = useState({
  topText: "", 
  bottomText: "",
  randomImage: "https://i.imgflip.com/1bij.jpg"
})

const [allMemeImages, setAllMemeImages] = useState(memeData)
  const getMemeImage = ()=>{
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
   setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
   }))
    
  }
  return (
    <main>
        <div className='form'>
            <input type="text" className='form--input' placeholder='Top'/>
            <input type="text"  className='form--input' placeholder='bottom text'/>
            <button className='form--button' onClick={getMemeImage}>Get a new image 🖼</button>
        </div>
        <img src={meme.randomImage} className="meme--image"/>
    </main>
  )
}

export default Meme