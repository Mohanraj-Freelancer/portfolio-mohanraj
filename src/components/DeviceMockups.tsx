import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Database, 
  ShieldCheck, 
  QrCode, 
  Radio, 
  CheckCircle2, 
  Search, 
  Wifi, 
  Battery, 
  Layers, 
  Sparkles,
  Lock,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Check
} from 'lucide-react';

// SFA360 Device Mockup
export const SFA360DeviceMockup = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'sync' | 'metrics'>('catalog');

  return (
    <div className="w-full max-w-md mx-auto rounded-[40px] border-[8px] border-[#252528] bg-black p-4 text-white shadow-[0_25px_60px_rgba(0,113,227,0.25)] border-white/20 relative overflow-hidden">
      {/* Dynamic Island Header */}
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="w-20 h-5 bg-black rounded-full border border-white/20 mx-auto flex items-center justify-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[8px] text-white/70 font-mono">SQLite engine</span>
        </div>
      </div>

      {/* Screen App Bar */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-blue-900/60 to-indigo-900/60 border border-blue-500/30 backdrop-blur-md mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#0071E3] flex items-center justify-center font-bold text-white shadow-md">
            <ShoppingCart size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">SFA 360 Enterprise</h4>
            <p className="text-[9px] text-emerald-400 font-mono">100% Offline Capable</p>
          </div>
        </div>
        <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono border border-emerald-500/30">
          Sync Ready
        </span>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-3 gap-1 p-1 bg-white/10 rounded-xl mb-3 border border-white/10 text-[10px] font-medium">
        <button
          onClick={() => setActiveTab('catalog')}
          className={`py-1 rounded-lg transition-all ${activeTab === 'catalog' ? 'bg-[#0071E3] text-white' : 'text-white/60 hover:text-white'}`}
        >
          Catalog (100k)
        </button>
        <button
          onClick={() => setActiveTab('sync')}
          className={`py-1 rounded-lg transition-all ${activeTab === 'sync' ? 'bg-[#0071E3] text-white' : 'text-white/60 hover:text-white'}`}
        >
          Sync Engine
        </button>
        <button
          onClick={() => setActiveTab('metrics')}
          className={`py-1 rounded-lg transition-all ${activeTab === 'metrics' ? 'bg-[#0071E3] text-white' : 'text-white/60 hover:text-white'}`}
        >
          Performance
        </button>
      </div>

      {/* Tab Content */}
      <div className="space-y-2.5 min-h-[220px]">
        {activeTab === 'catalog' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-xs text-white/60">
              <Search size={14} className="text-[#2997FF]" />
              <span>Querying 100,000+ local items in 1.4ms...</span>
            </div>
            
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Augmentin Duo 625mg</p>
                <p className="text-[9px] text-white/50">Pharma Stock • Batch #A-9081</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400">$3,420.00</span>
                <p className="text-[8px] text-[#2997FF]">Instant Add</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Azithromycin 500mg Tab</p>
                <p className="text-[9px] text-white/50">Pharma Stock • Batch #B-4011</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-400">$1,890.00</span>
                <p className="text-[8px] text-[#2997FF]">Instant Add</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'sync' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-2">
            <div className="p-3 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
              <Database size={20} className="text-emerald-400 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-emerald-300">SQLite Encryption Active</p>
                <p className="text-[9px] text-white/70">AES-256 local database engine. No internet needed during order collection.</p>
              </div>
            </div>

            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex justify-between text-[10px] text-white/80">
                <span>Background Delta Sync</span>
                <span className="text-emerald-400 font-mono">Completed 100%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-emerald-400 rounded-full w-full" />
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'metrics' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-2 gap-2">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[9px] text-white/50">Query Latency</p>
              <p className="text-lg font-extrabold text-emerald-400 font-mono">&lt; 2 ms</p>
              <p className="text-[8px] text-white/60">Zero UI freezes</p>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <p className="text-[9px] text-white/50">Order Placement Time</p>
              <p className="text-lg font-extrabold text-[#2997FF] font-mono">-40%</p>
              <p className="text-[8px] text-white/60">Optimized workflow</p>
            </div>
            <div className="col-span-2 p-3 rounded-2xl bg-blue-950/40 border border-blue-500/30 text-[10px] text-white/80 flex items-center justify-between">
              <span>Field Rep Orders Processed</span>
              <span className="font-bold text-white font-mono">100,000+ Transactions</span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer bar & App Store Link */}
      <a
        href="https://apps.apple.com/app/id6453795530"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
      >
        <Sparkles size={14} className="text-[#0071E3]" />
        <span>View on Apple App Store (ID: 6453795530)</span>
      </a>
    </div>
  );
};

