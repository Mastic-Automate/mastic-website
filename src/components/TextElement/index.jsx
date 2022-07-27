import React from "react";
import './styles.css'

function TextElement(props) {
    return (
        <div className='section-text'>
            <h1> {props.title} </h1>
            {props.text}
        </div>
    );
}

export default TextElement;