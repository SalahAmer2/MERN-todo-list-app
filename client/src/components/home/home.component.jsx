import React, { useState, useEffect, useRef } from "react";
import ResponsiveDateTimePickers from "../date-time-picker/date-time-picker.component";
import StarIconSelected from "../../SVGs/starIconSelected/starIconSelected.svg";
import StarIconUnselected from "../../SVGs/starIconUnselected/starIconUnselected.svg";
import ToDoList from "../todoList/todoList.component";

import axios from 'axios';

import './home.styles.css'

function Home() {

    const nameRef = useRef();
    const taskRef = useRef();
    const dateRef = useRef();

    const [state, setState] = useState(
        {
            name: "",
            tasks: [],
            date: "",
            starredOrNot: false,
            todoLists: []
        }
    )

    useEffect(() => {
        getToDoLists();
    }, []);

    const getToDoLists = () => {
        axios.get('/api')
            .then((response) => {
                const data = JSON.stringify(response.data);
                console.log('Data has been received!');
                console.log('Data: ' + data);
                const todoListData = JSON.parse(data);
                setState(prevState => {
                    return {
                        ...prevState,
                        todoLists: todoListData
                    };
                });
            })
            .catch(() => {
                alert('Error retrieving data!');
            });
    }

    const [currentTask, setCurrentTask] = useState("");

    const handleCurrentTaskChange = (event) => {
        const { value } = event.target;

        setCurrentTask(() => {
            return (
                value
            );
        });
    }

    const deleteTrip = (_id) => {

        axios.delete(`/api/todoList/${_id}/delete`)
            .then((response) => {
                console.log(response);

                setState(prevState => {
                    return {
                        ...prevState,
                        todoLists: state.todoLists.filter((todoList) => {
                            return todoList._id !== _id;
                        })
                    };
                });
            })
            .catch((err) => {
                console.log('Error while trying to delete todoList: ' + err);
            })

    };

    const handleClickDeletingTask = (index) => {

        setState(prevState => {
            return {
                ...prevState,
                tasks: state.tasks.filter((task) => {
                    return state.tasks.indexOf(task) !== index;
                })
            };
        });

    }

    const submitTask = (event) => {
        event.preventDefault();

        if (taskRef.current.value.trim().length) {
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
    }

    const star = state.starredOrNot ? <StarIconSelected /> : <StarIconUnselected />;

    const handleStar = () => {
        setState(prevState => {
            return {
                ...prevState,
                starredOrNot: !state.starredOrNot,
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (state.tasks.length && nameRef.current.value.trim().length) {
            const payload = {
                name: nameRef.current.value,
                tasks: state.tasks,
                date: dateRef.current.value,
                starredOrNot: state.starredOrNot,
            };

            axios({
                url: '/api/save/todoList',
                method: 'POST',
                data: payload
            })
                .then(() => {
                    console.log('Data has been sent to the server');
                    getToDoLists();
                })
                .catch(() => {
                    console.log('Internal server error');
                });
        } else {
            alert('Empty todo-list name/tasks');
        }

        setState(prevState => {
            return {
                ...prevState,
                tasks: []
            };
        });

        // history.push('/api/save')
    }

    // Get the starred todoLists
    let starredToDoLists = state.todoLists.filter(todoList => todoList.starredOrNot === true);

    // Get the others
    let notStarredToDoLists = state.todoLists.filter(todoList => todoList.starredOrNot !== true);

    // Create the final ordered list
    let todoListsOrdered = starredToDoLists.concat(notStarredToDoLists);

    return (
        <div className="home">
            {/* ToDo list adder */}
            <div>
                <form>
                    <br />

                    <input
                        type="text"
                        id="name"
                        placeholder="Name of ToDo list"
                        ref={nameRef}
                    />
                    <br /><br />

                    {
                        state.tasks.map((task, index) => {
                            return (
                                <div key={index} className="box">
                                    <span>
                                        {state.tasks[index]}
                                    </span>
                                    <button
                                        className="task_deleter"
                                        onClick={() => { handleClickDeletingTask(index) }}
                                    >x</button>
                                </div>
                            )
                        })
                    }

                    <br />

                    <input
                        className='tasksInput'
                        type="text"
                        id="tasks"
                        placeholder="add task"
                        value={currentTask}
                        ref={taskRef}
                        onChange={handleCurrentTaskChange}
                    />

                    <button className="addTaskBtn" onClick={submitTask}>+</button><br /><br />

                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <ResponsiveDateTimePickers
                            ref={dateRef}
                        />
                    </div>

                    <br /><br />

                    <div
                        className='star'
                        onClick={handleStar}
                    >
                        {star}
                    </div>

                    <br />

                    <button className='submitBtn' type="submit" onClick={handleSubmit} >Submit</button>
                </form>
                <br />

                <hr /><br />

                <div className="allToDoListsHolder">
                    {
                        (state.todoLists.length) ?
                            todoListsOrdered.map((todoList, index) => {
                                return <ToDoList
                                    className='todoList'
                                    key={index}
                                    todoListData={todoList}
                                    onDelete={() => { deleteTrip(state.todoLists[index]._id) }}
                                />
                            })
                            : null
                    }
                </div>

            </div>
            <h2 className='separator'></h2>
        </div>
    );
}

export default Home;