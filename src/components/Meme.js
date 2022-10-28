import React from 'react'

function Meme() {
  return (
    <main>
        <form className='form'>
            <input type="text" className='form--input' placeholder='Top'/>
            <input type="text"  className='form--input' placeholder='bottom text'/>
            <button className='form--button'>Get a new image</button>
        </form>
    </main>
  )
}

export default Meme