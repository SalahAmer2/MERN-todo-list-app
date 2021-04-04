import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import './button.styles.css'

const Button = (props) => {

    const handleClickDeletingToDoList = () => {
        props.onDelete();
    }

    return (
        <div>
            <ClearIcon className='deleteXbtn'
                onClick={handleClickDeletingToDoList}
            />
        </div>
    )
}

export default Button;