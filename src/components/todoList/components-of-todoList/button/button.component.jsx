import React from 'react';

import './button.styles.css'

const Button = (props) => {

    const handleClick = () => {
        props.onDelete(props.todoList_id);
    }

    return (
        <div>
            <button className='deleteXbtn'
                onClick={handleClick}
            > X </button>
        </div>
    )
}

export default Button;