import React from "react";
import { ListTodo } from "lucide-react";

export default function MissedTasks({ missedYou, missedDivya }) {
  return (
    <div className="bg-white rounded-3xl shadow p-4 border border-violet-100 sticky top-4">
      <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
        <ListTodo className="w-5 h-5" /> Missed
      </h2>
      <div className="space-y-4">
        <div>
          <p className="text-xs font-semibold text-slate-500">You</p>
          {missedYou.length === 0 ? (
            <p className="text-sm opacity-70">No misses 🎉</p>
          ) : (
            <ul className="text-sm list-disc ml-5 mt-1 space-y-1">
              {missedYou.map((m) => (
                <li key={`you-${m.time}-${m.you}`}>
                  <span className="font-mono text-xs bg-sky-50 px-1 py-0.5 rounded">{m.time}</span> {m.you}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-500">Divya</p>
          {missedDivya.length === 0 ? (
            <p className="text-sm opacity-70">No misses 🌷</p>
          ) : (
            <ul className="text-sm list-disc ml-5 mt-1 space-y-1">
              {missedDivya.map((m) => (
                <li key={`divya-${m.time}-${m.divya}`}>
                  <span className="font-mono text-xs bg-pink-50 px-1 py-0.5 rounded">{m.time}</span> {m.divya}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
