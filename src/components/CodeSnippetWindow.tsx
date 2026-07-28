import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Copy, Check, Terminal, Play, Sparkles } from 'lucide-react';

export interface CodeSnippet {
  id: string;
  skillName: string;
  title: string;
  filename: string;
  code: string;
  consoleOutput: string;
  highlightLines?: number[];
  language: string;
}

export const codeSnippetsData: Record<string, CodeSnippet> = {
  'Swift': {
    id: 'swift',
    skillName: 'Swift 6 & Concurrency',
    title: 'Swift 6 Async/Await & Actor Data Safety',
    filename: 'DatabaseEngine.swift',
    language: 'swift',
    code: `import Foundation

/// Thread-safe Swift 6 Actor managing local SQLite transactions
public actor LocalDatabaseEngine {
    private var isSyncing = false
    
    public func fetchInventorySKUs() async throws -> [PharmaSKU] {
        // Enforce non-blocking async execution
        return try await Task.detached(priority: .userInitiated) {
            let records = try SQLiteDriver.query("SELECT * FROM skus LIMIT 100000")
            return records.map { PharmaSKU(row: $0) }
        }.value
    }
}`,
    consoleOutput: `[ConsoleLog] Task initialized on background thread pool...
[ConsoleLog] SQLite executed query: 100,000 SKUs fetched in 1.48 ms
[Status] Thread-safe actor state sync: Clean (0 race conditions)`
  },
  'SwiftUI': {
    id: 'swiftui',
    skillName: 'SwiftUI & Animations',
    title: 'Declarative 60 FPS Custom UI View',
    filename: 'OrderCardView.swift',
    language: 'swift',
    code: `import SwiftUI

struct OrderCardView: View {
    @State private var isPulsing = false
    let order: OrderModel
    
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            HStack {
                Text(order.title)
                    .font(.system(.headline, design: .rounded))
                Spacer()
                StatusBadge(status: order.status)
            }
            
            ProgressView(value: order.progress)
                .tint(.blue)
                .scaleEffect(isPulsing ? 1.02 : 1.0)
                .animation(.easeInOut(duration: 1).repeatForever(), value: isPulsing)
        }
        .padding(16)
        .glassBackground()
        .onAppear { isPulsing = true }
    }
}`,
    consoleOutput: `[SwiftUI Engine] Render cycle completed in 0.8ms (60 FPS locked)
[Animation] Repeat forever spring animation active`
  },
  'UIKit': {
    id: 'uikit',
    skillName: 'UIKit & Programmatic Layout',
    title: 'Custom AutoLayout & Programmatic Controls',
    filename: 'CustomOrderViewController.swift',
    language: 'swift',
    code: `import UIKit

final class CustomOrderViewController: UIViewController {
    private lazy var containerView: UIView = {
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .systemBackground
        view.layer.cornerRadius = 24
        return view
    }()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupProgrammaticConstraints()
    }
    
    private func setupProgrammaticConstraints() {
        view.addSubview(containerView)
        NSLayoutConstraint.activate([
            containerView.topAnchor.constraint(equalTo: view.safeAreaLayoutGuide.topAnchor, constant: 16),
            containerView.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 16),
            containerView.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: -16)
        ])
    }
}`,
    consoleOutput: `[UIKit Layout] Programmatic NSLayoutConstraint activated without ambiguity
[Performance] Zero autolayout warnings detected`
  },
  'Combine': {
    id: 'combine',
    skillName: 'Combine Reactive Streams',
    title: 'Debounced Real-Time Search Stream',
    filename: 'SearchStreamViewModel.swift',
    language: 'swift',
    code: `import Combine
import Foundation

final class SearchStreamViewModel: ObservableObject {
    @Published var searchQuery = ""
    @Published private(set) var searchResults: [Product] = []
    private var cancellables = Set<AnyCancellable>()
    
    init(repository: ProductRepository) {
        $searchQuery
            .debounce(for: .milliseconds(300), scheduler: RunLoop.main)
            .removeDuplicates()
            .flatMap { query in
                repository.searchProducts(query: query)
                    .catch { _ in Just([]) }
            }
            .assign(to: &$searchResults)
    }
}`,
    consoleOutput: `[Combine Stream] Debounce timer (300ms) active. Filtered typing noise.
[Stream Output] Emitted 48 matched product results.`
  },
  'SQLite': {
    id: 'sqlite',
    skillName: 'SQLite & Offline-First',
    title: 'Zero-Latency Offline Database Driver',
    filename: 'SQLiteStorageProvider.swift',
    language: 'swift',
    code: `import SQLite3
import Foundation

public final class SQLiteStorageProvider {
    private var db: OpaquePointer?
    
    public init(databasePath: String) {
        if sqlite3_open_v2(databasePath, &db, SQLITE_OPEN_READWRITE | SQLITE_OPEN_CREATE | SQLITE_OPEN_FULLMUTEX, nil) != SQLITE_OK {
            print("Error opening SQLite db")
        }
    }
    
    public func executeBatchInsert(orders: [OrderDTO]) throws {
        sqlite3_exec(db, "BEGIN TRANSACTION", nil, nil, nil)
        // Prepared statement bindings for sub-millisecond throughput...
        sqlite3_exec(db, "COMMIT", nil, nil, nil)
    }
}`,
    consoleOutput: `[SQLite Driver] Prepared batch insertion of 5,000 orders
[Benchmark] Execution time: 1.82ms | WAL Mode enabled`
  },
  'MVVM': {
    id: 'mvvm',
    skillName: 'MVVM & Clean Architecture',
    title: 'Protocol-Oriented Domain Layer',
    filename: 'OrderUseCase.swift',
    language: 'swift',
    code: `import Foundation

protocol OrderRepositoryProtocol {
    func getActiveOrders() async throws -> [Order]
}

final class FetchOrdersUseCase {
    private let repository: OrderRepositoryProtocol
    
    init(repository: OrderRepositoryProtocol) {
        self.repository = repository
    }
    
    func execute() async throws -> [Order] {
        let rawOrders = try await repository.getActiveOrders()
        return rawOrders.filter { !$0.isArchived }
    }
}`,
    consoleOutput: `[Clean Architecture] Domain layer isolated from API/DB frameworks
[Testing] Dependency injection mocked cleanly with Unit Tests`
  }
};

