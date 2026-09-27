import React, { useState } from 'react';
import {
  Coffee,
  Utensils,
  Plus,
  Minus,
  ShoppingBag,
  QrCode,
  Check,
  RotateCcw,
  Receipt,
  Server,
} from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'bakery' | 'savory' | 'beverage';
  price: number;
  description: string;
  badge?: string;
}

export const QrFoodOrderingSimulator: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cart, setCart] = useState<Record<string, number>>({
    'item-1': 1,
    'item-3': 2,
  });
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [tableNumber] = useState('Table #04 (Ground Floor)');
  const [orderNumber, setOrderNumber] = useState('ORD-8821');

  const menuItems: MenuItem[] = [
    {
      id: 'item-1',
      name: 'South Indian Filter Kappi',
      category: 'coffee',
      price: 60,
      description: 'Traditional slow-dripped chicory blend with frothy milk in brass tumbler style.',
      badge: 'Bestseller',
    },
    {
      id: 'item-2',
      name: 'Madras Spiced Cold Brew',
      category: 'coffee',
      price: 130,
      description: '18-hour cold steeped Arabica infused with cinnamon and orange peel.',
    },
    {
      id: 'item-3',
      name: 'Butter Croissant & Honey',
      category: 'bakery',
      price: 110,
      description: 'Flaky artisan French puff pastry baked fresh hourly with organic wildflower honey.',
      badge: 'Freshly Baked',
    },
    {
      id: 'item-4',
      name: 'Cardamom Pistachio Tea Cake',
      category: 'bakery',
      price: 95,
      description: 'Moist golden sponge cake infused with crushed green cardamom and roasted pistachios.',
    },
    {
      id: 'item-5',
      name: 'Paneer Tikka Grilled Focaccia',
      category: 'savory',
      price: 160,
      description: 'Tandoori spiced cottage cheese, bell peppers, mint chutney on sourdough focaccia.',
    },
    {
      id: 'item-6',
      name: 'Hibiscus Lime Sparkling Soda',
      category: 'beverage',
      price: 90,
      description: 'Refreshing organic hibiscus petals infused with kaffir lime and sparkling soda.',
    },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: next };
    });
  };

  const cartItemCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const handlePlaceOrder = () => {
    if (cartItemCount === 0) return;
    setOrderNumber(`ORD-${Math.floor(1000 + Math.random() * 9000)}`);
    setOrderSubmitted(true);
  };

  const handleReset = () => {
    setOrderSubmitted(false);
    setCart({ 'item-1': 1 });
  };

  return (
    <div className="bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Simulator Bar */}
      <div className="bg-[#121A2B] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Utensils className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-bold text-white">
            QR Cafe & Bakery Smart Ordering System
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            (Spring Boot & MySQL Architecture)
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 bg-[#090D15] px-2.5 py-1 rounded-lg border border-slate-800 text-cyan-300 font-mono">
            <QrCode className="w-3.5 h-3.5 text-cyan-400" />
            <span>{tableNumber}</span>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6">
        {orderSubmitted ? (
          /* Order Confirmation View */
          <div className="max-w-md mx-auto bg-[#090E17] border border-cyan-500/40 rounded-xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
              <Check className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                Order Dispatched to Kitchen
              </div>
              <h4 className="text-xl font-bold text-white mt-1">Token #{orderNumber}</h4>
              <p className="text-xs text-slate-400 mt-1">
                Your order for {tableNumber} has been received via Spring Boot REST endpoint.
              </p>
            </div>

            <div className="bg-[#121A2B] p-3 rounded-lg text-left text-xs space-y-1.5 border border-slate-800">
              <div className="font-semibold text-slate-300 pb-1 border-b border-slate-800 flex items-center justify-between">
                <span>Ordered Items</span>
                <span>Amount</span>
              </div>
              {Object.entries(cart).map(([id, qty]) => {
                const item = menuItems.find((m) => m.id === id);
                if (!item) return null;
                return (
                  <div key={id} className="flex justify-between text-slate-400">
                    <span>
                      {qty}x {item.name}
                    </span>
                    <span className="font-mono text-slate-200">₹{item.price * qty}</span>
                  </div>
                );
              })}
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-white">
                <span>Total Paid (incl. 5% GST):</span>
                <span className="font-mono text-cyan-400">₹{total}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Simulate New Table Order</span>
              </button>
            </div>
          </div>
        ) : (
          /* Menu & Ordering View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Menu Items (8 Cols) */}
            <div className="lg:col-span-8 space-y-4">
              {/* Category Segmented Bar */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
                {[
                  { id: 'all', label: 'All Items' },
                  { id: 'coffee', label: 'Artisan Coffee' },
                  { id: 'bakery', label: 'Bakery & Pastry' },
                  { id: 'savory', label: 'Gourmet Savory' },
                  { id: 'beverage', label: 'Coolers & Drinks' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                      selectedCategory === cat.id
                        ? 'bg-cyan-500 text-slate-950 font-bold'
                        : 'bg-[#121A2B] text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredItems.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className="bg-[#090E17] border border-slate-800 rounded-xl p-3.5 flex flex-col justify-between hover:border-slate-700 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-start justify-between gap-2">
                          <h5 className="text-sm font-semibold text-white">{item.name}</h5>
                          {item.badge && (
                            <span className="text-[10px] text-amber-400 font-mono">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 line-clamp-2">{item.description}</p>
                      </div>

                      <div className="pt-3 mt-2 border-t border-slate-800/80 flex items-center justify-between">
                        <span className="text-sm font-bold font-mono text-cyan-400">
                          ₹{item.price}
                        </span>

                        <div className="flex items-center gap-2">
                          {qty > 0 ? (
                            <div className="flex items-center gap-2 bg-[#121A2B] rounded-lg border border-slate-700 px-2 py-1">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-slate-400 hover:text-white"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-mono font-bold text-white px-1">
                                {qty}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-slate-400 hover:text-white"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                              <span>Add</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Cart Summary (4 Cols) */}
            <div className="lg:col-span-4 bg-[#090E17] border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      Live Order Cart ({cartItemCount})
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">{tableNumber}</span>
                </div>

                {cartItemCount === 0 ? (
                  <div className="py-10 text-center text-xs text-slate-500">
                    Your cart is empty. Tap "+" on any item to start an order.
                  </div>
                ) : (
                  <div className="py-3 space-y-2.5 max-h-[220px] overflow-y-auto">
                    {Object.entries(cart).map(([id, qty]) => {
                      const item = menuItems.find((m) => m.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="flex items-center justify-between text-xs">
                          <div className="truncate max-w-[140px]">
                            <span className="text-slate-200">{item.name}</span>
                            <span className="text-slate-400 font-mono text-[10px] block">
                              ₹{item.price} each
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-slate-400 font-mono">x{qty}</span>
                            <span className="font-mono text-cyan-300 font-semibold">
                              ₹{item.price * qty}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Price Calculation & Checkout */}
              <div className="pt-3 border-t border-slate-800 space-y-2">
                <div className="space-y-1 text-xs text-slate-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-mono">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span className="font-mono">₹{gst}</span>
                  </div>
                  <div className="flex justify-between font-bold text-white text-sm pt-1 border-t border-slate-800/60">
                    <span>Total Payable</span>
                    <span className="font-mono text-cyan-400">₹{total}</span>
                  </div>
                </div>

                <button
                  disabled={cartItemCount === 0}
                  onClick={handlePlaceOrder}
                  className={`w-full py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    cartItemCount > 0
                      ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300 shadow-lg shadow-cyan-500/20'
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Send Order to Kitchen (₹{total})</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Simulator Footer */}
      <div className="bg-[#090E17] px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <Server className="w-3.5 h-3.5 text-slate-500" />
          <span>Backend: Spring Boot Controller · REST API · MySQL Schema</span>
        </div>
        <span className="text-slate-400">Contactless QR Menu</span>
      </div>
    </div>
  );
};
