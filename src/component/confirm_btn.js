import React from 'react';
import './confirm_btn.css'
function Confirm_btn (props) {
    
    return (
        <div style={{backgroundColor:props.bg_color}}  class='confirm-btn' onClick={props.onClick}>
            <p>{props.title}</p>
        </div>
    )
}

export default Confirm_btn;