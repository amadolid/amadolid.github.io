import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function Special() {
  return (
    <>
      <h2>Special Attributes</h2>
      <p>
        Special class attributes are class-level variables prefixed and suffixed with double
        underscores (<code>__dunder__</code>). They control how an <code>Action</code> behaves
        during tool selection, execution, and child orchestration. Each attribute has a sensible
        default, so you only need to declare the ones you want to override.
      </p>

      <div className="lifecycle-hook-section">
        <h3>__concurrent__</h3>
        <p>
          When <code>True</code>, child actions that are marked concurrent run together inside an{' '}
          <code>asyncio.TaskGroup</code>. This is ideal for I/O-bound steps that can overlap in time.
        </p>
        <Note>
          <strong>Three mixing scenarios:</strong>
          <ul>
            <li><strong>All concurrent:</strong> every selected action runs in parallel; wait for all.</li>
            <li><strong>Leading concurrent + trailing sequential:</strong> the concurrent action starts in the background, then the sequential ones run one-by-one; wait for the background task last.</li>
            <li><strong>Leading sequential + trailing concurrent:</strong> sequential actions run first; the concurrent one fires last; wait for it to finish.</li>
          </ul>
        </Note>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


class ResearchAgent(Action):
    """Research and analyze a topic."""

    # Run selected child actions in parallel via asyncio.TaskGroup
    __concurrent__: bool = True  # default: False

    class FetchWebContent(Action):
        """Fetch content from the web."""

        url: str

        async def pre(self, context: Context) -> ActionReturn:
            # I/O bound — benefits from concurrency
            content = await fetch(url)
            await context.add_response(self, content)
            return ActionReturn.GO

    class FetchDatabaseRecords(Action):
        """Fetch related records from the database."""

        query: str

        async def pre(self, context: Context) -> ActionReturn:
            records = await db.query(self.query)
            await context.add_response(self, str(records))
            return ActionReturn.GO

    async def post(self, context: Context) -> ActionReturn:
        # Both child results are available here — consolidate them
        message = await context.llm.ainvoke(context.prompts)
        await context.add_response(self, message.text)
        return ActionReturn.GO`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_child_iteration__</h3>
        <p>
          Sets a maximum number of iterations when cycling through child actions. When greater than
          zero, the action re-runs its child selection loop up to this many times, allowing agentic
          loops without external recursion.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


class IterativeAnalyst(Action):
    """Iteratively refine the analysis."""

    # Allow up to 5 loops through child selection
    __max_child_iteration__: int = 5  # default: 0 (no iteration)
    __first_tool_only__: bool = True  # one step at a time

    class AnalyzeData(Action):
        """Analyze the provided data."""

        insight: str

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_response(self, self.insight)
            return ActionReturn.GO

    class GenerateReport(Action):
        """Generate the final report."""

        async def pre(self, context: Context) -> ActionReturn:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, message.text)
            return ActionReturn.GO

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        # When the LLM decides no tool is needed, stop iterating
        await context.add_response(self, content)
        return ActionReturn.BREAK  # breaks the iteration loop`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__first_tool_only__</h3>
        <p>
          When <code>True</code>, only the first tool call from the LLM response is executed, even
          if the model suggests multiple tools. This is useful for strictly sequential step-by-step
          workflows.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


class StepByStepAgent(Action):
    """Execute one step at a time."""

    __max_child_iteration__: int = 10
    __first_tool_only__: bool = True  # default: False

    class Step1(Action):
        """Execute step 1."""
        ...

    class Step2(Action):
        """Execute step 2."""
        ...

    class Step3(Action):
        """Execute step 3."""
        ...`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__system_prompt__</h3>
        <p>
          Overrides the system prompt used during the tool selection trigger for this action. If
          not set, the current conversation&apos;s system prompt is used. This lets each action
          specialise the LLM&apos;s persona for its own domain.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


class CodeReviewAgent(Action):
    """Review code for quality and security issues."""

    # This prompt is only active during tool selection for this action
    __system_prompt__: str | None = """
You are an expert code reviewer specializing in Python.
Focus on security vulnerabilities, performance issues, and code quality.
Always recommend actionable improvements.
""".strip()

    # default: None — uses the conversation's active system prompt

    class CheckSecurity(Action):
        """Check for security vulnerabilities."""
        ...

    class CheckPerformance(Action):
        """Identify performance bottlenecks."""
        ...`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__temperature__</h3>
        <p>
          Overrides the model temperature for the tool selection trigger of this action.
          Lower values (closer to 0) make output more deterministic; higher values increase creativity.
          If not set, the model&apos;s default temperature is used.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


class DeterministicRouter(Action):
    """Route requests with high consistency."""

    # Very low temperature for predictable routing decisions
    __temperature__: float | None = 0.0  # default: None (use model default)


class CreativeWriter(Action):
    """Generate creative content."""

    # Higher temperature for more varied, creative responses
    __temperature__: float | None = 1.2`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__default_tool__</h3>
        <p>
          Specifies the fallback action to use when the LLM does not select any declared child
          action. Defaults to <code>DEFAULT_ACTION</code>, which is a sentinel string that maps to
          an internal no-op. Set to a child action&apos;s name to route unmatched requests there.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context, DEFAULT_ACTION


class GeneralChat(Action):
    """Casual Generic Chat."""

    # When no child is selected, use "DefaultAction" (the fallback)
    __default_tool__: str = DEFAULT_ACTION  # default

    # Or override to route to a specific child:
    # __default_tool__: str = "DefaultAction"

    class AnswerQuestion(Action):
        """Answer a specific factual question."""
        ...

    class DefaultAction(Action):
        """General assistant for any request not covered by other tools."""

        async def pre(self, context: Context) -> ActionReturn:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, message.text)
            return ActionReturn.END`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__agent__</h3>
        <p>
          Tags an action as an &ldquo;agent type&rdquo;. This attribute is reserved for future
          use when PyBotchi adds support for custom agent implementations. It is{' '}
          <strong>not inheritable</strong> — subclasses always default back to{' '}
          <code>False</code> even if the parent sets it to <code>True</code>.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action


class MyAgent(Action):
    """A custom agent implementation."""

    # Not inheritable — always resets to False in subclasses
    __agent__: bool = False  # default

    ...


class MySubAgent(MyAgent):
    """Subclass."""

    # __agent__ is always False here, even though MyAgent sets it
    ...`}</CodeBlock>

        <Note>
          <strong>Note:</strong> This attribute is primarily a marker for tooling and introspection.
          It does not change runtime behavior in the current version of PyBotchi.
        </Note>
      </div>

      <div className="highlight-box">
        <h3>Quick Reference</h3>
        <CodeBlock language="python">{`class MyAction(Action):
    __system_prompt__: str | None = None      # Custom system prompt for tool selection
    __temperature__: float | None = None      # Model temperature override
    __default_tool__: str = DEFAULT_ACTION    # Fallback when no tool is selected
    __first_tool_only__: bool = False         # Only execute the first tool call
    __concurrent__: bool = False              # Run child actions in parallel
    # ── not inheritable ──────────────────────────────────────────────────────
    __agent__: bool = False                   # Mark as agent type`}</CodeBlock>
      </div>
    </>
  )
}
