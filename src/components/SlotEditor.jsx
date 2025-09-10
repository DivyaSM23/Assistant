import React, { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

export default function SlotEditor({ slots, setSlots }) {
  const [editing, setEditing] = useState(false);

  const updateSlot = (index, key, value) => {
    const newSlots = slots.map((slot, i) => (i === index ? { ...slot, [key]: value } : slot));
    setSlots(newSlots);
  };

  const addSlot = () => setSlots([...slots, { time: "12:00 - 13:00", you: "New Task", divya: "New Task" }]);
  const deleteSlot = (index) => setSlots(slots.filter((_, i) => i !== index));

  return (
    <div className="bg-white rounded-3xl shadow p-4 border border-sky-100">
      <h2 className="font-bold text-lg mb-3 flex items-center gap-2">
        Slots Editor
      </h2>
      {slots.map((slot, i) => (
        <div key={i} className="flex items-center gap-2 mb-2">
          <input
            className="flex-1 text-sm border rounded-lg px-2 py-1"
            value={slot.time}
            onChange={(e) => updateSlot(i, "time", e.target.value)}
          />
          <input
            className="flex-1 text-sm border rounded-lg px-2 py-1"
            value={slot.you}
            onChange={(e) => updateSlot(i, "you", e.target.value)}
          />
          <input
            className="flex-1 text-sm border rounded-lg px-2 py-1"
            value={slot.divya}
            onChange={(e) => updateSlot(i, "divya", e.target.value)}
          />
          <button onClick={() => deleteSlot(i)}><Trash2 className="w-4 h-4 text-red-500" /></button>
        </div>
      ))}
      <button onClick={addSlot} className="flex items-center gap-2 text-sm px-2 py-1 rounded bg-sky-100">
        <Plus className="w-4 h-4" /> Add Slot
      </button>
    </div>
  );
}
