// import './home.css';
import React, { useState } from "react";

function Home() {

    const [todoLists, setTodoLists] = useState(
        [
            {
                name: "",
                tasks: [],
                date: "",
                starredOrNot: false
            }
        ]
    )

    const [currentTasks, setCurrentTask] = useState(
        [
            't', 'n', 'm'
        ]
    )

    const handleChange = (event) => {
        const { value } = event.target;

        setCurrentTask(prevTasks => {
            return [
                ...prevTasks,
                value
            ];
        });
    }

    const func = () => {
        for (let index = 0; index < currentTasks.length; index++) {
            <div key={index} className="box">
                <span>
                    {currentTasks[index]}
                </span>
                <input
                    type="button"
                    value="Delete"
                    className="task_deleter"
                />
            </div>
        }
    }

    return (
        <div className="home">
            {/* ToDo list adder */}
            <div>
                <form>
                    {/* <label htmlFor="name">Name of ToDo list</label><br/> */}
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name of ToDo list"
                    />
                    <br />

                    {
                        currentTasks.map((task, i) => {
                            return (
                                <div key={i} className="box">
                                    <span>
                                        {currentTasks[i]}
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
                        id="task"
                        name="task"
                        placeholder="task"
                        onChange={handleChange}
                    />

                    <div className="add_task" >+</div>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
}

export default Home;

// {
//     currentTasks.forEach((task, index) => {
//         return (
//             <div key={index} className="box">
//                 <span>
//                     {currentTasks[index]}
//                 </span>
//                 <input
//                     type="button"
//                     value="Delete"
//                     className="task_deleter"
//                 />
//             </div>
//         )
//     })
// }

// {
//     currentTasks.map((task, i) => {
//         return (
//             <div key={i} className="box">
//                 <span>
//                     {currentTasks.tasks}
//                 </span>
//                 {/* <input
//                                         type="text"
//                                         id="task"
//                                         name="task"
//                                         placeholder="task"
//                                         value={task}

//                                     /> */}
//                 <input
//                     type="button"
//                     value="Delete"
//                     className="task_deleter"
//                 />
//             </div>
//         )
//     })
// }

// {
//     todoLists.map((todoList, i) => {
//         return (
//             <div key={i} className="box">
//                 <input
//                     type="text"
//                     id="task"
//                     name="task"
//                     placeholder="task"
//                     value={todoList.tasks}

//                 />
//                 <input
//                     type="button"
//                     value="Delete"
//                     className="task_deleter"
//                 />
//             </div>
//         )
//     })
// }