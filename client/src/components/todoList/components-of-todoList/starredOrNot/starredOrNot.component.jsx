import React from 'react';

import './starredOrNot.styles.css'

import StarIconSelected from "../../../../SVGs/starIconSelected/starIconSelected.svg";
import StarIconUnselected from "../../../../SVGs/starIconUnselected/starIconUnselected.svg";

const StarredOrNot = (props) => {
    return (
        <div className='starredOrNot'>
            {props.starredOrNot ? <StarIconSelected /> : <StarIconUnselected />}
        </div>
    )
}

export default StarredOrNot;