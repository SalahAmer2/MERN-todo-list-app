import React from "react";

import Button from './components-of-todoList/button/button.component';
import ListName from "./components-of-todoList/listName/listName.component";
import TaskList from "./components-of-todoList/taskList/taskList.component";
import Date from "./components-of-todoList/date/date.component";
import StarredOrNot from "./components-of-todoList/starredOrNot/starredOrNot.component";

const ToDoList = ({ todoListData, onDelete }) => {

    return (
        // <div className={`entryHolder${item ? ' entryHolder-drop' : ''}`} id={`${todoList_id}`}>
        <div className={`todoListHolder`} >
            <Button onDelete={onDelete} />
            <ListName name={todoListData.name} />
            <TaskList tasks={todoListData.tasks} />
            <Date date={todoListData.date} />
            <StarredOrNot starredOrNot={todoListData.starredOrNot} />
            {/* <CityPhoto cityPhoto={todoListData.cityPhoto} />
            <TodaysDate date={todoListData.date} />
            <Country country={todoListData.country} />
            <DepDate depDate={todoListData.depDate} />
            <RetDate retDate={todoListData.retDate} />
            <DaysLeft daysLeft={todoListData.daysLeft} />
            <Weather weather={todoListData.weather} />
            {
                trueOrFalse ?
                    <React.Fragment>
                        <Low_Temp low_temp={todoListData.temp.low_temp} />
                        <Max_Temp max_temp={todoListData.temp.max_temp} />
                    </React.Fragment>
                    :
                    <Temp temp={todoListData.temp.temp} />
            } */}
        </div>
    )
}

export default ToDoList;