interface CodeSnippetWindowProps {
  activeSkillKey?: string;
  onSelectSkill?: (key: string) => void;
}

export const CodeSnippetWindow = ({ 
  activeSkillKey = 'Swift',
  onSelectSkill 
}: CodeSnippetWindowProps) => {
  const [currentKey, setCurrentKey] = useState(activeSkillKey);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (activeSkillKey && codeSnippetsData[activeSkillKey]) {
      setCurrentKey(activeSkillKey);
    }
  }, [activeSkillKey]);

  const activeSnippet = codeSnippetsData[currentKey] || codeSnippetsData['Swift'];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-3xl bg-[#0d0d11] border border-white/15 shadow-2xl overflow-hidden text-left flex flex-col font-sans">
      {/* IDE Window Header Bar */}
      <div className="bg-[#16161c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="text-xs text-white/50 font-mono ml-2 hidden sm:inline">
            Xcode 16.0 • {activeSnippet.filename}
          </span>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-1 overflow-x-auto max-w-[280px] sm:max-w-none scrollbar-none">
          {Object.keys(codeSnippetsData).map((key) => (
            <button
              key={key}
              onClick={() => {
                setCurrentKey(key);
                if (onSelectSkill) onSelectSkill(key);
              }}
              className={`px-3 py-1 rounded-lg text-[11px] font-mono font-medium transition-all ${
                currentKey === key
                  ? 'bg-[#0071E3] text-white shadow-sm'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Copy Code Button */}
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 transition-colors flex items-center gap-1.5 text-xs font-mono"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          <span className="hidden md:inline">{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Editor Body */}
      <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-blue-200 bg-[#09090d]">
        <AnimatePresence mode="wait">
          <motion.pre
            key={activeSnippet.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="whitespace-pre"
          >
            <code>
              {activeSnippet.code.split('\n').map((line, idx) => (
                <div key={idx} className="table-row">
                  <span className="table-cell pr-4 text-white/20 text-right select-none text-[11px]">
                    {idx + 1}
                  </span>
                  <span className="table-cell">
                    {/* Basic Swift Token Highlighting */}
                    {line
                      .replace(/import|func|var|let|actor|struct|class|final|private|public|return|try|await|guard|if|else|protocol|override|lazy/g, '🔑$&')
                      .split(/(🔑\w+)/)
                      .map((part, i) => {
                        if (part.startsWith('🔑')) {
                          return (
                            <span key={i} className="text-pink-400 font-semibold">
                              {part.replace('🔑', '')}
                            </span>
                          );
                        }
                        if (part.includes('//') || part.includes('///')) {
                          return <span key={i} className="text-emerald-400/80 italic">{part}</span>;
                        }
                        return <span key={i} className="text-white/90">{part}</span>;
                      })}
                  </span>
                </div>
              ))}
            </code>
          </motion.pre>
        </AnimatePresence>
      </div>

      {/* Simulated Console Log Tray */}
      <div className="bg-[#121218] border-t border-white/10 p-3.5 px-4 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-white/50 mb-1.5">
          <Terminal size={13} className="text-emerald-400" />
          <span className="uppercase tracking-wider font-semibold text-[9px]">Simulator Console Stream</span>
        </div>
        <div className="text-emerald-400/90 whitespace-pre-wrap leading-tight bg-black/40 p-2.5 rounded-xl border border-white/5">
          {activeSnippet.consoleOutput}
        </div>
      </div>
    </div>
  );
};
