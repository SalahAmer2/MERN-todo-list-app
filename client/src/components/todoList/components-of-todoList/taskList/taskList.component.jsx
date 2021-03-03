import React from 'react';

import './taskList.styles.css'

const TaskList = (props) => {
    return (
        <div className='taskList'>
            {
                props.tasks.map((task, index) => {
                    return (
                        <div key={index} className='task'>{props.tasks[index]}</div>
                    )
                })
            }
            {/* {
                <div className='task'>{props.tasks[0]}</div>
            } */}
        </div>
    )
}

export default TaskList;