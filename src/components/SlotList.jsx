import React, { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Circle } from "lucide-react";

const toMinutes = (range) => {
  const [start] = range.split("-");
  const [h, m] = start.trim().split(":");
  return parseInt(h, 10) * 60 + parseInt(m, 10);
};
const makeId = (time, person) => `${time}__${person}`;

export default function SlotList({ slots, setSlots, showOnlyPending }) {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes();

  const toggle = (id) => {
    const newSlots = slots.map((slot) => {
      const youId = makeId(slot.time, "you");
      const divyaId = makeId(slot.time, "divya");
      if (id === youId) return { ...slot, youDone: !slot.youDone };
      if (id === divyaId) return { ...slot, divyaDone: !slot.divyaDone };
      return slot;
    });
    setSlots(newSlots);
  };

  const items = useMemo(() => {
    return slots.map((slot) => {
      const startMin = toMinutes(slot.time);
      return {
        ...slot,
        startMin,
        isPast: startMin <= nowMinutes,
        youId: makeId(slot.time, "you"),
        divyaId: makeId(slot.time, "divya"),
        youDone: slot.youDone || false,
        divyaDone: slot.divyaDone || false,
      };
    });
  }, [slots, nowMinutes]);

  const visibleItems = showOnlyPending ? items.filter((i) => !i.youDone || !i.divyaDone) : items;

  return (
    <div className="space-y-2">
      <AnimatePresence>
        {visibleItems.map((slot) => (
          <motion.div
            key={slot.time}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className={`rounded-2xl p-3 bg-white shadow-sm border ${slot.isPast ? "border-rose-100" : "border-sky-100"}`}
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
      </AnimatePresence>
    </div>
  );
}
