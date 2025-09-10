import React, { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Heart,
  CalendarClock,
} from "lucide-react";
import SlotList from "./components/SlotList";
import SlotEditor from "./components/SlotEditor";
import TodoList from "./components/TodoList";
import { API_BASE_URL } from "./config";

// --- Helpers
export const dateKey = (d = new Date()) => d.toISOString().slice(0, 10);

export default function CuteSchedule() {
  const [date, setDate] = useState(new Date());
  const [showOnlyPending, setShowOnlyPending] = useState(false);
  const [slots, setSlots] = useState([]);
  const todayKey = dateKey(date);

  // --- Fetch slots from backend
  useEffect(() => {
    fetch(`${API_BASE_URL}/slots/${todayKey}`)
      .then((res) => res.json())
      .then((data) => setSlots(data || []));
  }, [todayKey]);

  const saveSlots = (newSlots) => {
    setSlots(newSlots);
    fetch(`${API_BASE_URL}/slots/${todayKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSlots),
    });
  };

  const changeDay = (delta) => {
    setDate((d) => {
      const newDate = new Date(d);
      newDate.setDate(newDate.getDate() + delta);
      return newDate;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-rose-50 to-sky-50 text-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-2">
              <span>🌸 Cute Hourly Schedule</span>
              <Heart className="w-6 h-6 text-pink-500" />
            </h1>
            <p className="text-sm opacity-70 mt-1 flex items-center gap-2">
              <CalendarClock className="w-4 h-4" />
              <span>Day: {todayKey}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => changeDay(-1)}
              className="p-2 rounded-full bg-white shadow"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setDate(new Date())}
              className="px-3 py-2 rounded-2xl bg-white shadow text-sm"
            >
              Today
            </button>
            <button
              onClick={() => changeDay(1)}
              className="p-2 rounded-full bg-white shadow"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setShowOnlyPending((s) => !s)}
              className="px-3 py-2 rounded-2xl bg-white shadow text-sm"
            >
              {showOnlyPending ? "Show All" : "Show Only Pending"}
            </button>
            <button
              onClick={() => saveSlots([])}
              className="px-3 py-2 rounded-2xl bg-white shadow text-sm flex items-center gap-1"
            >
              <RefreshCw className="w-4 h-4" /> Reset Slots
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* Slots */}
          <div className="md:col-span-2 space-y-4">
            <SlotList
              slots={slots}
              setSlots={saveSlots}
              showOnlyPending={showOnlyPending}
            />
            <SlotEditor slots={slots} setSlots={saveSlots} />
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-1 space-y-6">
            <TodoList date={todayKey} />
          </aside>
        </div>

        {/* Footer */}
        <footer className="text-center text-xs opacity-70 mt-8">
          Built with 💗 for two busy humans. History & to-dos saved day-wise.
        </footer>
      </div>
    </div>
  );
}
