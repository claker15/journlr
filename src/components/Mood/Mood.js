import React from 'react'
import './Mood.css'

const Mood = (props) => {
    
    return (  
       <img src={props.tag}></img>
    );
}
 
export default Mood;