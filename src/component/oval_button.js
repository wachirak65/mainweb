import React from 'react';
import './oval_button.css'

function OvalButton(props){
    return (
        <div style={{backgroundColor:props.color}} class="oval-btn" onClick = {props.next_route}>
            <p>{props.title}</p>
        </div>
    );
}

export default OvalButton;