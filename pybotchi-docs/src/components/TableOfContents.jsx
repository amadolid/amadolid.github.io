import { useState, useEffect } from 'react'

export default function TableOfContents({ page, mainRef }) {
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    const container = mainRef?.current
    if (!container) return

    // Wait one tick for the page component to finish rendering
    const timer = setTimeout(() => {
      const els = container.querySelectorAll('h2, h3')
      setHeadings(
        Array.from(els).map(el => ({
          text: el.textContent.trim(),
          level: parseInt(el.tagName[1]),
          el,
        }))
      )
    }, 50)

    return () => clearTimeout(timer)
  }, [page, mainRef])

  if (!headings.length) return null

  const scrollTo = (el) => {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <aside className="toc">
      <div className="toc-header">On this page</div>
      <ul className="toc-list">
        {headings.map(({ text, level, el }) => (
          <li key={text} className={`toc-item toc-level-${level}`}>
            <button className="toc-link" onClick={() => scrollTo(el)}>{text}</button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
