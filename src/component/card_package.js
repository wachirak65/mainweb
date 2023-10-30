import React from 'react';
import './card_package.css'

function PackageCard (props) {
    return (
        <div class='card-pack'>
            {props.icon_pack}
            <h2>{props.package_name}</h2>
            <p>{props.package_title}</p>
        </div>
    );
}

export default PackageCard;