// LIVEORDER DEVICE MOCKUP
export const LiveOrderDeviceMockup = () => {
  return (
    <div className="w-full max-w-md mx-auto rounded-[40px] border-[8px] border-[#252528] bg-black p-4 text-white shadow-[0_25px_60px_rgba(41,151,255,0.25)] border-white/20 relative overflow-hidden">
      {/* App Bar Header */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-500/30 backdrop-blur-md mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-[#2997FF] flex items-center justify-center font-bold text-white shadow-md">
            <Radio size={18} className="animate-pulse" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">LiveOrder-csquare</h4>
            <p className="text-[9px] text-cyan-400 font-mono">Real-time Order Stream</p>
          </div>
        </div>
        <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-[9px] font-mono border border-cyan-500/30">
          App Store Live
        </span>
      </div>

      {/* Live Order Card */}
      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-3 space-y-2">
        <div className="flex items-center justify-between text-[10px]">
          <span className="font-mono text-cyan-400 font-bold">ORDER #LO-88294</span>
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[9px] font-mono">WebSocket Connected</span>
        </div>

        {/* Live Timeline */}
        <div className="space-y-2.5 pt-1">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 size={15} className="text-emerald-400 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Order Received & Validated</p>
              <p className="text-[9px] text-white/50">09:41 AM • Automatic Async Pipeline</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-3.5 h-3.5 rounded-full bg-[#2997FF] flex items-center justify-center flex-shrink-0 animate-ping">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#2997FF]">Distribution Warehouse Pick & Pack</p>
              <p className="text-[9px] text-white/70">Live WebSocket Packet Received</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 opacity-40">
            <div className="w-3.5 h-3.5 rounded-full border border-white/40 flex-shrink-0" />
            <div>
              <p className="text-xs font-semibold text-white">Dispatched for Delivery</p>
              <p className="text-[9px] text-white/50">ETA ~ 15 minutes</p>
            </div>
          </div>
        </div>
      </div>

      {/* App Highlights */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
          <p className="text-[9px] text-white/50">Architecture</p>
          <p className="text-xs font-bold text-white mt-0.5">Clean MVVM + Combine</p>
        </div>
        <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
          <p className="text-[9px] text-white/50">Networking</p>
          <p className="text-xs font-bold text-cyan-400 mt-0.5">REST & WebSockets</p>
        </div>
      </div>

      <a
        href="https://apps.apple.com/app/id1660025243"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
      >
        <Sparkles size={14} className="text-[#0071E3]" />
        <span>View on Apple App Store (ID: 1660025243)</span>
      </a>
    </div>
  );
};

// LIVE-DOC DEVICE MOCKUP
export const LiveDocDeviceMockup = () => {
  return (
    <div className="w-full max-w-md mx-auto rounded-[40px] border-[8px] border-[#252528] bg-black p-4 text-white shadow-[0_25px_60px_rgba(16,185,129,0.25)] border-white/20 relative overflow-hidden">
      {/* App Bar Header */}
      <div className="p-3 rounded-2xl bg-gradient-to-r from-emerald-950 to-teal-950 border border-emerald-500/30 backdrop-blur-md mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500 flex items-center justify-center font-bold text-white shadow-md">
            <QrCode size={18} />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">Live-Doc Engine</h4>
            <p className="text-[9px] text-emerald-400 font-mono">AVFoundation Scanner</p>
          </div>
        </div>
        <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] font-mono border border-emerald-500/30">
          Sub-second Auth
        </span>
      </div>

      {/* Hardware QR Viewfinder */}
      <div className="relative h-44 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 p-4 flex flex-col items-center justify-center mb-3 overflow-hidden">
        {/* Scanner Targets */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-emerald-400" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-emerald-400" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-emerald-400" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-emerald-400" />

        <QrCode size={48} className="text-emerald-300 mb-2 opacity-90 animate-pulse" />
        <p className="text-[10px] font-mono text-emerald-200">Hardware QR Scanner Active</p>
        <p className="text-[8px] text-white/60">Instant AES-256 Document Verification</p>
      </div>

      {/* Specs */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-[9px] text-white/50">Compression</p>
          <p className="text-xs font-bold text-emerald-400">70% File Size Reduction</p>
        </div>
        <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-center">
          <p className="text-[9px] text-white/50">Upload Queue</p>
          <p className="text-xs font-bold text-emerald-400">Resilient Background Queue</p>
        </div>
      </div>

      <a
        href="https://apps.apple.com/app/id6504079182"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
      >
        <Sparkles size={14} className="text-emerald-600" />
        <span>View on Apple App Store (ID: 6504079182)</span>
      </a>
    </div>
  );
};
