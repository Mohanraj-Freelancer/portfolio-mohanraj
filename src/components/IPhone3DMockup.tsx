import { useState, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Wifi, 
  Battery, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Sparkles, 
  QrCode, 
  ShoppingCart, 
  FileText, 
  CheckCircle2, 
  Radio, 
  Code,
  Lock,
  ArrowRight,
  Database
} from 'lucide-react';

interface IPhone3DMockupProps {
  initialScreen?: 'sfa360' | 'liveorder' | 'livedoc' | 'code';
  interactiveScreenTabs?: boolean;
}

export const IPhone3DMockup = ({ 
  initialScreen = 'sfa360',
  interactiveScreenTabs = true 
}: IPhone3DMockupProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeScreen, setActiveScreen] = useState<'sfa360' | 'liveorder' | 'livedoc' | 'code'>(initialScreen);

  // Mouse position spring physics for smooth 3D tilt
  const mouseX = useSpring(0, { stiffness: 180, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 180, damping: 20 });

  // Map mouse offsets to degrees of 3D rotation & sheen position
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-18, 18]);
  const sheenX = useTransform(mouseX, [-0.5, 0.5], ['0%', '100%']);
  const sheenY = useTransform(mouseY, [-0.5, 0.5], ['0%', '100%']);
  const shadowX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const shadowY = useTransform(mouseY, [-0.5, 0.5], [20, 40]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center justify-center p-4 sm:p-8 cursor-grab active:cursor-grabbing select-none"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic 3D Drop Shadow */}
      <motion.div
        style={{
          x: shadowX,
          y: shadowY,
          scale: 0.9,
          filter: 'blur(35px)',
        }}
        className="absolute inset-x-8 bottom-4 h-48 bg-[#0071E3]/25 dark:bg-[#0071E3]/40 rounded-[60px] pointer-events-none transition-all duration-300"
      />

      {/* 3D iPhone Body */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-[300px] sm:w-[340px] h-[640px] sm:h-[680px] rounded-[54px] bg-[#1a1a1e] dark:bg-[#0d0d0e] p-[10px] shadow-[0_25px_80px_rgba(0,0,0,0.5)] border-[4px] border-[#38383c] dark:border-[#2a2a2e] transition-shadow duration-300"
      >
        {/* Outer Titanium Bevel Highlight */}
        <div className="absolute -inset-[2px] rounded-[56px] border border-white/20 pointer-events-none" />

        {/* Side Hardware Buttons */}
        {/* Action Button */}
        <div className="absolute top-[90px] -left-[14px] w-[4px] h-[28px] bg-gradient-to-b from-[#4a4a4e] to-[#2a2a2e] rounded-l-md border-r border-black/40" />
        {/* Volume Up */}
        <div className="absolute top-[135px] -left-[14px] w-[4px] h-[48px] bg-gradient-to-b from-[#4a4a4e] to-[#2a2a2e] rounded-l-md border-r border-black/40" />
        {/* Volume Down */}
        <div className="absolute top-[195px] -left-[14px] w-[4px] h-[48px] bg-gradient-to-b from-[#4a4a4e] to-[#2a2a2e] rounded-l-md border-r border-black/40" />
        {/* Power / Side Button */}
        <div className="absolute top-[150px] -right-[14px] w-[4px] h-[72px] bg-gradient-to-b from-[#4a4a4e] to-[#2a2a2e] rounded-r-md border-l border-black/40" />

        {/* Screen Frame Container */}
        <div className="relative w-full h-full rounded-[44px] bg-black overflow-hidden flex flex-col justify-between border border-white/10">
          
          {/* Dynamic Metallic Glass Reflection Sheen */}
          <motion.div
            style={{
              background: `radial-gradient(circle at ${sheenX} ${sheenY}, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`,
            }}
            className="absolute inset-0 pointer-events-none z-40 rounded-[44px]"
          />

          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[116px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3.5 border border-white/15 shadow-md">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              {/* Audio Wave Visualizer */}
              <div className="flex items-center gap-0.5">
                <span className="w-0.5 h-2 bg-emerald-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-0.5 h-3 bg-emerald-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-0.5 h-1.5 bg-emerald-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
            {/* Front Camera Lens */}
            <div className="w-3.5 h-3.5 rounded-full bg-[#111115] border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#001133]" />
            </div>
          </div>

          {/* Top Status Bar */}
          <div className="relative z-30 pt-3.5 px-6 flex justify-between items-center text-[10px] font-semibold text-white/90">
            <span>9:41</span>
            <div className="flex items-center gap-2">
              <Wifi size={11} className="text-white/80" />
              <span className="text-[9px] tracking-wider font-mono">5G</span>
              <Battery size={13} className="text-white/90" />
            </div>
          </div>

          {/* Screen Tab Switcher */}
          {interactiveScreenTabs && (
            <div className="relative z-30 px-3 pt-3">
              <div className="grid grid-cols-4 gap-1 p-1 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/15">
                <button
                  onClick={() => setActiveScreen('sfa360')}
                  className={`py-1 text-[9px] font-semibold rounded-xl transition-all ${
                    activeScreen === 'sfa360'
                      ? 'bg-[#0071E3] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  SFA360
                </button>
                <button
                  onClick={() => setActiveScreen('liveorder')}
                  className={`py-1 text-[9px] font-semibold rounded-xl transition-all ${
                    activeScreen === 'liveorder'
                      ? 'bg-[#0071E3] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  LiveOrder
                </button>
                <button
                  onClick={() => setActiveScreen('livedoc')}
                  className={`py-1 text-[9px] font-semibold rounded-xl transition-all ${
                    activeScreen === 'livedoc'
                      ? 'bg-[#0071E3] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Live-Doc
                </button>
                <button
                  onClick={() => setActiveScreen('code')}
                  className={`py-1 text-[9px] font-semibold rounded-xl transition-all ${
                    activeScreen === 'code'
                      ? 'bg-[#0071E3] text-white shadow-md'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Swift UI
                </button>
              </div>
            </div>
          )}

          {/* Screen Display Content */}
          <div className="relative z-20 flex-1 px-4 pt-3 pb-4 flex flex-col justify-between overflow-hidden">
            <AnimatePresence mode="wait">
              {/* SFA 360 APP SCREEN MOCKUP */}
              {activeScreen === 'sfa360' && (
                <motion.div
                  key="sfa360"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col justify-between space-y-2"
                >
                  <div>
                    {/* App Bar Header */}
                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                          <ShoppingCart size={15} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">SFA 360 Enterprise</p>
                          <p className="text-[9px] text-emerald-400 font-mono flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            SQLite Engine Active
                          </p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-[#2997FF] text-[9px] font-mono border border-blue-500/30">
                        &lt;2ms DB
                      </span>
                    </div>

                    {/* Stats Widget Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-2">
                      <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-[9px] text-white/50">Total SKUs Cached</p>
                        <p className="text-sm font-bold text-[#2997FF] font-mono">142,800+</p>
                      </div>
                      <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10">
                        <p className="text-[9px] text-white/50">Offline Queue</p>
                        <p className="text-sm font-bold text-emerald-400 font-mono">0 Sync Errors</p>
                      </div>
                    </div>

                    {/* Interactive SKU Search Bar Mockup */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between mb-2 text-white/70">
                      <span className="text-[10px]">Search Pharma Catalog...</span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/80">⌘K</span>
                    </div>

                    {/* Featured Order Items */}
                    <div className="space-y-1.5">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-semibold text-white">Paracetamol 500mg Batch A</p>
                          <p className="text-[8px] text-white/50">Unit Stock: 45,000 Boxes</p>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400">$1,450.00</span>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-semibold text-white">Amoxicillin 250mg Injection</p>
                          <p className="text-[8px] text-white/50">Unit Stock: 12,300 Vials</p>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-400">$3,890.00</span>
                      </div>
                    </div>
                  </div>

                  {/* Submit Order Action Button */}
                  <div className="p-2.5 rounded-2xl bg-gradient-to-r from-[#0071E3] to-[#2997FF] text-white text-center font-medium text-xs shadow-lg flex items-center justify-center gap-2">
                    <Database size={13} />
                    <span>Instant Offline Order Sync</span>
                  </div>
                </motion.div>
              )}

              {/* LIVEORDER APP SCREEN MOCKUP */}
              {activeScreen === 'liveorder' && (
                <motion.div
                  key="liveorder"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col justify-between space-y-2"
                >
                  <div>
                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                          <Radio size={15} className="animate-pulse" />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">LiveOrder-csquare</p>
                          <p className="text-[9px] text-blue-400 font-mono">WebSocket Connected</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[9px] font-mono border border-emerald-500/30">
                        Live Stream
                      </span>
                    </div>

                    {/* Order Status Timeline */}
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2.5 mb-2">
                      <p className="text-[9px] uppercase font-mono text-white/50">Order #ORD-98421 Status</p>
                      
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-semibold text-white">Order Confirmed by Distributor</p>
                          <p className="text-[8px] text-white/50">09:40:12 AM • Verified</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="w-3.5 h-3.5 rounded-full bg-[#0071E3] flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0 animate-ping">
                          •
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold text-[#2997FF]">Dispatching Cargo Transit</p>
                          <p className="text-[8px] text-white/60">Estimated arrival in 18 mins</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 opacity-40">
                        <div className="w-3.5 h-3.5 rounded-full border border-white/40 flex-shrink-0" />
                        <div>
                          <p className="text-[10px] font-semibold text-white">Delivery Handover & Sign-off</p>
                          <p className="text-[8px] text-white/50">Pending</p>
                        </div>
                      </div>
                    </div>

                    {/* Live Metric */}
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-white/80">
                      <span>Swift Async/Await Pipeline</span>
                      <span className="text-emerald-400 font-bold font-mono">60 FPS</span>
                    </div>
                  </div>

                  <a
                    href="https://apps.apple.com/app/id1660025243"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-2xl bg-black border border-white/20 text-white text-center font-medium text-xs flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
                  >
                    <Sparkles size={13} className="text-[#2997FF]" />
                    <span>App Store Featured • ID: 1660025243</span>
                  </a>
                </motion.div>
              )}

              {/* LIVE-DOC APP SCREEN MOCKUP */}
              {activeScreen === 'livedoc' && (
                <motion.div
                  key="livedoc"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col justify-between space-y-2"
                >
                  <div>
                    <div className="flex items-center justify-between p-2.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                          <FileText size={15} />
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-white">Live-Doc Authenticator</p>
                          <p className="text-[9px] text-emerald-400 font-mono">AVFoundation Active</p>
                        </div>
                      </div>
                      <ShieldCheck size={16} className="text-emerald-400" />
                    </div>

                    {/* QR Code Hardware Scanner Viewfinder Mockup */}
                    <div className="relative h-36 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 overflow-hidden flex flex-col items-center justify-center p-4">
                      {/* Corner Target Guides */}
                      <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-emerald-400" />
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-emerald-400" />
                      <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-emerald-400" />

                      {/* Animated Laser Beam */}
                      <motion.div
                        animate={{ y: [-40, 40, -40] }}
                        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                        className="w-full h-0.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"
                      />

                      <QrCode size={42} className="text-emerald-300 opacity-80 my-2" />
                      <p className="text-[9px] font-mono text-emerald-300">Align QR Code to Verify</p>
                    </div>

                    {/* Encryption Details */}
                    <div className="mt-2 p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-[10px] text-white/80">
                      <div className="flex items-center gap-1.5">
                        <Lock size={12} className="text-emerald-400" />
                        <span>AES-256 Encrypted PDF</span>
                      </div>
                      <span className="text-emerald-400 font-mono font-bold">Sub-second Auth</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-emerald-600 text-white text-center font-medium text-xs flex items-center justify-center gap-2">
                    <ShieldCheck size={13} />
                    <span>Hardware Document Authentication</span>
                  </div>
                </motion.div>
              )}

              {/* SWIFT UI CODE PLAYGROUND MOCKUP */}
              {activeScreen === 'code' && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="flex-1 flex flex-col justify-between font-mono text-[10px] leading-relaxed"
                >
                  <div className="p-3 rounded-2xl bg-black border border-white/15 text-blue-300 overflow-hidden">
                    <p className="text-pink-400 font-semibold">// Swift 6.0 Engine</p>
                    <p className="text-purple-400">@Observable <span className="text-white">class</span> <span className="text-yellow-300 font-bold">SalesViewModel</span> &#123;</p>
                    <p className="pl-2 text-emerald-300"><span className="text-purple-400">private(set) var</span> catalog: [<span className="text-yellow-300">SKU</span>] = []</p>
                    <p className="pl-2 text-purple-400"><span className="text-pink-400">func</span> <span className="text-blue-300">syncOfflineEngine</span>() <span className="text-pink-400">async</span> &#123;</p>
                    <p className="pl-4 text-white"><span className="text-pink-400">let</span> records = <span className="text-pink-400">try</span>? <span className="text-pink-400">await</span></p>
                    <p className="pl-6 text-yellow-300">SQLiteEngine.fetchSKUs()</p>
                    <p className="pl-4 text-emerald-400"><span className="text-pink-400">self</span>.catalog = records</p>
                    <p className="pl-2 text-purple-400">&#125;</p>
                    <p className="text-purple-400">&#125;</p>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-center text-[10px] text-white/80 flex items-center justify-center gap-2">
                    <Code size={13} className="text-[#2997FF]" />
                    <span>Protocol-Driven Clean MVVM Architecture</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom Home Indicator Line */}
            <div className="w-28 h-1 bg-white/40 rounded-full mx-auto mt-2" />
          </div>

        </div>
      </motion.div>
    </div>
  );
};
