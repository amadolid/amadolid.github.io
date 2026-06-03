const BASE = 'https://github.com/amadolid/pybotchi/blob/master/examples'

const CATEGORIES = [
  {
    title: '🚀 Getting Started',
    desc: 'Start here if you\'re new to PyBotchi. These examples demonstrate the core concepts with minimal code, perfect for understanding the fundamentals.',
    examples: [
      { name: 'tiny.py', desc: 'Minimal implementation to get you started', href: `${BASE}/tiny.py` },
      { name: 'full_spec.py', desc: 'Complete feature demonstration showcasing all core capabilities', href: `${BASE}/full_spec.py` },
    ],
  },
  {
    title: '🔄 Execution Patterns',
    desc: 'Learn how to control execution flow in your agent systems. Master sequential processing, nested workflows, and complex orchestration patterns.',
    examples: [
      { name: 'sequential.py', desc: 'Sequential action execution via iteration or multi-tool calls', href: `${BASE}/sequential.py` },
      { name: 'nested_combination.py', desc: 'Complex hierarchical agent structures with parent-child relationships', href: `${BASE}/nested_combination.py` },
    ],
  },
  {
    title: '⚡ Parallel Processing',
    desc: 'Maximize performance with concurrent execution. These examples show how to run multiple actions simultaneously using async patterns and multi-threading.',
    examples: [
      { name: 'concurrent_combination.py', desc: 'Async-based parallel action execution for I/O-bound tasks', href: `${BASE}/concurrent_combination.py` },
      { name: 'concurrent_threading_combination.py', desc: 'Thread-based parallel processing for CPU-bound operations', href: `${BASE}/concurrent_threading_combination.py` },
    ],
  },
  {
    title: '🌐 Distributed Systems',
    desc: 'Scale your agents across multiple servers with gRPC. Deploy compute-intensive actions remotely while maintaining unified orchestration.',
    examples: [
      { name: 'grpc_pybotchi_agent.py', desc: 'Set up a gRPC server to expose actions as remote services', href: `${BASE}/grpc/grpc_pybotchi_agent.py` },
      { name: 'grpc_pybotchi_client.py', desc: 'Connect to remote gRPC servers and orchestrate distributed agents', href: `${BASE}/grpc/grpc_pybotchi_client.py` },
    ],
  },
  {
    title: '🔌 MCP Protocol',
    desc: 'Integrate with the Model Context Protocol ecosystem. Expose your agents as MCP tools or consume external MCP servers within your workflows.',
    examples: [
      { name: 'mcp_pybotchi_agent.py', desc: 'Create an MCP server to expose actions to Claude Desktop and other clients', href: `${BASE}/mcp/mcp_pybotchi_agent.py` },
      { name: 'mcp_pybotchi_client.py', desc: 'Consume MCP servers as child actions in your orchestration', href: `${BASE}/mcp/mcp_pybotchi_client.py` },
      { name: 'mcp_pybotchi_client_for_mcp_atlassian.py', desc: 'Integrate Atlassian\'s MCP services (Jira, Confluence) into PyBotchi workflows', href: `${BASE}/mcp/mcp_pybotchi_client_for_mcp_atlassian.py` },
    ],
  },
  {
    title: '💼 Production Use Cases',
    desc: 'Real-world applications demonstrating PyBotchi in production scenarios with advanced patterns like WebSocket communication and streaming responses.',
    examples: [
      { name: 'interactive_action.py', desc: 'Real-time bidirectional communication using WebSocket for interactive agents', href: `${BASE}/interactive_action.py` },
    ],
  },
  {
    title: '⚖️ Framework Comparisons',
    desc: 'See how PyBotchi compares to other agent frameworks. Same problem, different approaches—compare code clarity, flexibility, and implementation complexity.',
    examples: [
      { name: 'PyBotchi Implementation', desc: 'Weather agent using PyBotchi\'s lifecycle and orchestration patterns', href: `${BASE}/vs/pybotchi_approach.py` },
      { name: 'LangGraph Implementation', desc: 'Same weather agent built with LangGraph for direct comparison', href: `${BASE}/vs/langgraph_approach.py` },
    ],
  },
]

export default function Examples() {
  return (
    <>
      <h2>Examples</h2>
      <p>
        Explore practical examples demonstrating PyBotchi&apos;s capabilities, from basic
        implementations to complex real-world applications. All examples are available in the GitHub
        repository with complete, runnable code.
      </p>

      <div className="examples-grid">
        {CATEGORIES.map(({ title, desc, examples }) => (
          <div className="example-category" key={title}>
            <h3>{title}</h3>
            <p className="category-description">{desc}</p>
            <ul className="example-list">
              {examples.map(({ name, desc: exDesc, href }) => (
                <li key={name}>
                  <a href={href} target="_blank" rel="noreferrer" className="example-link">
                    <span className="example-name">{name}</span>
                    <span className="example-desc">{exDesc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="examples-footer">
        <p>Clone the repository and run them locally to see PyBotchi in action.</p>
        <a
          href="https://github.com/amadolid/pybotchi/tree/master/examples"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Browse All Examples on GitHub
        </a>
      </div>
    </>
  )
}
