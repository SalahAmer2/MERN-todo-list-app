import React from 'react';

import './listName.styles.css'

const ListName = (props) => {
    return (

        <div className='listName'>
            <h3>
                {props.name}
            </h3>
        </div>
    )
}

export default ListName;