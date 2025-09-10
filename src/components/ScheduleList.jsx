import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";

export default function ScheduleList({ items, toggle }) {
  return (
    <div className="mt-2 space-y-2">
      {items.map((slot) => (
        <motion.div
          key={slot.time}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className={`rounded-2xl p-3 bg-white shadow-sm border ${
            slot.isPast ? "border-rose-100" : "border-sky-100"
          }`}
        >
          <div className="grid sm:grid-cols-3 items-center gap-3">
            <div className="text-sm font-semibold tabular-nums">{slot.time}</div>

            {/* You */}
            <label className="flex items-start gap-3 bg-sky-50/60 rounded-2xl p-2 cursor-pointer">
              <input type="checkbox" checked={slot.youDone} onChange={() => toggle(slot.youId)} className="hidden" />
              {slot.youDone ? <CheckCircle className="w-5 h-5 text-sky-600" /> : <Circle className="w-5 h-5 text-slate-400" />}
              <div className="text-sm">
                <div className={slot.youDone ? "line-through opacity-60" : "font-medium"}>{slot.you}</div>
                <div className="text-[10px] uppercase tracking-wide opacity-60">You</div>
              </div>
            </label>

            {/* Divya */}
            <label className="flex items-start gap-3 bg-pink-50/60 rounded-2xl p-2 cursor-pointer">
              <input type="checkbox" checked={slot.divyaDone} onChange={() => toggle(slot.divyaId)} className="hidden" />
              {slot.divyaDone ? <CheckCircle className="w-5 h-5 text-pink-600" /> : <Circle className="w-5 h-5 text-slate-400" />}
              <div className="text-sm">
                <div className={slot.divyaDone ? "line-through opacity-60" : "font-medium"}>{slot.divya}</div>
                <div className="text-[10px] uppercase tracking-wide opacity-60">Divya</div>
              </div>
            </label>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
