import React, { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Users,
  Filter,
  BarChart3,
  PieChart,
  Lightbulb,
  FileSpreadsheet,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface MetricData {
  category: string;
  sales: number; // in thousands INR
  profit: number;
  orders: number;
  growth: string;
}

export const AnalyticsDashboardWidget: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedTimeframe, setSelectedTimeframe] = useState<'month' | 'quarter' | 'year'>('quarter');
  const [activeMetric, setActiveMetric] = useState<'sales' | 'profit' | 'orders'>('sales');

  const rawData: Record<string, MetricData[]> = {
    all: [
      { category: 'Electronics & Audio', sales: 485, profit: 98, orders: 1240, growth: '+18.4%' },
      { category: 'Apparel & Fashion', sales: 340, profit: 82, orders: 2100, growth: '+22.1%' },
      { category: 'Home & Kitchen', sales: 290, profit: 54, orders: 1450, growth: '+12.8%' },
      { category: 'Health & Pharmacy', sales: 210, profit: 61, orders: 980, growth: '+15.2%' },
      { category: 'Beauty & Personal', sales: 180, profit: 49, orders: 1320, growth: '+26.5%' },
    ],
    south: [
      { category: 'Electronics & Audio', sales: 210, profit: 45, orders: 530, growth: '+24.1%' },
      { category: 'Apparel & Fashion', sales: 145, profit: 36, orders: 920, growth: '+21.5%' },
      { category: 'Home & Kitchen', sales: 120, profit: 24, orders: 610, growth: '+14.0%' },
      { category: 'Health & Pharmacy', sales: 95, profit: 28, orders: 440, growth: '+18.2%' },
      { category: 'Beauty & Personal', sales: 85, profit: 24, orders: 620, growth: '+29.0%' },
    ],
    west: [
      { category: 'Electronics & Audio', sales: 155, profit: 31, orders: 390, growth: '+16.5%' },
      { category: 'Apparel & Fashion', sales: 110, profit: 26, orders: 680, growth: '+19.8%' },
      { category: 'Home & Kitchen', sales: 90, profit: 16, orders: 450, growth: '+11.2%' },
      { category: 'Health & Pharmacy', sales: 65, profit: 19, orders: 300, growth: '+13.4%' },
      { category: 'Beauty & Personal', sales: 55, profit: 15, orders: 410, growth: '+24.1%' },
    ],
    north: [
      { category: 'Electronics & Audio', sales: 120, profit: 22, orders: 320, growth: '+14.8%' },
      { category: 'Apparel & Fashion', sales: 85, profit: 20, orders: 500, growth: '+25.0%' },
      { category: 'Home & Kitchen', sales: 80, profit: 14, orders: 390, growth: '+13.5%' },
      { category: 'Health & Pharmacy', sales: 50, profit: 14, orders: 240, growth: '+14.0%' },
      { category: 'Beauty & Personal', sales: 40, profit: 10, orders: 290, growth: '+26.4%' },
    ],
  };

  const currentData = rawData[selectedRegion] || rawData.all;

  const totalSales = currentData.reduce((acc, curr) => acc + curr.sales, 0);
  const totalProfit = currentData.reduce((acc, curr) => acc + curr.profit, 0);
  const totalOrders = currentData.reduce((acc, curr) => acc + curr.orders, 0);
  const profitMargin = ((totalProfit / totalSales) * 100).toFixed(1);
  const avgOrderValue = Math.round((totalSales * 1000) / totalOrders);

  const maxVal = Math.max(
    ...currentData.map((d) => (activeMetric === 'sales' ? d.sales : activeMetric === 'profit' ? d.profit : d.orders))
  );

  return (
    <div className="bg-[#0D131F] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Bar */}
      <div className="bg-[#121A2B] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-cyan-400" />
          <span className="text-sm font-bold text-white">
            Vexa E-Commerce & Analytics Platform
          </span>
          <a
            href="https://vexa-e-commerce.vercel.app/auth"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-md transition-colors"
          >
            <span>Open Live App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Region & Timeframe filters */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 bg-[#090D15] p-1 rounded-lg border border-slate-800">
            <span className="text-slate-400 px-1 hidden sm:inline">Region:</span>
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="bg-transparent text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="all" className="bg-[#121A2B]">All India</option>
              <option value="south" className="bg-[#121A2B]">South Cluster</option>
              <option value="west" className="bg-[#121A2B]">West Cluster</option>
              <option value="north" className="bg-[#121A2B]">North Cluster</option>
            </select>
          </div>

          <div className="flex items-center gap-1 bg-[#090D15] p-1 rounded-lg border border-slate-800">
            <button
              onClick={() => setSelectedTimeframe('month')}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedTimeframe === 'month' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              1M
            </button>
            <button
              onClick={() => setSelectedTimeframe('quarter')}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedTimeframe === 'quarter' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              Q1
            </button>
            <button
              onClick={() => setSelectedTimeframe('year')}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedTimeframe === 'year' ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
              }`}
            >
              FY26
            </button>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="p-4 sm:p-6 space-y-6">
        {/* KPI Summary Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div
            onClick={() => setActiveMetric('sales')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
              activeMetric === 'sales'
                ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-950/20'
                : 'bg-[#090E17] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Gross Revenue</span>
              <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums mt-1">
              ₹{(totalSales * 1.0).toFixed(0)}K
            </div>
            <div className="text-[11px] text-emerald-400 mt-1 font-mono">+19.2% vs target</div>
          </div>

          <div
            onClick={() => setActiveMetric('profit')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
              activeMetric === 'profit'
                ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-950/20'
                : 'bg-[#090E17] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Net Profit (Margin)</span>
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums mt-1">
              ₹{(totalProfit * 1.0).toFixed(0)}K
            </div>
            <div className="text-[11px] text-cyan-300 mt-1 font-mono">{profitMargin}% net margin</div>
          </div>

          <div
            onClick={() => setActiveMetric('orders')}
            className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
              activeMetric === 'orders'
                ? 'bg-cyan-950/40 border-cyan-400 shadow-lg shadow-cyan-950/20'
                : 'bg-[#090E17] border-slate-800 hover:border-slate-700'
            }`}
          >
            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Total Orders</span>
              <ShoppingCart className="w-3.5 h-3.5 text-sky-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums mt-1">
              {totalOrders.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">Fulfilled orders</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#090E17] border border-slate-800">
            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Avg Order Value (AOV)</span>
              <Users className="w-3.5 h-3.5 text-amber-400" />
            </div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white tabular-nums mt-1">
              ₹{avgOrderValue}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-mono">Basket size index</div>
          </div>
        </div>

        {/* Visual Chart Breakdown */}
        <div className="bg-[#090E17] border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-800">
            <div>
              <h4 className="text-sm font-bold text-white">
                Category Performance Matrix (Active Metric:{' '}
                <span className="text-cyan-400 uppercase">{activeMetric}</span>)
              </h4>
              <p className="text-xs text-slate-400">
                Segmented aggregation extracted from 25,000+ cleaned transactions
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2.5 h-2.5 rounded bg-cyan-400 inline-block"></span>
              <span>Metric Share</span>
            </div>
          </div>

          {/* Bar Chart Bars */}
          <div className="space-y-3.5">
            {currentData.map((item, idx) => {
              const val =
                activeMetric === 'sales'
                  ? item.sales
                  : activeMetric === 'profit'
                  ? item.profit
                  : item.orders;
              const percentage = Math.round((val / maxVal) * 100);

              return (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-200">{item.category}</span>
                    <div className="flex items-center gap-3 font-mono">
                      <span className="text-slate-400">
                        {activeMetric === 'sales'
                          ? `₹${item.sales}K`
                          : activeMetric === 'profit'
                          ? `₹${item.profit}K`
                          : `${item.orders} orders`}
                      </span>
                      <span className="text-emerald-400 font-semibold">{item.growth}</span>
                    </div>
                  </div>

                  {/* Visual Bar with animated fill */}
                  <div className="w-full h-2.5 bg-slate-800/80 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Actionable Business Intelligence Insights */}
        <div className="bg-[#090E17] border border-slate-800 rounded-xl p-4 sm:p-5">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-wider mb-3">
            <Lightbulb className="w-4 h-4" />
            <span>Key Business Takeaways & Insights Derived</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="p-3 bg-[#121A2B] rounded-lg border border-slate-800/80 space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Regional Surge in South Cluster</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                South Region generated 43% of total revenue with the highest repeat rate (+24.1%
                growth), driven by audio electronics and fast-fashion demand.
              </p>
            </div>

            <div className="p-3 bg-[#121A2B] rounded-lg border border-slate-800/80 space-y-1">
              <div className="font-semibold text-white flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>High Margin Category Optimization</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Health & Pharmacy yielded the highest margin percentage (29%), demonstrating strong
                recurring basket behavior and low promotional discount dependency.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Notes */}
      <div className="bg-[#090E17] px-4 py-2.5 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
          <span>Pipeline: Excel Cleaning → Python / Pandas EDA → Power BI Visual Model</span>
        </div>
        <span className="text-slate-400">InternCourse Data Analytics Program</span>
      </div>
    </div>
  );
};
