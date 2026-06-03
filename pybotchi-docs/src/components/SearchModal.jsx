import { useState, useEffect, useRef } from 'react'
import { SEARCH_INDEX } from '../data/searchIndex'

export default function SearchModal({ onClose, onNavigate }) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(0)
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const results = query.length > 1
    ? SEARCH_INDEX.filter(item =>
        [item.title, item.section, item.text].some(s =>
          s.toLowerCase().includes(query.toLowerCase())
        )
      ).slice(0, 12)
    : []

  useEffect(() => { setSelected(0) }, [query])

  const go = (page) => {
    onNavigate(page)
    onClose()
  }

  const handleKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelected(s => Math.min(s + 1, results.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelected(s => Math.max(s - 1, 0))
    } else if (e.key === 'Enter' && results[selected]) {
      go(results[selected].page)
    } else if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-modal" onClick={e => e.stopPropagation()} onKeyDown={handleKey}>
        <div className="search-input-row">
          <span className="search-modal-icon">⌕</span>
          <input
            ref={inputRef}
            className="search-input"
            placeholder="Search documentation..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <button className="search-close" onClick={onClose}>Esc</button>
        </div>

        {results.length > 0 && (
          <ul className="search-results">
            {results.map((item, i) => (
              <li key={i}>
                <button
                  className={`search-result-item${i === selected ? ' selected' : ''}`}
                  onClick={() => go(item.page)}
                  onMouseEnter={() => setSelected(i)}
                >
                  <span className="result-page">{item.title}</span>
                  <span className="result-divider">›</span>
                  <span className="result-section">{item.section}</span>
                </button>
              </li>
            ))}
          </ul>
        )}

        {query.length > 1 && results.length === 0 && (
          <div className="search-empty">No results for &ldquo;{query}&rdquo;</div>
        )}

        {query.length === 0 && (
          <div className="search-hint">
            <span>Type to search</span>
            <span className="hint-keys"><kbd>↑↓</kbd> navigate · <kbd>↵</kbd> select · <kbd>Esc</kbd> close</span>
          </div>
        )}
      </div>
    </div>
  )
}
