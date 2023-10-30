import React from 'react';
import './back_btn.css'

function Back_btn (props) {
    
    return (
        <div style={{backgroundColor:props.bg_color}}  class='back-btn' onClick={props.onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            <p>{props.title}</p>
        </div>
    )
}

export default Back_btn;