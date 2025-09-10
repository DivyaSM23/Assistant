import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../config";

export default function TodoList({ date }) {
  const [todos, setTodos] = useState({ you: [], divya: [] });
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/todos/${date}`)
      .then((res) => res.json())
      .then((data) => setTodos(data || { you: [], divya: [] }));
  }, [date]);

  const saveTodos = (newTodos) => {
    setTodos(newTodos);
    fetch(`${API_BASE_URL}/todos/${date}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTodos),
    });
  };

  const addTodo = (who) => {
    if (!input.trim()) return;
    const newTodos = { ...todos, [who]: [...todos[who], input] };
    saveTodos(newTodos);
    setInput("");
  };

  return (
    <div className="bg-white rounded-2xl shadow p-4">
      <h2 className="text-lg font-bold mb-2">📝 To-Do List</h2>
      <input
        className="border rounded px-2 py-1 w-full mb-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New task..."
      />
      <div className="flex gap-2 mb-4">
        <button onClick={() => addTodo("you")} className="bg-pink-100 px-3 py-1 rounded">
          Add (You)
        </button>
        <button onClick={() => addTodo("divya")} className="bg-blue-100 px-3 py-1 rounded">
          Add (Divya)
        </button>
      </div>
      <div>
        <h3 className="font-semibold">You</h3>
        <ul className="list-disc list-inside text-sm">
          {todos.you.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <h3 className="font-semibold mt-2">Divya</h3>
        <ul className="list-disc list-inside text-sm">
          {todos.divya.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
