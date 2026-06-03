import { useState } from 'react'

export default function Collapsible({ summary, children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="collapsible-section">
      <div className="collapsible-summary" onClick={() => setOpen(!open)}>
        <span className={`collapsible-arrow ${open ? 'open' : ''}`}>▶</span>
        <span>{summary}</span>
      </div>
      {open && <div className="collapsible-content">{children}</div>}
    </div>
  )
}
