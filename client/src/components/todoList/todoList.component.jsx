import React from "react";

import Button from './components-of-todoList/button/button.component';
import ListName from "./components-of-todoList/listName/listName.component";
import TaskList from "./components-of-todoList/taskList/taskList.component";
import Date from "./components-of-todoList/date/date.component";
import StarredOrNot from "./components-of-todoList/starredOrNot/starredOrNot.component";

import './todoList.styles.css'

const ToDoList = ({ todoListData, onDelete }) => {

    return (
        <div className={`todoListHolder`} >
            <Button onDelete={onDelete} />
            <ListName name={todoListData.name} />
            <TaskList tasks={todoListData.tasks} />
            <Date date={todoListData.date} />
            <StarredOrNot starredOrNot={todoListData.starredOrNot} />
        </div>
    )
}

export default ToDoList;