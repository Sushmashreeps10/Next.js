"use client";

import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";
import { Product } from "./types/product";

// Internal Header Component for a cohesive look
function Header({ count }: { count: number }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/50 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/30 rotate-3 transition-transform hover:rotate-0">
            <span className="text-white font-black text-2xl">S</span>
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-white">
            Stock<span className="text-indigo-400">Flow</span>
          </h1>
        </div>
        <div className="bg-white/10 px-5 py-2 rounded-full border border-white/10 shadow-sm transition-all hover:bg-white/20">
          <span className="text-sm font-bold text-indigo-300">Stock Count: <span className="text-white">{count}</span></span>
        </div>
      </div>
    </header>
  );
}
// Internal Footer Component
function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-400 text-sm font-medium">
          © {new Date().getFullYear()} StockFlow Systems.
        </p>
        <div className="flex gap-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Privacy</a>
          <a href="#" className="hover:text-indigo-400 transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
}

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (p: Product) => setProducts([...products, p]);
  const deleteProduct = (id: number) => setProducts(products.filter(p => (p.id !== id)));

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header count={products.length} />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-12">
        {/* Intro Section */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 drop-shadow-sm">
            Product <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-400 to-pink-400">Dashboard</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            Monitor and manage your store inventory with <span className="text-white font-semibold">precision</span> and <span className="text-white font-semibold">style</span>.
          </p>
        </div>

        {/* Main Interface */}
        <div className="space-y-12">
          <ProductForm onAdd={addProduct} />

          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-300 opacity-80">
                Current Inventory
              </h3>
              <div className="h-px flex-grow bg-linear-to-r from-indigo-500/50 to-transparent ml-6"></div>
            </div>

            <ProductList products={products} onDelete={deleteProduct} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}