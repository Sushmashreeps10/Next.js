"use client";

import { useState } from "react";
import { Product } from "../types/product";

export default function ProductForm({ onAdd }: { onAdd: (p: Product) => void }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price) return;

    onAdd({
      id: Date.now(),
      name,
      price: Number(price),
    });

    setName("");
    setPrice("");
  };

  return (
    <section className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 shadow-2xl shadow-black/20 mb-12 transform transition-all hover:scale-[1.01] hover:border-white/20 hover:shadow-indigo-500/10">
      <h2 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400 shadow-sm border border-indigo-500/30">
          ✨
        </span>
        New Product
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
        {/* Name Input */}
        <div className="md:col-span-7">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-3 block ml-2">
            Product Name
          </label>
          <input
            type="text"
            className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-inner text-white placeholder:text-slate-500"
            placeholder="e.g. Mechanical Keyboard"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        {/* Price Input */}
        <div className="md:col-span-3">
          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-3 block ml-2">
            Price (INR)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
            <input
              type="number"
              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl p-4 pl-8 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all shadow-inner text-white placeholder:text-slate-500"
              placeholder="0"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="md:col-span-2 h-[58px] bg-white text-indigo-950 font-black rounded-2xl shadow-lg shadow-white/10 transition-all hover:bg-indigo-50 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          Add Item
        </button>
      </form>
    </section>
  );
}