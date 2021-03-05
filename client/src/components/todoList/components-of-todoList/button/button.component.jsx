import React from 'react';

import './button.styles.css'

const Button = (props) => {

    const handleClickDeletingToDoList = () => {
        props.onDelete();
    }

    return (
        <div>
            <button className='deleteXbtn'
                onClick={handleClickDeletingToDoList}
            > X </button>
        </div>
    )
}

export default Button;