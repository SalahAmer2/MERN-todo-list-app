import React, { useState, useEffect, useRef } from "react";
// import DateTimePicker from 'react-datetime-picker'
import ResponsiveDateTimePickers from "../date-time-picker/date-time-picker.component";
import StarIconSelected from "../../SVGs/starIconSelected/starIconSelected.svg";
import StarIconUnselected from "../../SVGs/starIconUnselected/starIconUnselected.svg";
import ToDoList from "../todoList/todoList.component";

import axios from 'axios';

import { useHistory } from "react-router-dom";

import './home.styles.css'

function Home() {

    let history = useHistory();

    const nameRef = useRef();
    const taskRef = useRef();
    const dateRef = useRef();

    const [state, setState] = useState(
        {
            name: "",
            tasks: [],
            date: "",
            starredOrNot: false,
            // priorityLetter: "b",
            // priorityNumber: 0,
            todoLists: []
        }
    )

    useEffect(() => {
        getToDoLists();

        // getToDoLists().then((dataOfToDoLists) => {
        //     setState(prevState => {
        //         return {
        //             ...prevState,
        //             todoLists: dataOfToDoLists
        //         };
        //     });
        // })
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

    // const [currentTasks, setCurrentTask] = useState(
    //     [
    //         't', 'n', 'm'
    //     ]
    // )

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

    // const [dateValue, setDateValue] = useState(new Date());

    // const handleDateChange = (event) => {
    //     const { value } = event.target;

    //     setDateValue(() => {
    //         return (
    //             value
    //         );
    //     });
    // }

    // const StarIconUnselected = () => (
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="#FFFFFF"
    //         stroke="#CAA53D"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //     >
    //         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    //     </svg>
    // )

    // const StarIconSelected = () => (
    //     <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="24"
    //         height="24"
    //         viewBox="0 0 24 24"
    //         fill="#CAA53D"
    //         stroke="#CAA53D"
    //         strokeWidth="2"
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //     >
    //         <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    //     </svg>
    // )

    const star = state.starredOrNot ? <StarIconSelected /> : <StarIconUnselected />;

    const handleStar = () => {
        setState(prevState => {
            return {
                ...prevState,
                starredOrNot: !state.starredOrNot,
                // priorityLetter: state.starredOrNot ? "b" : "a"
            };
        });
    }

    // const sortByIndexFunc = () => {
    //     state.todoLists.map((todoList, index) => {
    //         setState(prevState => {
    //             return {
    //                 ...prevState,
    //                 priorityNumber: index
    //             };
    //         });
    //     })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();

        // const create_UUID = () => {
        //     var dt = new Date().getTime();
        //     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        //         var r = (dt + Math.random() * 16) % 16 | 0;
        //         dt = Math.floor(dt / 16);
        //         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        //     });
        //     return uuid;
        // }

        // // id generated by create_UUID function
        // const currentId = create_UUID();

        // addingList_id(todoList, currentId);

        // setState(prevState => {
        //     return {
        //         ...prevState,
        //         todoLists: [
        //             ...state.todoLists,
        //             {
        //                 name: nameRef.current.value,
        //                 tasks: state.tasks,
        //                 date: dateRef.current.value,
        //                 starredOrNot: state.starredOrNot,
        //                 todoList_id: currentId
        //             }
        //         ]
        //     };
        // });
        // if (state.todoLists.length) {
        //     sortByIndexFunc();
        // }

        if (state.tasks.length && nameRef.current.value.trim().length) {
            const payload = {
                name: nameRef.current.value,
                tasks: state.tasks,
                date: dateRef.current.value,
                starredOrNot: state.starredOrNot,
                // priorityLetter: state.priorityLetter,
                // priorityNumber: state.priorityNumber
            };

            axios({
                url: '/api/save',
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

                    {/* <label htmlFor="name">Name of ToDo list</label><br/> */}
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
                    {/* <input type="submit" value="Submit" onClick={handleSubmit} /> */}
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

// {
//     (state.todoLists.length) ?
//         state.todoLists.sort((a, b) => {
//             return (a.priorityLetter > b.priorityLetter) ? ((a.priorityNumber > b.priorityNumber) ? 1 : -1) : -1
//         }).map((todoList, index) => {
//             return <ToDoList
//                 className='todoList'
//                 key={index}
//                 todoListData={todoList}
//                 onDelete={() => { deleteTrip(state.todoLists[index]._id) }}
//             />
//         })
//         : null
// }

// (state.todoLists.length) ?
//     state.todoLists.sort((a, b) => {
//         return (a.priorityLetter > b.priorityLetter) ? 1 : -1
//     }).map((todoList, index) => {
//         return <ToDoList
//             className='todoList'
//             key={index}
//             todoListData={todoList}
//             onDelete={() => { deleteTrip(state.todoLists[index]._id) }}
//         />
//     })
//     : null