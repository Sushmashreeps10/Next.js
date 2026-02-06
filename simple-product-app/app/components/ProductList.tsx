"use client";

import { Product } from "../types/product";

export default function ProductList({
  products,
  onDelete,
}: {
  products: Product[];
  onDelete: (id: number) => void;
}) {
  // Beauty tip: Enhanced empty state with a soft glow
  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-16 bg-white/5 backdrop-blur-md rounded-[2.5rem] border-2 border-dashed border-white/10 text-slate-400 shadow-xl">
        <div className="text-6xl mb-4 animate-bounce grayscale opacity-50">📦</div>
        <p className="font-bold text-indigo-200/50 text-lg uppercase tracking-widest">
          Inventory Empty
        </p>
        <p className="text-sm text-slate-500 mt-1">Add your first product above to get started</p>
      </div>
    );
  }

  // Calculate total value for the summary header
  const totalValue = products.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="space-y-8">
      {/* Dynamic Summary Bar */}
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col">
          <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-indigo-400">
            Stock Registry
          </h3>
          <p className="text-xs text-slate-400 font-medium">{products.length} Items Listed</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-white/10">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">Total Assets</p>
          <p className="text-2xl font-black text-white tracking-tighter">
            ₹{totalValue.toLocaleString()}
          </p>
        </div>
      </div>

      {/* The List Container */}
      <div className="grid gap-4">
        {products.map((p) => (
          <div
            key={p.id}
            className="group flex items-center justify-between bg-white/5 backdrop-blur-lg p-6 rounded-[2rem] border border-white/5 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="flex items-center gap-5">
              {/* Icon with v4 Linear Gradient */}
              <div className="w-14 h-14 bg-slate-900/50 border border-white/10 rounded-2xl flex items-center justify-center text-white shadow-inner group-hover:border-indigo-500/30 transition-colors duration-300">
                <span className="font-medium text-xl text-indigo-400">₹</span>
              </div>

              <div>
                <p className="font-bold text-white text-xl tracking-tight leading-none mb-1 group-hover:text-indigo-200 transition-colors">
                  {p.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)] animate-pulse"></span>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    Live • ID-{String(p.id).slice(-4)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="text-right">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Price</p>
                <span className="text-2xl font-black text-white tracking-tighter">
                  ₹{p.price.toLocaleString()}
                </span>
              </div>

              <button
                onClick={() => onDelete(p.id)}
                className="opacity-0 group-hover:opacity-100 focus:opacity-100 bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 cursor-pointer shadow-sm hover:shadow-red-500/20 ring-1 ring-red-500/20 hover:ring-0"
                title="Remove Item"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}