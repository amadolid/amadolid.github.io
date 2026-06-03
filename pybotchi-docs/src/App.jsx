import { useState, useEffect, useRef } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import SearchModal from './components/SearchModal'
import TableOfContents from './components/TableOfContents'
import PageNav from './components/PageNav'
import Home from './pages/Home'
import Installation from './pages/Installation'
import QuickStart from './pages/QuickStart'
import HowItWorks from './pages/HowItWorks'
import ObjectOriented from './pages/ObjectOriented'
import LifeCycle from './pages/LifeCycle'
import GRPC from './pages/GRPC'
import MCP from './pages/MCP'
import Special from './pages/Special'
import Nesting from './pages/Nesting'
import Runtime from './pages/Runtime'
import Examples from './pages/Examples'
import Contributing from './pages/Contributing'
import Reference from './pages/Reference'
import WIP from './pages/WIP'

const PAGES = {
  home: Home,
  installation: Installation,
  quickstart: QuickStart,
  'how-it-works': HowItWorks,
  'object-oriented': ObjectOriented,
  'life-cycle': LifeCycle,
  grpc: GRPC,
  mcp: MCP,
  special: Special,
  nesting: Nesting,
  runtime: Runtime,
  reference: Reference,
  roadmap: WIP,
  examples: Examples,
  contrib: Contributing,
}

function getHash() {
  return window.location.hash.slice(1) || 'home'
}

export default function App() {
  const [active, setActive] = useState(getHash)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const mainRef = useRef(null)

  useEffect(() => {
    const handler = () => setActive(getHash())
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  useEffect(() => {
    if (mainRef.current) mainRef.current.scrollTo(0, 0)
  }, [active])

  useEffect(() => {
    const handler = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const navigate = (id) => {
    setActive(id)
    history.pushState(null, '', `#${id}`)
    setSidebarOpen(false)
  }

  const PageComponent = PAGES[active] || WIP

  return (
    <>
      <Header onSearchOpen={() => setSearchOpen(true)} onNavigate={navigate} />

      {searchOpen && (
        <SearchModal onClose={() => setSearchOpen(false)} onNavigate={navigate} />
      )}

      <div className="container">
        <button
          className="hamburger"
          onClick={() => setSidebarOpen((o) => !o)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {sidebarOpen && (
          <div
            className="sidebar-overlay"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        <Sidebar
          active={active}
          onNavigate={navigate}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="main-content" ref={mainRef}>
          <PageComponent onNavigate={navigate} />
          <PageNav active={active} onNavigate={navigate} />
        </main>

        <TableOfContents page={active} mainRef={mainRef} />
      </div>
    </>
  )
}
