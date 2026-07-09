import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function Contributing() {
  return (
    <>
      <h2>Contributing</h2>

      <div className="contributing-intro">
        <p>
          Thank you for your interest in contributing to PyBotchi! We welcome bug reports, feature
          requests, documentation improvements, code contributions, and example applications.
        </p>
      </div>

      <h3 id="development-setup">🚀 Development Setup</h3>

      <div className="setup-steps">
        <div className="setup-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h4>Fork and clone the repository</h4>
            <CodeBlock language="bash">{`git clone https://github.com/YOUR_USERNAME/pybotchi.git
cd pybotchi`}</CodeBlock>
          </div>
        </div>

        <div className="setup-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h4>Install dependencies</h4>
            <CodeBlock language="bash">{`pip install poetry
poetry install --all-extras`}</CodeBlock>
          </div>
        </div>

        <div className="setup-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h4>Set up pre-commit hooks</h4>
            <CodeBlock language="bash">pre-commit install</CodeBlock>
            <p className="note-text">
              Once installed, pre-commit will automatically run code formatting and quality checks
              on every commit.
            </p>
          </div>
        </div>

        <div className="setup-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h4>Create a feature branch</h4>
            <CodeBlock language="bash">git checkout -b feature/your-feature-name</CodeBlock>
          </div>
        </div>
      </div>

      <h3>🧪 Code Quality</h3>
      <p>
        Pre-commit hooks will automatically run formatting and quality checks when you commit. To
        manually run checks:
      </p>

      <CodeBlock language="bash">{`# Run all pre-commit hooks manually
pre-commit run --all-files

# Or run specific tools
ruff check --fix .
ruff format .
mypy pybotchi`}</CodeBlock>

      <h3 id="code-style">📝 Code Style</h3>
      <div className="style-guidelines">
        <ul>
          <li><strong>Line length:</strong> 120 characters max</li>
          <li><strong>Python:</strong> 3.12+ target</li>
          <li><strong>Docstrings:</strong> Single sentence if descriptive enough, Google-style for complex cases</li>
          <li><strong>Type hints:</strong> Required for function signatures</li>
        </ul>
      </div>

      <p>Example:</p>
      <CodeBlock language="python">{`"""Example action module demonstrating PyBotchi coding standards."""

from pybotchi import Action, ActionReturn, Context
from pydantic import Field


class ExampleAction(Action):
    """Processes user requests and generates responses."""

    field_name: str = Field(description="Field description")

    async def pre(self, context: Context) -> None:
        """Execute pre-processing logic before child actions."""`}</CodeBlock>

      <h3>💬 Commit Messages</h3>
      <p>Use clear, descriptive commit messages with capitalized type prefixes:</p>

      <CodeBlock language="bash">{`[TYPE]: Description

[optional body]`}</CodeBlock>

      <div className="commit-types">
        {[
          { badge: '[MAJOR]', desc: 'Breaking changes, major refactors' },
          { badge: '[MINOR]', desc: 'New features, enhancements' },
          { badge: '[BUGFIX]', desc: 'Bug fixes' },
          { badge: '[DOCS]', desc: 'Documentation changes' },
          { badge: '[CHORE]', desc: 'Maintenance, dependencies' },
          { badge: '[PERF]', desc: 'Performance improvements' },
        ].map(({ badge, desc }) => (
          <div className="commit-type-card" key={badge}>
            <span className="type-badge">{badge}</span>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <Note>
        <strong>Note:</strong> Types can be anything descriptive that clearly communicates the
        change (e.g., [SECURITY], [STYLE], etc.)
      </Note>

      <p>
        <strong>Examples:</strong>
      </p>
      <CodeBlock language="bash">{`[MINOR]: Add custom metadata support for gRPC connections
[BUGFIX]: Resolve SSE transport disconnection in MCP
[DOCS]: Update installation instructions
[MAJOR]: Refactor Action lifecycle hooks`}</CodeBlock>

      <h3 id="pull-requests">🔄 Pull Request Process</h3>

      <div className="pr-steps">
        <div className="pr-step">
          <h4>1. Commit your changes</h4>
          <p>Pre-commit hooks will automatically check code quality</p>
        </div>
        <div className="pr-step">
          <h4>2. Update documentation</h4>
          <p>If needed, update relevant docs</p>
        </div>
        <div className="pr-step">
          <h4>3. Rebase on main</h4>
          <CodeBlock language="bash">{`git fetch origin
git rebase origin/main`}</CodeBlock>
        </div>
        <div className="pr-step">
          <h4>4. Push and create PR</h4>
          <p>Include:</p>
          <ul>
            <li>Clear title (following commit format)</li>
            <li>Description of changes</li>
            <li>Reference to related issues (e.g., &quot;Fixes #123&quot;)</li>
          </ul>
        </div>
      </div>

      <div className="pr-checklist">
        <h4>PR Checklist</h4>
        <ul>
          <li>☑ Code follows style guidelines (enforced by pre-commit)</li>
          <li>☑ Documentation updated</li>
          <li>☑ No breaking changes (or documented)</li>
        </ul>
      </div>

      <h3>🐛 Reporting Bugs</h3>
      <p>Include in your bug report:</p>
      <div className="contribution-types">
        {[
          { title: 'Clear Description', desc: "What's the issue you're experiencing?" },
          { title: 'Steps to Reproduce', desc: 'How can we recreate the problem?' },
          { title: 'Expected vs Actual', desc: 'What should happen vs what actually happens?' },
          { title: 'Environment', desc: 'PyBotchi version, Python version, OS' },
        ].map(({ title, desc }) => (
          <div className="contribution-card" key={title}>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>

      <h3>💡 Feature Requests</h3>
      <p>Include in your proposal:</p>
      <ul>
        <li><strong>Feature description</strong> — What are you proposing?</li>
        <li><strong>Use case</strong> — What problem does it solve?</li>
        <li><strong>Proposed implementation</strong> — If you have ideas</li>
      </ul>

      <h3>📖 Documentation</h3>
      <p>Help improve:</p>
      <div className="doc-areas">
        {[
          { icon: '📚', title: 'API Reference' },
          { icon: '📝', title: 'Tutorials & Guides' },
          { icon: '💼', title: 'Real-world Examples' },
          { icon: '✨', title: 'Best Practices' },
        ].map(({ icon, title }) => (
          <div className="doc-card" key={title}>
            <span>{icon}</span>
            <h4>{title}</h4>
          </div>
        ))}
      </div>

      <h3>🤝 Community Guidelines</h3>
      <div className="community-guidelines">
        <ul>
          <li>Be respectful and constructive</li>
          <li>Provide helpful feedback</li>
          <li>Work collaboratively</li>
          <li>Welcome contributors of all backgrounds</li>
        </ul>
      </div>

      <div className="highlight-box">
        <h3>📄 License</h3>
        <p>
          By contributing, you agree that your contributions will be licensed under the Apache
          License 2.0.
        </p>
      </div>

      <div className="contributing-footer">
        <p>Thank you for contributing to PyBotchi! 🚀</p>
        <a
          href="https://github.com/amadolid/pybotchi"
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </>
  )
}
