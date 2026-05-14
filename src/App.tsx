import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { 
  ChevronRight, 
  Menu, 
  ExternalLink,
  Target,
  ArrowDownUp,
  Map,
  Factory,
  Database,
  Users,
  ShieldCheck,
  Ship,
  Wind,
  Waves
} from "lucide-react";
import { Hero, PhaseCard } from "./components/CoreComponents";
import { DataInsights, TechnicalStack } from "./components/DetailedSections";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-teal-500 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-teal-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-stone-950 font-bold tracking-tight leading-none">Ocean Conveyor</span>
              <span className="text-[10px] text-teal-600 font-bold uppercase tracking-widest">Logistics System</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            <a href="#hero" className="hover:text-teal-600 transition-colors">Vision</a>
            <a href="#phases" className="hover:text-teal-600 transition-colors">Phases</a>
            <a href="#tech" className="hover:text-teal-600 transition-colors">Engineering</a>
            <a href="#data" className="hover:text-teal-600 transition-colors">Data</a>
            <a href="#accelerate" className="hover:text-teal-600 transition-colors">Accelerate</a>
          </div>

          <div className="md:hidden">
            <Menu className="w-6 h-6 text-stone-600" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />

        {/* Global Context Banner */}
        <section className="bg-teal-500 py-3 overflow-hidden whitespace-nowrap border-y border-teal-600">
            <div className="flex animate-marquee gap-12 text-[10px] font-bold text-teal-950 uppercase tracking-[0.2em]">
                {Array(10).fill("Real-world Context: Clearbot (HK/India) • The Ocean Cleanup System 03 • Pyrolysis Scalability Verified • Global Gyre Remediation •").map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
            </div>
        </section>

        {/* The Problem Section - Brief Context */}
        <section className="py-24 bg-stone-100 px-6 border-b border-stone-200" id="problem">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="p-10 rounded-3xl bg-white border border-stone-200 shadow-xl">
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">The Gyre "Soup"</h3>
                    <p className="text-stone-600 mb-6 leading-relaxed">
                      Plastic waste isn't gathered in a solid mass; it forms a permanent "soup" trapped in massive, slow-moving whirlpools. Circular currents keep plastic spinning in situ, making traditional trawling ineffective.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <ShieldCheck className="w-5 h-5 text-teal-600" />
                            <span>1,200+ marine species negatively impacted</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-600">
                            <ShieldCheck className="w-5 h-5 text-teal-600" />
                            <span>Projected plastic weight {">"} fish weight by 2050</span>
                        </div>
                    </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl font-bold text-stone-900 mb-6">Scale. Speed. Sustainability.</h2>
                <p className="text-stone-600 mb-8 max-w-lg leading-relaxed">
                  Every minute, 3,300 kg of plastic enters our oceans. Traditional methods cost too much in fuel and human labor. The Ocean Conveyor System flips the script by using the ocean's own energy to do the heavy lifting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 rounded-lg bg-white border border-stone-200 text-stone-500 text-xs flex items-center gap-2 shadow-sm">
                    <Database className="w-3 h-3 text-teal-600" />
                    1.8T Pieces Impacted
                  </div>
                  <div className="px-4 py-2 rounded-lg bg-white border border-stone-200 text-stone-500 text-xs flex items-center gap-2 shadow-sm">
                    <Users className="w-3 h-3 text-teal-600" />
                    Global Stakeholder Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 4 Phases */}
        <section id="phases" className="py-24 px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-stone-900 mb-4 italic tracking-tight">The 4-Phase Logistics Plan</h2>
              <p className="text-stone-500">Autonomous collection and current-based transport architecture.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <PhaseCard 
                number="01"
                title="The Mesh Trap"
                icon={Target}
                description="Autonomous Shepherd boats use AI computer vision to circle high-density waste clusters."
                details={[
                  "GPS-tagged mesh deployment",
                  "Circle-maneuver compression",
                  "Bio-fouling resistant coating",
                  "By-catch escape valves"
                ]}
              />
              <PhaseCard 
                number="02"
                title="The Scoop"
                icon={Ship}
                description="Once bundled, the robotic asset uses a mechanical jaw to ingest the compact waste."
                details={[
                  "Internal conveyor lift",
                  "Volume-optimized storage",
                  "Real-time mass monitoring",
                  "Zero-human intervention"
                ]}
              />
              <PhaseCard 
                number="03"
                title="The Highway"
                icon={Wind}
                description="The core innovation: using natural boundary currents to transport waste for free."
                details={[
                  "Durable GPS-tagged pods",
                  "Ocean 'Highways' navigation",
                  "Natural current logistics",
                  "Zero fuel transport"
                ]}
              />
              <PhaseCard 
                number="04"
                title="Resource Loop"
                icon={Factory}
                description="Coastal interceptors collect pods and process material via pyrolysis."
                details={[
                  "Catch zone funneling",
                  "On-site Pyrolysis",
                  "Synthetic fuel production",
                  "Self-sustaining fuel loop"
                ]}
              />
            </div>
          </div>
        </section>

        <TechnicalStack />

        <DataInsights />

        {/* Funding & Acceleration Section */}
        <section id="accelerate" className="py-24 px-6 bg-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="bg-teal-600 rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-500 skew-x-12 translate-x-24 opacity-50 pointer-events-none" />
              
              <div className="p-10 lg:p-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-white mb-6">Accelerate the Remediation Timeline</h2>
                    <p className="text-teal-50 leading-relaxed mb-8 text-lg">
                      The technology is proven. The currents are ready. To reach our 2040 goal of a 90% plastic reduction, we must scale our "Shepherd" fleet from prototype to global swarm deployment.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">10 Years</div>
                        <div className="text-xs uppercase tracking-wider text-teal-100 font-medium">To Complete Cleanup</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                        <div className="text-3xl font-bold text-white mb-1">$7.5B</div>
                        <div className="text-xs uppercase tracking-wider text-teal-100 font-medium">Funding Required</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl">
                    <h3 className="text-2xl font-bold text-stone-900 mb-6">Where Funds Apply</h3>
                    <div className="space-y-6">
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                          <Ship className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm">Industrial Fleet Scaling</h4>
                          <p className="text-xs text-stone-500">Mass-manufacturing autonomous solar-powered vessels to patrol all five major gyres simultaneously.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                          <Target className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm">Advanced Pyrolysis R&D</h4>
                          <p className="text-xs text-stone-500">Optimizing on-site conversion efficiency to maximize the self-sustaining fuel loop return.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                          <Users className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm">Global Regulatory Alignment</h4>
                          <p className="text-xs text-stone-500">Establishing international "Catch Zones" and synthetic fuel trade agreements.</p>
                        </div>
                      </div>
                    </div>

                    <button className="w-full mt-10 py-4 bg-teal-600 text-white font-bold rounded-xl hover:bg-teal-700 transition-colors shadow-lg shadow-teal-600/20 active:scale-95">
                      Request Investment Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / CTA */}
        <footer className="py-24 bg-stone-100 border-t border-stone-200 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-stone-950 font-bold tracking-tight leading-none text-xl">Ocean Conveyor</span>
                    <span className="text-[10px] text-teal-600 font-bold uppercase tracking-widest">Autonomous Logistics</span>
                  </div>
                </div>
                <p className="text-stone-500 text-sm max-w-md leading-relaxed">
                  The ultimate smart logistics framework for deep-sea plastic remediation. Leveraging natural currents and swarm robotics to restore planetary equilibrium.
                </p>
              </div>

              <div>
                <h4 className="text-stone-900 font-bold text-sm uppercase tracking-wider mb-6">Contact & General Info</h4>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase font-bold">Inquiries</span>
                    <a href="mailto:contact@oceanconveyor.com" className="text-teal-600 font-medium hover:underline">contact@oceanconveyor.com</a>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[10px] text-stone-400 uppercase font-bold">Partnerships</span>
                    <a href="mailto:partners@oceanconveyor.com" className="text-teal-600 font-medium hover:underline">partners@oceanconveyor.com</a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-stone-900 font-bold text-sm uppercase tracking-wider mb-6">Operations</h4>
                <p className="text-stone-500 text-xs leading-relaxed mb-4">
                  Global HQ: Terminal 4, Coastal Remediation District.<br />
                  Catch Zones Alpha-Echo: Active
                </p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-400 hover:text-teal-600 cursor-pointer transition-colors">
                    <Database className="w-4 h-4" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-stone-400 hover:text-teal-600 cursor-pointer transition-colors">
                    <Map className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-stone-500 text-[10px] uppercase tracking-widest font-bold">
                © 2026 Ocean Conveyor System Logistics Corp.
              </p>
              <p className="text-stone-400 text-[10px]">
                Specifications based on Maritime Standard 9.02 & Pyrolysis Loop Verification.
              </p>
            </div>
          </div>
        </footer>
      </main>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
