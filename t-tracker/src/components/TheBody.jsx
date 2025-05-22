import { useState } from "react";

const TheBody = () => {
    const [newTask, setNewTask] = useState("");
    const [tasksList, setTasksList] = useState([
        {id: 1, taskName: "Task 1", isCompleted: false}, 
        {id: 2, taskName: "Task 2", isCompleted: false}, 
        {id: 3, taskName: "Task 3", isCompleted: false}
    ]);

    function addTask() {
        if (newTask.trim() === "") {
            alert("Please type something");
            return;
        }
        
        const lastId = tasksList.length > 0 ? tasksList[tasksList.length - 1].id : 0;
        setTasksList((prev) => [...prev, {taskName: newTask, id: lastId + 1, isCompleted: false}]);
        setNewTask("");
    }

    function deleteTask(id) {
        setTasksList((prev) => prev.filter((task) => task.id !== id));
    }

    function completeTask(id) {
        setTasksList((prev) => 
             prev.map((task) => 
                task.id === id ? {...task, isCompleted: true} : task
            
        ))
    } 

    return (
        <div className="p-16 text-center justify-center items-center  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            <h1 className="text-white text-2xl animate-bounce font-semibold">What's on our plate today?</h1>
           
            <div className="flex justify-center items-center flex-col">
                <input 
                    type="text" 
                    placeholder="Feed me, mother!" 
                    className="p-4 mt-8 rounded-lg text-center text-white font-semibold w-1/2 border-white border-1" 
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTask}
                />
            
           
                <button 
                    className="text-white font-bold p-4 bg-purple-600/70 rounded-lg mt-8 hover:bg-red-700 transition duration-300 ease-in-out"
                    onClick={addTask}>
                    Add to my queue
                </button>
            </div>
            
            
            <ul className="pt-8">
              {tasksList.map((task) => (
                <li key={task.id} className="text-white text-xl font-semibold py-4">
                  {task.taskName}
                  <p className="text-sm py-2">Is completed? {task.isCompleted ? " yes" : " no"}</p>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-amber-50/30 p-2 rounded-xl mx-4 hover:bg-amber-300/30">
                        Delete
                    </button>
                    <button
                        onClick={() => completeTask(task.id)}
                        className="bg-amber-50/30 p-2 rounded-xl mx-4 hover:bg-amber-300/30">
                        Complete
                    </button>
                </li>
              ))}
            </ul>
        </div>
    )
}

export default TheBody;