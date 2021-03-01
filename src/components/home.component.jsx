import './home.component.css';
import React, { useState, useRef } from "react";
import DateTimePicker from 'react-datetime-picker'

function Home() {

    const nameRef = useRef();
    const taskRef = useRef();
    const dateRef = useRef();

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

    const [currentTask, setCurrentTask] = useState("");

    const handleChange = (event) => {
        const { value } = event.target;

        setCurrentTask(() => {
            return (
                value
            );
        });
    }

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

        setCurrentTask(() => {
            return (
                ""
            )
        });
    }

    const [dateValue, onChange] = useState(new Date());

    const StarIconUnselected = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#FFFFFF"
            stroke="#CAA53D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )

    const StarIconSelected = () => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#CAA53D"
            stroke="#CAA53D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    )

    const star = state.starredOrNot ? <StarIconSelected /> : <StarIconUnselected />;

    const handleStar = () => {
        setState(prevState => {
            return {
                ...prevState,
                starredOrNot: !state.starredOrNot
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setState(prevState => {
            return {
                ...prevState,
                todoLists: [
                    ...state.todoLists,
                    {
                        name: nameRef.current.value,
                        tasks: state.tasks,
                        date: dateRef.current.value,
                        starredOrNot: state.starredOrNot
                    }
                ]
            };
        });
    }

    return (
        <div className="home">
            {/* ToDo list adder */}
            <div>
                <form>
                    <br />

                    {/* <label htmlFor="name">Name of ToDo list</label><br/> */}
                    <input
                        type="text"
                        id="name"
                        placeholder="Name of ToDo list"
                        ref={nameRef}
                    />
                    <br /><br />

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

                    <br />

                    <input
                        type="text"
                        id="tasks"
                        placeholder="add task"
                        value={currentTask}
                        ref={taskRef}
                        onChange={handleChange}
                    />

                    <button className="add_task" onClick={submitTask}>+</button><br /><br />

                    <DateTimePicker
                        onChange={onChange}
                        ref={dateRef}
                    />

                    <br /><br />

                    <div
                        onClick={handleStar}
                    >
                        {star}
                    </div>

                    <br />

                    <input type="submit" value="Submit" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default Home;