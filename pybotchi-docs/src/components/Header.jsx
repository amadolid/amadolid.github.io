export default function Header({ onSearchOpen, onNavigate }) {
  return (
    <header className="doc-header">
      <button className="header-logo" onClick={() => onNavigate('home')}>
        <span className="logo-text">PyBotchi</span>
        <span className="version-badge">docs</span>
      </button>

      <button className="header-search" onClick={onSearchOpen}>
        <span className="search-icon">⌕</span>
        <span className="search-placeholder">Search documentation...</span>
        <kbd className="search-kbd">Ctrl+K</kbd>
      </button>

      <div className="header-actions">
        <a
          href="https://github.com/amadolid/pybotchi"
          className="github-btn"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  )
}
