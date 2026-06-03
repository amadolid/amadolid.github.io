const NAV = [
  {
    group: 'Getting Started',
    links: [
      { id: 'home', label: 'Home' },
      { id: 'installation', label: 'Installation' },
      { id: 'quickstart', label: 'Quick Start' },
      { id: 'how-it-works', label: 'How it works' },
    ],
  },
  {
    group: 'Core Features',
    links: [
      { id: 'object-oriented', label: 'Object-Oriented' },
      { id: 'life-cycle', label: 'Life Cycle Hooks' },
      { id: 'grpc', label: 'gRPC (Scaling)' },
      { id: 'mcp', label: 'MCP' },
    ],
  },
  {
    group: 'Advanced',
    links: [
      { id: 'special', label: 'Special Attributes' },
      { id: 'nesting', label: 'Complex Nesting' },
      { id: 'runtime', label: 'Runtime Builder' },
      { id: 'reference', label: 'API Reference' },
    ],
  },
  {
    group: 'Resources',
    links: [
      { id: 'roadmap', label: 'Roadmap' },
      { id: 'examples', label: 'Examples' },
      { id: 'contrib', label: 'Contributing' },
    ],
  },
]

export default function Sidebar({ active, onNavigate, isOpen, onClose }) {
  return (
    <nav className={`sidebar${isOpen ? ' mobile-open' : ''}`}>
      {NAV.map(({ group, links }) => (
        <div className="nav-section" key={group}>
          <h3>{group}</h3>
          {links.map(({ id, label }) => (
            <button
              key={id}
              className={`nav-link ${active === id ? 'active' : ''}`}
              onClick={() => {
                onNavigate(id)
                onClose?.()
              }}
            >
              {label}
            </button>
          ))}
        </div>
      ))}
    </nav>
  )
}
