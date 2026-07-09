export default function Home({ onNavigate }) {
  const features = [
    {
      icon: '🪶',
      title: 'Lightweight Architecture',
      body: (
        <>
          The entire system is built upon a minimal foundation of just three core classes:{' '}
          <code>Action</code> (the central agent with a defined lifecycle), <code>Context</code>{' '}
          (the universal container for conversational state and metadata), and <code>LLM</code> (a
          singleton client for managing your model connection). This lean design minimizes overhead,
          ensuring extreme speed and efficiency.
        </>
      ),
    },
    {
      icon: '🏗️',
      title: 'Object-Oriented Design',
      body: (
        <>
          Achieves maximum customizability through a powerful Object-Oriented structure. All base
          classes inherit from Pydantic <code>BaseModel</code>, ensuring rigorous data validation
          and adherence to industry-standard type hinting. This foundation makes every component
          inherently overridable and extendable to precisely match complex requirements.
        </>
      ),
    },
    {
      icon: '🔧',
      title: 'JSON Schema Native',
      body: (
        <>
          Built on Pydantic <code>BaseModel</code>, every Action automatically conforms to JSON
          Schema standards used by OpenAI, Gemini, and other LLM providers for tool calling.
          Anthropic requires minor adjustments, but with PyBotchi's overridable architecture, you
          can easily adapt to any provider's specification without compromising the core design.
        </>
      ),
    },
    {
      icon: '🎣',
      title: 'Action Lifecycle Hooks',
      body: (
        <>
          The base <code>Action</code> class provides essential lifecycle events (hooks) that
          developers can easily override or catch. This allows for precise control over the agent's
          behavior at critical points—such as before execution, after execution, or upon
          failure—greatly simplifying state management, logging, and error handling.
        </>
      ),
    },
    {
      icon: '⚡',
      title: 'Highly Scalable',
      body: `The system is built on an async-first architecture, maximizing concurrency and I/O
        efficiency. Leveraging this, along with its modularity and graph structure, the architecture
        is primed for distributed scaling. Agents can be deployed remotely or across different
        machines to isolate resources, optimize performance, and effortlessly handle massive,
        parallel workloads.`,
    },
    {
      icon: '🧱',
      title: 'Truly Modular',
      body: `Agents are developed as isolated, self-contained units. This means different teams can
        independently develop, improve, or modify specific agents without impacting the system's
        core logic. Any agent can function as a standalone unit, a subordinate in a workflow, or a
        Master Agent.`,
    },
    {
      icon: '🔗',
      title: 'Graph By Design',
      body: `The architecture enforces a structured parent-child relationship for agent
        orchestration. Agents are declared within a graph-like structure, explicitly defining
        potential task flow and delegation paths. This structure provides clear visibility into
        system execution and state even during development, simplifying debugging, testing, and
        complex multi-agent reasoning.`,
    },
    {
      icon: '🌍',
      title: 'Framework & Model Agnostic',
      body: `The inherent Object-Oriented nature ensures true agnosticism. By prioritizing
        overridability in every base class, the library allows developers to bypass default
        implementations entirely, catering to any specific LLM client, third-party framework, or
        unique business requirement without architectural restriction.`,
    },
  ]

  return (
    <>
      <div className="hero" id="overview">
        <h1>PyBotchi</h1>
        <p className="subtitle">Build scalable AI agent systems with ease</p>
        <p>
          A modern Python library for orchestrating multi-agent AI systems. Design and deploy agents
          that are inherently lightest, fastest, and most customizable. Leverage a modular,
          framework-agnostic, and scalable architecture to build intelligent agents that work
          together to solve complex problems.
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary" onClick={() => onNavigate('installation')}>
            Get Started
          </button>
          <a
            href="https://github.com/amadolid/pybotchi"
            className="btn btn-secondary"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>
        </div>
      </div>

      <div className="features-grid">
        {features.map(({ icon, title, body }) => (
          <div className="feature-card" key={title}>
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>
    </>
  )
}
