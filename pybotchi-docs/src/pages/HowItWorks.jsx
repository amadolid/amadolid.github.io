export default function HowItWorks() {
  return (
    <div id="how-it-works">
      <div className="section-header">
        <h1>How It Works</h1>
        <p className="tagline">Understanding the philosophy and architecture behind PyBotchi</p>
      </div>

      <div className="philosophy-section">
        <h2>Why PyBotchi Exists</h2>
        <div className="philosophy-content">
          <div className="insight-block">
            <h3>Traditional Coding Already Works</h3>
            <p>
              We&apos;ve been building complex systems across every industry using traditional
              development approaches since the beginning of computing. Every application challenge
              has been solved deterministically through well-structured code, APIs, and events.
            </p>
          </div>
          <div className="insight-block">
            <h3>The Critical Gap: Natural Language Translation</h3>
            <p>
              The real limitation isn&apos;t in execution—it&apos;s in translation. Traditional
              systems require users to know specific structures, APIs, and interfaces. Every action
              needs dedicated endpoints. What if we could accept natural language and automatically
              route to the right logic?
            </p>
          </div>
          <div className="insight-block">
            <h3>LLMs as Translators, Not Replacements</h3>
            <p>
              Many frameworks try to replace traditional development with LLM-driven logic.
              PyBotchi takes a different approach: LLMs excel at understanding intent and
              translating between human and computer language—not at business logic, calculations,
              or deterministic execution. Let each do what it does best.
            </p>
          </div>
        </div>
      </div>

      <div className="diagram-section">
        <h2>The PyBotchi Workflow</h2>
        <div className="workflow-container">
          <div className="workflow-steps">
            <div className="workflow-step">
              <div className="step-number">1</div>
              <h3>Detect &amp; Translate</h3>
              <p>
                LLM processes natural language input to extract intents and identify the
                appropriate Action with its arguments.
              </p>
              <span className="tech-label">LLM Layer</span>
              <div className="arrow-connector">→</div>
            </div>
            <div className="workflow-step">
              <div className="step-number">2</div>
              <h3>Execute Logic</h3>
              <p>
                Traditional code handles business logic, calculations, and data
                processing—the deterministic work computers do best.
              </p>
              <span className="tech-label">Your Code</span>
              <div className="arrow-connector">→</div>
            </div>
            <div className="workflow-step">
              <div className="step-number">3</div>
              <h3>Generate Response</h3>
              <p>
                LLM transforms processed results back into natural language for human-friendly
                communication.
              </p>
              <span className="tech-label">LLM Layer</span>
            </div>
          </div>
        </div>
      </div>

      <div className="architecture-section">
        <h2 id="architecture">The Action Lifecycle Architecture</h2>

        <div className="architecture-diagram">
          <img
            src="assets/action-life-cycle.png"
            alt="PyBotchi Architecture Diagram"
            className="arch-diagram-img"
          />
          <p className="diagram-caption">
            Hierarchical action execution with parent-child relationships
          </p>
        </div>

        <div className="lifecycle-explanation">
          <h3>How the Lifecycle Works</h3>
          <p className="intro-text">
            Every Action in PyBotchi follows a structured lifecycle that gives you complete control
            over execution flow. This lifecycle enables precise orchestration of multi-agent systems
            while maintaining clean, maintainable code.
          </p>

          <div className="lifecycle-steps">
            {[
              {
                num: 1,
                title: 'Pre-Execution',
                body: (
                  <>
                    The Action&apos;s <code>pre</code> hook runs before any child agent selection.
                    This is where you implement business logic, validation, data gathering (RAG,
                    knowledge graphs), tool execution, or any custom processing. You have complete
                    freedom—use traditional code, call external APIs, or integrate other frameworks.
                  </>
                ),
              },
              {
                num: 2,
                title: 'Child Selection',
                body: `After pre-execution, the system determines which child Actions to execute next.
                  You can let the LLM decide via tool calling, or override this entirely with
                  traditional logic (if/else, switch cases). The choice is yours—use AI routing
                  when it makes sense, use deterministic code when it doesn't.`,
              },
              {
                num: 3,
                title: 'Child Execution',
                body: `Selected child Actions run through their own complete lifecycle. They maintain
                  references to their parent (the Action that called them) and can access sibling
                  Actions executed alongside them. This creates a hierarchical execution tree
                  that's automatically tracked and traceable.`,
              },
              {
                num: 4,
                title: 'Post-Processing',
                body: (
                  <>
                    The <code>post</code> hook runs after all child executions complete. Use it to
                    consolidate results, save data, perform cleanup, logging, or prepare the final
                    response. Like pre-execution, you have complete freedom to implement any logic
                    needed.
                  </>
                ),
              },
            ].map(({ num, title, body }) => (
              <div className="lifecycle-step" key={num}>
                <div className="step-header">
                  <div className="step-num">{num}</div>
                  <h4>{title}</h4>
                </div>
                <p>{body}</p>
              </div>
            ))}
          </div>

          <div className="additional-hooks">
            <h4>Additional Lifecycle Hooks</h4>
            <div className="hooks-grid">
              <div className="hook-card">
                <strong>on_error</strong>
                <p>Handle errors, implement retry logic, log issues, or re-raise for parent handling.</p>
              </div>
              <div className="hook-card">
                <strong>fallback</strong>
                <p>Triggered when no child is selected—handle non-tool responses or default behaviors.</p>
              </div>
              <div className="hook-card">
                <strong>commit_context</strong>
                <p>Control what data merges back to the main context—useful for reactive agents.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="key-insight">
          <h4>Why This Matters</h4>
          <p>
            This lifecycle gives you the best of both worlds: structured orchestration with complete
            flexibility. Use LLMs for intent detection and routing, but keep your business logic
            where it belongs—in well-tested, deterministic code. Override any hook, inject custom
            logic at any stage, and maintain full control over your system&apos;s behavior.
          </p>
        </div>

        <div className="architecture-grid">
          {[
            {
              title: '🏗️ Self-Documenting Graph',
              body: `Your code IS the architecture. Declare child Actions as class attributes and
                the execution graph emerges naturally. No separate diagramming tools, no manual
                synchronization—the graph structure is inherent in your code and always accurate.`,
            },
            {
              title: '🔄 Living Architecture',
              body: `Add, remove, or swap agents at runtime without system restarts. Access parent
                context and sibling state during execution. Your agent system adapts to changing
                requirements without architectural rewrites.`,
            },
            {
              title: '⚡ True Customization',
              body: `Override ANY hook with your own logic. Replace LLM routing with traditional
                if/else when needed. Integrate any framework, call any API, implement any business
                rule—PyBotchi enforces structure, not limitations.`,
            },
            {
              title: '🎯 Team Scalability',
              body: `Different teams can build isolated agents independently. No merge conflicts in
                graph definitions, no stepping on each other's code. Deploy agents separately, test
                in isolation, integrate seamlessly.`,
            },
          ].map(({ title, body }) => (
            <div className="arch-card" key={title}>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="highlight-box">
        <h3>The Core Philosophy</h3>
        <p>
          PyBotchi doesn&apos;t replace your code—it enhances it. By letting LLMs handle what
          they&apos;re good at (understanding intent) and letting your code handle what it&apos;s
          good at (executing logic), you get the best of both worlds: the flexibility of natural
          language with the reliability of deterministic execution.
        </p>
      </div>
    </div>
  )
}
