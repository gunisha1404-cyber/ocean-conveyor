import { motion } from "motion/react";
import { Droplet, Waves, Anchor, Trash2, Wind, Recycle } from "lucide-react";
import { cn } from "../lib/utils";

const stats = [
  { label: "GPGP Scale", value: "1.6M km²", detail: "3x the size of France" },
  { label: "Estimated Weight", value: "100k Tonnes", detail: "740 Boeing 777s" },
  { label: "Plastic Items", value: "1.8 Trillion", detail: "In the GPGP alone" },
  { label: "Annual Ingress", value: "8M Metric Tons", detail: "Every single year" },
];

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-stone-50 px-6 py-24">
      {/* Background Animation Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-200/40 via-transparent to-transparent animate-pulse" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium">
          <Waves className="w-4 h-4" />
          <span>The Ocean Conveyor Strategy</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900 mb-6">
          Cleaning the World's Oceans with <span className="text-teal-600">Autonomous Logistics</span>
        </h1>
        
        <p className="text-lg md:text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          A self-sustaining remediative system leveraging natural currents, autonomous robotics, 
          and circular fuel cycles to neutralize the Great Pacific Garbage Patch.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-stone-200">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-stone-900 mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-teal-600 font-semibold mb-1">{stat.label}</div>
              <div className="text-[10px] text-stone-500">{stat.detail}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

interface PhaseProps {
  number: string;
  title: string;
  description: string;
  icon: any;
  details: string[];
}

export const PhaseCard = ({ number, title, description, icon: Icon, details }: PhaseProps) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative p-8 rounded-2xl bg-white border border-stone-200 transition-all hover:border-teal-500/50 shadow-sm hover:shadow-md"
  >
    <div className="absolute top-4 right-6 text-5xl font-black text-stone-100 group-hover:text-teal-50/50 transition-colors">
      {number}
    </div>
    <div className="mb-6 w-12 h-12 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-all">
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold text-stone-900 mb-3">{title}</h3>
    <p className="text-stone-600 text-sm mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {details.map((detail, i) => (
        <li key={i} className="flex items-start gap-2 text-xs text-stone-500">
          <div className="mt-1 w-1.5 h-1.5 rounded-full bg-teal-500" />
          {detail}
        </li>
      ))}
    </ul>
  </motion.div>
);
