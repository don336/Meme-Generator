import React from 'react'
import memeData from "../memeData"

let url
function Meme() {
  const getMemeImage = ()=>{
    const memesArray = memeData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
   url = memesArray[randomNumber].url
    console.log(url)
  }
  return (
    <main>
        <form className='form'>
            <input type="text" className='form--input' placeholder='Top'/>
            <input type="text"  className='form--input' placeholder='bottom text'/>
            <button className='form--button' onClick={getMemeImage}>Get a new image</button>
        </form>
    </main>
  )
}

export default Meme