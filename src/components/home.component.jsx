// import './home.css';
import React, { useState, useRef } from "react";
import DateTimePicker from 'react-datetime-picker'

function Home() {

    const nameRef = useRef();
    const taskRef = useRef();

    const [state, setState] = useState(
        {
            name: "",
            tasks: ['t', 'n', 'm'],
            date: "",
            starredOrNot: false,
            todoLists: []
        }
    )

    // const [currentTasks, setCurrentTask] = useState(
    //     [
    //         't', 'n', 'm'
    //     ]
    // )

    const submitTask = (event) => {
        event.preventDefault();

        setState(prevState => {
            return {
                ...prevState,
                tasks: [
                    ...state.tasks,
                    taskRef.current.value
                ]
            };
        });
    }

    const [dateValue, onChange] = useState(new Date());

    return (
        <div className="home">
            {/* ToDo list adder */}
            <div>
                <form>
                    {/* <label htmlFor="name">Name of ToDo list</label><br/> */}
                    <input
                        type="text"
                        id="name"
                        placeholder="Name of ToDo list"
                        ref={nameRef}
                    />
                    <br />

                    {
                        state.tasks.map((task, i) => {
                            return (
                                <div key={i} className="box">
                                    <span>
                                        {state.tasks[i]}
                                    </span>
                                    <input
                                        type="button"
                                        value="Delete"
                                        className="task_deleter"
                                    />
                                </div>
                            )
                        })
                    }

                    <input
                        type="text"
                        id="tasks"
                        placeholder="add task"
                        ref={taskRef}
                    />

                    <button className="add_task" onClick={submitTask}>+</button><br />

                    <DateTimePicker
                        onChange={onChange}
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Home;