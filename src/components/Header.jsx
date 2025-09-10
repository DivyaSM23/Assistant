import React from "react";
import { RefreshCw, CalendarClock, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function Header({ todayKey, changeDay, setDate, resetDay, showOnlyPending, setShowOnlyPending }) {
  return (
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
        <button onClick={() => changeDay(-1)} className="p-2 rounded-full bg-white shadow">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button onClick={() => setDate(new Date())} className="px-3 py-2 rounded-2xl bg-white shadow text-sm">
          Today
        </button>
        <button onClick={() => changeDay(1)} className="p-2 rounded-full bg-white shadow">
          <ChevronRight className="w-4 h-4" />
        </button>
        <button onClick={() => setShowOnlyPending((s) => !s)} className="px-3 py-2 rounded-2xl bg-white shadow text-sm">
          {showOnlyPending ? "Show All" : "Show Only Pending"}
        </button>
        <button onClick={resetDay} className="px-3 py-2 rounded-2xl bg-white shadow text-sm inline-flex items-center gap-2">
          <RefreshCw className="w-4 h-4" /> Reset
        </button>
      </div>
    </header>
  );
}
