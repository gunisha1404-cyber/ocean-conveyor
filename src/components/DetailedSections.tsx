import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import { motion } from "motion/react";
import { Info, ShieldAlert, Cpu, Fuel } from "lucide-react";

const GPGP_DATA = [
  { name: "Ghost Nets/Fishing Gear", value: 46, color: "#0d9488" },
  { name: "Megaplastics (>50cm)", value: 57, color: "#14b8a6" },
  { name: "Macroplastics (5-50cm)", value: 25, color: "#2dd4bf" },
  { name: "Small Debris/Micro", value: 18, color: "#5eead4" },
];

const GROWTH_DATA = [
  { year: "1950", tons: 2 },
  { year: "1970", tons: 40 },
  { year: "1990", tons: 150 },
  { year: "2010", tons: 300 },
  { year: "2020", tons: 460 },
  { year: "2050 (Proj)", tons: 1100 },
];

export const DataInsights = () => {
  return (
    <section id="data" className="py-24 bg-stone-50 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">The Mathematical Reality</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Understanding the scale and composition of the Great Pacific Garbage Patch is critical for deploying targeted remediation assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-teal-600" />
              Mass Composition by Category
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={GPGP_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {GPGP_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                    itemStyle={{ color: "#0f172a" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              {GPGP_DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-[10px] text-stone-500 uppercase tracking-tighter">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm">
            <h3 className="text-lg font-semibold text-stone-900 mb-6 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-teal-600" />
              Global Plastic Production (MT/Year)
            </h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={GROWTH_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    cursor={{ fill: "rgba(20, 184, 166, 0.05)" }}
                    contentStyle={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px" }}
                  />
                  <Bar dataKey="tons" fill="#0d9488" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TechnicalStack = () => {
  return (
    <section id="tech" className="py-24 bg-stone-100 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
            <Cpu className="w-4 h-4" />
            <span>Autonomous Intelligence</span>
          </div>
          <h2 className="text-4xl font-bold text-stone-900 mb-6 leading-tight">
            Engineered for <span className="text-teal-600">Total Autonomy</span>
          </h2>
          <p className="text-stone-600 mb-8 leading-relaxed">
            Unlike traditional ocean cleanup fleets, The Ocean Conveyor System operates with minimal human intervention. 
            Robotic vessels leverage AI-driven computer vision to identify plastic densities and coordinate swarm maneuvers.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-stone-200 text-teal-600 shadow-sm">
                <Fuel className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-stone-900 font-bold mb-1">Pyrolysis Fuel Loop</h4>
                <p className="text-sm text-stone-500">Processing harvested plastic into synthetic fuel on-site to power the fleet indefinitely.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-stone-200 text-teal-600 shadow-sm">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-stone-900 font-bold mb-1">GPS-Tagged Pods</h4>
                <p className="text-sm text-stone-500">Trash is bundled into rugged, floating containers tracked via satellite as they ride boundary currents.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-lg flex items-center justify-center">
            {/* Visual representation placeholder */}
            <div className="relative w-full h-full flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-50 to-white">
                <div className="text-teal-500/10 mb-4 flex justify-center">
                  <Cpu className="w-32 h-32" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-stone-400 text-xs italic">Technical Visualization: Swarm Navigation Algorithms</p>
                </div>
            </div>
            {/* Minimalist UI interface simulation */}
            <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur rounded-lg border border-stone-200 shadow-sm">
                <div className="text-[10px] text-teal-700 font-mono mb-1">SHEPERD_01: ACTIVE</div>
                <div className="flex gap-1">
                    <div className="w-8 h-1 bg-teal-500 rounded-full" />
                    <div className="w-12 h-1 bg-stone-200 rounded-full" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
