import React, { useState } from 'react'
import './Journal.css'
import Mood from '../Mood/Mood'
import thumb from '../../assets/good.svg'
import thumbdown from '../../assets/bad.svg'
const Journal = () => {

    const [text, setText] = useState("")
    const [mood, setMood] = useState("")

    function submitJournal(e) {
        console.log({text});
        console.log({mood});
    }    

    return (  
        <div className="container">
            <h2>New Journal entry</h2>
            <textarea value={text} onChange={(event) => setText(event.target.value) }></textarea>
            <button onClick={() => setMood("0")}><Mood tag={thumb}>good</Mood></button>
            <button onClick={() => setMood("1")}><Mood tag={thumbdown}></Mood></button>
            <button onClick={submitJournal}>Submit</button>
        </div>
    );
}
 
export default Journal;