const PAGE_ORDER = [
  'home', 'installation', 'quickstart', 'how-it-works',
  'object-oriented', 'life-cycle', 'grpc', 'mcp',
  'special', 'nesting', 'runtime', 'reference',
  'roadmap', 'examples', 'contrib',
]

const PAGE_LABELS = {
  home: 'Home',
  installation: 'Installation',
  quickstart: 'Quick Start',
  'how-it-works': 'How It Works',
  'object-oriented': 'Object-Oriented',
  'life-cycle': 'Life Cycle Hooks',
  grpc: 'gRPC (Scaling)',
  mcp: 'MCP',
  special: 'Special Attributes',
  nesting: 'Complex Nesting',
  runtime: 'Runtime Builder',
  reference: 'API Reference',
  roadmap: 'Roadmap',
  examples: 'Examples',
  contrib: 'Contributing',
}

export default function PageNav({ active, onNavigate }) {
  const idx = PAGE_ORDER.indexOf(active)
  const prev = idx > 0 ? PAGE_ORDER[idx - 1] : null
  const next = idx >= 0 && idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null

  if (!prev && !next) return null

  return (
    <nav className="page-nav">
      <div className="page-nav-side">
        {prev && (
          <button className="page-nav-btn" onClick={() => onNavigate(prev)}>
            <span className="nav-arrow">←</span>
            <span className="nav-info">
              <span className="nav-label">Previous</span>
              <span className="nav-title">{PAGE_LABELS[prev]}</span>
            </span>
          </button>
        )}
      </div>
      <div className="page-nav-side page-nav-right">
        {next && (
          <button className="page-nav-btn" onClick={() => onNavigate(next)}>
            <span className="nav-info">
              <span className="nav-label">Next</span>
              <span className="nav-title">{PAGE_LABELS[next]}</span>
            </span>
            <span className="nav-arrow">→</span>
          </button>
        )}
      </div>
    </nav>
  )
}
