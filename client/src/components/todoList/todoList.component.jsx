import React from "react";

import Button from './components-of-todoList/button/button.component';
import ClearIcon from '@material-ui/icons/Clear';
import ListName from "./components-of-todoList/listName/listName.component";
import TaskList from "./components-of-todoList/taskList/taskList.component";
import Date from "./components-of-todoList/date/date.component";
import StarredOrNot from "./components-of-todoList/starredOrNot/starredOrNot.component";

import './todoList.styles.css'

const ToDoList = ({ todoListData, onDelete }) => {

    const handleClickDeletingToDoList = () => {
        onDelete();
    }

    return (
        <div className={`todoListHolder`} >
            <ClearIcon
                style={{ cursor: "pointer", float: 'right', marginRight: '10px', marginLeft: '1000px' }}
                onClick={handleClickDeletingToDoList}
            />
            {/* <ClearIcon>
                <Button onDelete={onDelete} />
            </ClearIcon> */}
            {/* <Button onDelete={onDelete} /> */}
            <ListName name={todoListData.name} />
            <TaskList tasks={todoListData.tasks} />
            <Date date={todoListData.date} />
            <StarredOrNot starredOrNot={todoListData.starredOrNot} />
        </div>
    )
}

export default ToDoList;