import { useState } from "react";

function FromScratch() {

  const [items, setItems] = useState([
  
  
  ]);

  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() === "") return;

    const newItem = {
      id: Date.now(),
      taskname: newTask,
      completed: false,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setNewTask("");
  };

  return (
    <div>
      <h1 className="text-center text-2xl p-8">Now it's my turn</h1>

      <div className="flex justify-center items-center flex-col">
        <input
          type="text"
          placeholder="Give your insights a name"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border-white border-2 rounded-lg p-4 text-center text-white font-semibold w-1/2"
        />
        <button
          onClick={handleAddTask}
          className="p-4 m-4 bg-slate-400/40 border-8 rounded-3xl border-slate-600 hover:bg-slate-100 w-[200px]"
        >
          Insert
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="text-center text-xl font-semibold py-4">
            {item.taskname} {item.completed ? "✅" : "❌"}
            <p>{item.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FromScratch;
