import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function Reference() {
  return (
    <>
      <h2>API Reference</h2>
      <p>
        Complete reference for all PyBotchi classes, methods, attributes, and utilities.
        Only override or set what you need — every attribute has a sensible default.
      </p>

      {/* ================================================================ */}
      <h2>Execution Flow</h2>
      <p>
        Every call to <code>context.start(MyAction)</code> follows this exact sequence:
      </p>
      <CodeBlock language="python">{`context.start(MyAction)
  └─ validates prompts[0] is system role
  └─ action.execute(context)
       └─ sets _parent, optionally detaches context, checks self-recursion
       └─ pre(context)
       └─ iteration loop (up to __max_child_iteration__ + 1 times):
            └─ execution(context)
                 ├─ get_child_actions(context)  → filtered children dict
                 ├─ [fast path: 1 child, 0 Pydantic fields, no fallback → run directly, no LLM]
                 ├─ child_selection(context, children)  → selected [(action, args), ...]
                 │    └─ default: LLM tool call (tool_choice="required" if no fallback, "auto" if fallback)
                 │    └─ for each tool call: instantiate child; on failure → on_child_init_error()
                 ├─ run selected children (concurrent or sequential based on child's __concurrent__)
                 └─ fallback(context, content) if LLM selected nothing
                      [if zero children: LLM is auto-invoked first, result passed to fallback]
       └─ post(context)
       └─ [on_max_iteration() if loop exhausted without BREAK/END]
       └─ commit_context(context, child_context) in finally  [only if __detached__ = True]`}</CodeBlock>

      {/* ================================================================ */}
      <h2>Action Class Variables</h2>
      <p>
        Declare these as class-level annotations on your <code>Action</code> subclass.
        Attributes marked <strong>not inheritable</strong> always reset to their default in subclasses.
      </p>

      <div className="lifecycle-hook-section">
        <h3>__enabled__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: <code>True</code>
        </p>
        <p>
          Whether this action appears in <code>get_child_actions()</code>. Can be overridden
          per-request via <code>context.allowed_actions</code>. Set <code>False</code> at
          class level to hide an action entirely by default.
        </p>
        <CodeBlock language="python">{`class BetaFeature(Action):
    """Not ready for production."""
    __enabled__: bool = False   # hidden from parent LLM tool selection`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__concurrent__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: <code>False</code>
        </p>
        <p>
          Set on <strong>child actions</strong>, not the parent. When <code>True</code>, this
          child runs inside an <code>asyncio.TaskGroup</code> concurrently alongside other
          concurrent children. Mixed lists (some concurrent, some sequential) are supported —
          concurrent ones run in the background while sequential ones run in order.
        </p>
        <CodeBlock language="python">{`class Pipeline(Action):
    """Orchestrates the pipeline."""

    class FetchWeb(Action):
        """Fetch web content."""
        __concurrent__: bool = True   # spawned as a background task in TaskGroup
        url: str

    class FetchDB(Action):
        """Fetch database records."""
        __concurrent__: bool = True   # also a background task — overlaps with FetchWeb

    class Summarize(Action):
        """Summarize all fetched content."""
        # __concurrent__ = False (default) — runs inline at its position in next_actions`}</CodeBlock>
        <Note>
          Execution iterates <code>next_actions</code> in order. Concurrent children
          (<code>__concurrent__=True</code>) are spawned as <code>TaskGroup</code> tasks and
          run in the background. Sequential children (<code>__concurrent__=False</code>) are
          awaited inline <strong>at their position</strong> in the list — they do not
          automatically wait for earlier concurrent tasks to finish first.
        </Note>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_child_iteration__</h3>
        <p>
          Type: <code>int | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Loops <code>execution()</code> up to N extra times. <code>None</code> means run once.
          On exhaustion <code>on_max_iteration()</code> is called. Use <code>ActionReturn.BREAK</code>{' '}
          or <code>ActionReturn.END</code> from any hook to exit early.
        </p>
        <CodeBlock language="python">{`class Researcher(Action):
    __max_child_iteration__: int = 5   # up to 5 extra iterations
    __first_tool_only__: bool = True

    class Search(Action):
        """Search the web for information."""
        query: str

    class Summarize(Action):
        """Produce the final answer — call this when enough info is gathered."""

        async def pre(self, context: Context) -> ActionReturn:
            msg = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, msg.text)
            return ActionReturn.END   # stop the iteration loop`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_iteration__</h3>
        <p>
          Type: <code>int | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Per-class self-recursion limit. Takes priority over <code>context.max_self_loop</code>.
          Checked in <code>check_self_recursion()</code> each time this action class is about
          to execute.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__first_tool_only__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: <code>False</code>
        </p>
        <p>
          When <code>True</code>: sets <code>parallel_tool_calls=False</code> on the LLM binding
          AND only the first selected action runs, regardless of how many the LLM called.
          Combine with <code>__max_child_iteration__</code> for strict step-by-step workflows.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__system_prompt__</h3>
        <p>
          Type: <code>str | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Replaces <code>{'${system}'}</code> in the tool-call prompt and the finalization prompt.
          Also used as the MCP tool&apos;s system prompt when this action is exposed as a server.
          Falls back to <code>context.prompts[0]["content"]</code> when <code>None</code>.
        </p>
        <CodeBlock language="python">{`class CodeReviewer(Action):
    __system_prompt__: str | None = """
You are a senior Python engineer. Review for security, performance, and correctness.
""".strip()`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__temperature__</h3>
        <p>
          Type: <code>float | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Applied as <code>.with_config(configurable={'{'}"llm_temperature": value{'}'})</code> on
          the LLM. Affects tool selection, fallback invocation, and <code>on_max_iteration</code>.
          <code>None</code> uses the model&apos;s configured default.
        </p>
        <CodeBlock language="python">{`class PreciseRouter(Action):
    __temperature__: float | None = 0.0   # deterministic routing

class CreativeWriter(Action):
    __temperature__: float | None = 1.2   # more varied output`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_tool_prompts__</h3>
        <p>
          Type: <code>int | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Sliding window: only the last N prompts (minimum index 1, always keeping the system
          prompt) are sent to the LLM during <code>child_selection()</code>. Useful for keeping
          token costs low in long iteration loops. <code>None</code> sends all prompts.
        </p>
        <CodeBlock language="python">{`class LongRunningAgent(Action):
    __max_child_iteration__: int = 20
    __max_tool_prompts__: int = 6   # only last 6 messages sent to LLM each cycle`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__default_tool__</h3>
        <p>
          Type: <code>str</code> &nbsp;|&nbsp; Default: <code>"DefaultAction"</code>{' '}
          (configurable via <code>DEFAULT_ACTION</code> env var)
        </p>
        <p>
          Name of the action injected as <code>{'${default}'}</code> in the tool-call prompt
          template — it acts as the suggested default choice for the LLM. When the LLM selects
          it, that action <strong>runs normally</strong> like any other child.
        </p>
        <p>
          <code>fallback()</code> is separate: it is only called when{' '}
          <code>fallback</code> is implemented <em>and</em> the LLM did not select any tool at
          all. The two are independent mechanisms.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context

class Router(Action):
    # "GeneralAnswer" is suggested to the LLM as the default choice in the prompt.
    # The LLM can still pick any other child; this just biases the selection.
    __default_tool__: str = "GeneralAnswer"

    class AnswerQuestion(Action):
        """Answer a specific factual question."""

    class GeneralAnswer(Action):
        """General-purpose response for anything not covered above."""

        async def pre(self, context: Context) -> ActionReturn:
            msg = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, msg.text)
            return ActionReturn.END

    # fallback() is NOT called when GeneralAnswer runs — it would only be called
    # if fallback() were defined here AND the LLM selected no tool at all.`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__tool_call_prompt__</h3>
        <p>
          Type: <code>str | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Replaces the entire tool-selection system prompt template. Supports placeholders:{' '}
          <code>{'${tool_choice}'}</code>, <code>{'${default}'}</code>,{' '}
          <code>{'${system}'}</code>, <code>{'${addons}'}</code>. Falls back to{' '}
          <code>DEFAULT_TOOL_CALL_PROMPT</code> (overridable via env var).
        </p>
        <CodeBlock language="python">{`class MyAction(Action):
    __tool_call_prompt__: str | None = """
\${system}

Available tools: \${tool_choice}
Default fallback: \${default}

\${addons}
""".strip()`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_iteration_prompt__</h3>
        <p>
          Type: <code>str | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Replaces the finalization prompt used when <code>__max_child_iteration__</code> is
          exhausted. Supports <code>{'${system}'}</code>. Falls back to{' '}
          <code>DEFAULT_MAX_ITERATION_PROMPT</code> (overridable via env var).
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__display_name__</h3>
        <p>
          Type: <code>str</code> &nbsp;|&nbsp; Default: <code>cls.__name__</code> &nbsp;|&nbsp;
          <strong> not inheritable</strong>
        </p>
        <p>
          Used in <code>notify()</code> events and as the MCP tool title. Defaults to the class
          name. Override to show a human-friendly name without renaming the class.
        </p>
        <CodeBlock language="python">{`class SearchKnowledgeBase(Action):
    """Search internal knowledge base."""
    __display_name__: str = "Search"   # shown in UI / MCP title`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__groups__</h3>
        <p>
          Type: <code>Groups | set[str] | None</code> &nbsp;|&nbsp; Default: <code>None</code>{' '}
          &nbsp;|&nbsp; <strong>not inheritable</strong>
        </p>
        <p>
          Registers this action into integration groups. A <code>set[str]</code> applies to{' '}
          <strong>all valid groups</strong> simultaneously (<code>"mcp"</code>,{' '}
          <code>"grpc"</code>, <code>"a2a"</code>, etc.). Use the <code>Groups</code> dict
          form to target specific integration types.
        </p>
        <CodeBlock language="python">{`# set[str] — expose to ALL valid groups (mcp, grpc, a2a) under these names
class SearchTool(MCPAction):
    __groups__: set[str] = {"tools", "public"}

# Groups dict — target specific integration types
from pybotchi.mcp import MCPAction
class AdminTool(MCPAction):
    __groups__ = {"mcp": {"admin"}, "grpc": {"internal"}}`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__detached__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: auto
        </p>
        <p>
          Auto-set <code>True</code> when you override <code>commit_context</code>. Can also
          be set explicitly. When <code>True</code>: <code>execute()</code> calls{' '}
          <code>context.detach_context()</code> to create an isolated copy for children to
          work on.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__to_commit__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: <code>True</code> &nbsp;|&nbsp;
          <strong> not inheritable</strong>
        </p>
        <p>
          Set <code>False</code> internally when an exception propagates without being handled
          by <code>on_error</code>. Prevents <code>commit_context()</code> from running in the
          <code>finally</code> block. Can also be set manually to suppress merging.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__agent__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: <code>False</code> &nbsp;|&nbsp;
          <strong> not inheritable</strong>
        </p>
        <p>
          Metadata marker for the <code>all_agents()</code> generator. No runtime behavior.
          Always resets to <code>False</code> in subclasses.
        </p>
      </div>

      {/* ================================================================ */}
      <h2>Overridable Methods</h2>
      <p>
        All methods below have default implementations. Override only what your logic requires.
      </p>

      <div className="lifecycle-hook-section">
        <h3>pre</h3>
        <CodeBlock language="python">{`async def pre(self, context: Context) -> ActionReturn:`}</CodeBlock>
        <p>
          Called first, before any child selection. Default: returns <code>GO</code>.
          Use for input validation, data gathering (RAG), or setting up state. Return{' '}
          <code>ActionReturn.END</code> to skip children entirely.
        </p>
        <CodeBlock language="python">{`async def pre(self, context: Context) -> ActionReturn:
    if not self.query:
        await context.add_response(self, "No query provided.")
        return ActionReturn.END
    await context.set_metadata("query", value=self.query)
    return ActionReturn.GO`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>post</h3>
        <CodeBlock language="python">{`async def post(self, context: Context) -> ActionReturn:`}</CodeBlock>
        <p>
          Called after all children complete (after the iteration loop exits).
          Default: returns <code>GO</code>. Use for consolidating results, cleanup, or final
          LLM summarization.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>fallback</h3>
        <CodeBlock language="python">{`async def fallback(self, context: Context, content: str) -> ActionReturn:`}</CodeBlock>
        <p>
          Called when: (a) the LLM selected no tools, or (b) the action has zero children
          (in which case the LLM is auto-invoked first and the result is passed here).
          Default: returns <code>GO</code>. Use to handle plain-text responses or break
          iteration loops.
        </p>
        <CodeBlock language="python">{`async def fallback(self, context: Context, content: str) -> ActionReturn:
    await context.add_response(self, content)
    return ActionReturn.BREAK   # done — exit the iteration loop`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_child_init_error</h3>
        <CodeBlock language="python">{`async def on_child_init_error(
    self,
    context: Context,
    next_actions: list[tuple[type[Action], dict]],
    child_cls: type[Action],
    child_args: dict,
    exception: Exception,
) -> str | None:`}</CodeBlock>
        <p>
          Called when a child action fails to instantiate from the LLM&apos;s tool call args
          (e.g. Pydantic validation error). Default: not defined (re-raises). Return a string
          to inject as a correction message and retry; return <code>None</code> to abort.
        </p>
        <CodeBlock language="python">{`async def on_child_init_error(self, context, next_actions, child_cls, child_args, exception):
    return (
        f"Tool '{child_cls.__name__}' was called with invalid args: {exception}. "
        "Please correct the arguments and try again."
    )`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_error</h3>
        <CodeBlock language="python">{`async def on_error(
    self,
    context: Context,
    exception: Exception,
    unwrapped_exceptions: list[Exception],
) -> ActionReturn:`}</CodeBlock>
        <p>
          Called when any unhandled exception propagates through <code>execute()</code>.
          Default: not defined (re-raises). Return an <code>ActionReturn</code> to recover,
          or re-raise. <code>unwrapped_exceptions</code> is the flattened list from
          <code>unwrap_exceptions()</code>.
        </p>
        <CodeBlock language="python">{`async def on_error(self, context, exception, unwrapped_exceptions) -> ActionReturn:
    match exception:
        case ConnectionError():
            await context.add_message(ChatRole.USER, "Connection lost, retrying...")
            return ActionReturn.GO
        case _:
            raise exception`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_max_iteration</h3>
        <CodeBlock language="python">{`async def on_max_iteration(self, context: Context) -> ActionReturn:`}</CodeBlock>
        <p>
          Called after <code>__max_child_iteration__</code> is exhausted without a BREAK or END.
          Default: invokes the LLM with <code>max_iteration_prompt()</code> and adds the response.
          Override for custom finalization, structured output, or graceful degradation.
          <strong> Not called when END is returned.</strong>
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>commit_context</h3>
        <CodeBlock language="python">{`async def commit_context(self, context: Context, child_context: Context) -> None:`}</CodeBlock>
        <p>
          Called in the <code>finally</code> block when <code>__detached__</code> is{' '}
          <code>True</code>. Default: merges <code>child_context</code> token usages into{' '}
          <code>context</code>. Override to selectively merge prompts, metadata, or other state
          from the isolated branch back into the parent context.
        </p>
        <CodeBlock language="python">{`async def commit_context(self, context: Context, child_context: Context) -> None:
    # Only bring back messages added after the branch point
    new_messages = child_context.prompts[len(context.prompts):]
    context.prompts.extend(new_messages)
    # Merge usages from parent (always call this)
    await super().commit_context(context, child_context)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>child_selection</h3>
        <CodeBlock language="python">{`async def child_selection(
    self,
    context: Context,
    child_actions: ChildActions | None = None,
) -> tuple[list[Action], str]:`}</CodeBlock>
        <p>
          Called during <code>execution()</code> to determine which children run. Returns a
          tuple of <code>(actions, content)</code>:
        </p>
        <ul>
          <li><code>actions</code> — list of instantiated child <code>Action</code> objects to execute (may be empty)</li>
          <li><code>content</code> — the LLM&apos;s plain-text message when it did not select any tool (empty string otherwise); routed to <code>fallback(content)</code> when actions is empty</li>
        </ul>
        <p>
          Override to add filtering, validation, inject additional actions, or completely bypass
          the LLM for complex routing logic.
        </p>

        <h4>Scenario 1 — Additional filtering</h4>
        <p>Call super, then narrow the returned list based on runtime conditions:</p>
        <CodeBlock language="python">{`async def child_selection(self, context, child_actions=None):
    actions, content = await super().child_selection(context, child_actions)
    if not actions:
        return actions, content   # LLM gave no tool calls — pass through to fallback()
    allowed = context.metadata.get("allowed_tools", set())
    return [a for a in actions if type(a).__name__ in allowed], content`}</CodeBlock>

        <h4>Scenario 2 — Validation</h4>
        <p>Raise or abort when the LLM picks something unexpected:</p>
        <CodeBlock language="python">{`async def child_selection(self, context, child_actions=None):
    actions, content = await super().child_selection(context, child_actions)
    for action in actions:
        if isinstance(action, DangerousAction) and not context.metadata.get("admin"):
            raise PermissionError(f"{type(action).__name__} requires admin privileges")
    return actions, content`}</CodeBlock>

        <h4>Scenario 3 — Adding actions to the selection</h4>
        <p>Append a fixed action (e.g., audit logger) after every LLM selection:</p>
        <CodeBlock language="python">{`async def child_selection(self, context, child_actions=None):
    actions, content = await super().child_selection(context, child_actions)
    if not actions:
        return actions, content
    audit = AuditLogger(action_names=[type(a).__name__ for a in actions])
    return actions + [audit], content`}</CodeBlock>

        <h4>Scenario 4 — Complete override (no LLM)</h4>
        <p>For deterministic or rule-based routing, bypass the LLM entirely:</p>
        <CodeBlock language="python">{`async def child_selection(self, context, child_actions=None):
    intent = context.metadata.get("intent")
    routing = {
        "billing": BillingAgent,
        "support": SupportAgent,
    }
    cls = routing.get(intent, DefaultHandler)
    return [cls()], ""`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>child_selection_prompt</h3>
        <CodeBlock language="python">{`async def child_selection_prompt(self, context: Context, tool_choice: str) -> str:`}</CodeBlock>
        <p>
          Called inside <code>child_selection()</code> to build the tool-selection system prompt
          string. Default: applies the <code>__tool_call_prompt__</code> template. A lighter
          override than rewriting all of <code>child_selection</code> — just return any string.
        </p>
        <CodeBlock language="python">{`async def child_selection_prompt(self, context: Context, tool_choice: str) -> str:
    base = await super().child_selection_prompt(context, tool_choice)
    user_role = context.metadata.get("user_role", "user")
    return f"[Role: {user_role}]\n{base}"`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>max_iteration_prompt</h3>
        <CodeBlock language="python">{`async def max_iteration_prompt(self, context: Context) -> str:`}</CodeBlock>
        <p>
          Called inside <code>on_max_iteration()</code> to build the finalization prompt string.
          Default: applies the <code>__max_iteration_prompt__</code> template. Override to return
          custom finalization instructions.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>get_child_actions</h3>
        <CodeBlock language="python">{`async def get_child_actions(self, context: Context) -> dict[str, type[Action]]:`}</CodeBlock>
        <p>
          Called at the start of each <code>execution()</code> cycle to get the filtered child
          dict. Default: filters <code>__child_actions__</code> by{' '}
          <code>allowed_actions</code> + <code>__enabled__</code>. Override to add dynamic
          children not defined at class time.
        </p>
        <CodeBlock language="python">{`async def get_child_actions(self, context: Context) -> dict[str, type[Action]]:
    base = await super().get_child_actions(context)
    # Dynamically add a plugin action from context metadata
    if plugin_cls := context.metadata.get("plugin_action"):
        base[plugin_cls.__name__] = plugin_cls
    return base`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>_as_tool</h3>
        <CodeBlock language="python">{`@classmethod
async def _as_tool(cls, context: Context) -> dict | type[BaseModel]:`}</CodeBlock>
        <p>
          Called during <code>child_selection()</code> for each child to get its tool schema.
          Default: returns the class itself (Pydantic model). Return a custom JSON schema dict
          to override the schema at runtime.
        </p>
        <CodeBlock language="python">{`@classmethod
async def _as_tool(cls, context: Context) -> dict | None:
    sources = await get_available_sources()
    return {
        "name": cls.__name__,
        "description": "Fetch data from a dynamic source",
        "parameters": {
            "type": "object",
            "properties": {
                "source": {"type": "string", "enum": sources},
            },
            "required": ["source"],
        },
    }`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <h2>Action Class Methods</h2>
      <p>
        Static graph manipulation methods. Call at module level or in setup to wire up
        relationships that cannot be expressed as inner classes.
      </p>

      <div className="lifecycle-hook-section">
        <h3>add_child</h3>
        <CodeBlock language="python">{`ParentAction.add_child(
    action: type[Action],
    name: str | None = None,
    override: bool = False,
    extended: bool = True,
) -> None`}</CodeBlock>
        <p>
          Adds an action as a child. <code>extended=True</code> (default) creates a new subclass
          to prevent shared mutable state across different parents. <code>name</code> becomes the
          tool name. Raises if name already exists unless <code>override=True</code>.
        </p>
        <CodeBlock language="python">{`class PlannerAgent(Action): ...
class ExecutorAgent(Action): ...
class ReviewAgent(Action): ...

PlannerAgent.add_child(ExecutorAgent)
PlannerAgent.add_child(ReviewAgent)

# Circular: executor can re-invoke planner
ExecutorAgent.add_child(PlannerAgent)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>add_grand_child</h3>
        <CodeBlock language="python">{`Action.add_grand_child(
    action: type[Action],
    name: str | None = None,
    override: bool = False,
    extended: bool = True,
) -> None`}</CodeBlock>
        <p>
          Calls <code>add_child()</code> on every immediate child — injects a capability into
          the whole subtree at once.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>remove_child / remove_grand_child</h3>
        <CodeBlock language="python">{`Action.remove_child(name: str) -> None
Action.remove_grand_child(name: str) -> None`}</CodeBlock>
        <p>
          Remove a child by <strong>name</strong> from <code>__child_actions__</code>.
          Cascades to all subclasses. <code>remove_grand_child</code> calls{' '}
          <code>remove_child</code> on every immediate child.
        </p>
      </div>

      {/* ================================================================ */}
      <h2>Context</h2>
      <p>
        The <code>Context</code> object carries the full conversation and shared state.
        Pass it through every lifecycle hook; do not store it as instance state on actions.
      </p>

      <div className="lifecycle-hook-section">
        <h3>Fields</h3>
        <CodeBlock language="python">{`class Context(BaseModel, Generic[TLLM]):
    prompts: list[dict]              # conversation history — must start with system role
                                     # format: {"role": ChatRole.X, "content": str}
    allowed_actions: dict[str, bool] # per-request action gating
                                     # overrides __enabled__; True enables even if class is disabled
    metadata: dict[str, Any]         # arbitrary shared state across the action tree
    usages: dict[str, UsageMetadata] # token usage aggregated per model name
    streaming: bool                  # informational — no built-in effect
                                     # actions read this to decide whether to stream
    max_self_loop: int | None        # global self-recursion limit (__max_iteration__ takes priority)
    parent: Self | None              # set by detach_context(); reference to originating context`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>start</h3>
        <CodeBlock language="python">{`async def start(
    self,
    ActionClass: type[Action],
    **kwargs: Any,
) -> tuple[Action, ActionReturn]:`}</CodeBlock>
        <p>
          The main entry point. Validates that <code>prompts[0]</code> is a system role, resets
          the <code>_action_call</code> counter, then calls <code>action.execute(context)</code>.
          Returns <code>(action_instance, ActionReturn)</code>.
        </p>
        <CodeBlock language="python">{`context = Context(
    prompts=[{"role": ChatRole.SYSTEM, "content": "You are a helpful assistant."}]
)
action, result = await context.start(MyRootAction)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>detach_context</h3>
        <CodeBlock language="python">{`async def detach_context(self) -> Context:`}</CodeBlock>
        <p>
          Deep-copies <code>prompts</code>, <code>allowed_actions</code>, and{' '}
          <code>metadata</code>. Sets <code>parent=self</code> on the copy. Used for isolated
          branches where children should not affect the main context.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>detached_start</h3>
        <CodeBlock language="python">{`async def detached_start(
    self,
    ActionClass: type[Action],
    **kwargs: Any,
) -> tuple[Context, Action, ActionReturn]:`}</CodeBlock>
        <p>
          Convenience: calls <code>detach_context()</code> then <code>start()</code>.
          Returns <code>(child_context, action_instance, ActionReturn)</code>. Use to run an
          action in isolation and inspect or merge the result manually.
        </p>
        <CodeBlock language="python">{`child_ctx, action, result = await context.detached_start(SubWorkflow)
# Inspect child_ctx.prompts, child_ctx.metadata before merging`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>add_message</h3>
        <CodeBlock language="python">{`async def add_message(self, role: ChatRole, content: str) -> None:`}</CodeBlock>
        <p>
          Appends a single <code>{"{'role', 'content'}"}</code> entry. Accepts any{' '}
          <code>ChatRole</code> value. For action outputs specifically, prefer{' '}
          <code>add_response()</code> as it correctly pairs the tool-call and tool-result entries.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>add_response</h3>
        <CodeBlock language="python">{`async def add_response(
    self,
    action_or_toolcall: Action | ToolCall,
    content: str,
) -> None:`}</CodeBlock>
        <p>
          Appends <strong>two</strong> entries: the assistant tool-call message + the tool result
          message. This is the correct way to record action outputs in the conversation history.
        </p>
        <CodeBlock language="python">{`msg = await context.llm.ainvoke(context.prompts)
await context.add_response(self, msg.text)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>add_usage</h3>
        <CodeBlock language="python">{`async def add_usage(
    self,
    action: Action,
    model: str,
    usage: UsageMetadata,
    name: str | None = None,
) -> None:`}</CodeBlock>
        <p>
          Appends to <code>action._usage</code> and merges into <code>context.usages[model]</code>.
          <code>name</code> labels the usage record: <code>"$tool"</code>,{' '}
          <code>"$fallback"</code>, <code>"$finalize"</code>, or a custom label.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>set_metadata / update_metadata</h3>
        <CodeBlock language="python">{`async def set_metadata(self, *paths: Any, value: Any, update: bool = False) -> None
async def update_metadata(self, *paths: Any, value: Any) -> None`}</CodeBlock>
        <p>
          Deep-set by path. <code>update=True</code> (or <code>update_metadata</code>) extends
          lists/dicts instead of replacing. No paths = replace the entire metadata dict.
        </p>
        <CodeBlock language="python">{`await context.set_metadata("results", "step1", value="done")
await context.update_metadata("config", value={"debug": True})   # merges`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>notify</h3>
        <CodeBlock language="python">{`async def notify(self, message: dict[str, Any]) -> None:`}</CodeBlock>
        <p>
          No-op in the base class. Override in your custom Context for WebSocket, SSE, or
          logging. Called by the framework on: tool selection start/complete, fallback
          start/complete, finalize start/complete, and gRPC/MCP events.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>shifted_prompts</h3>
        <CodeBlock language="python">{`def shifted_prompts(self, offset: int | None = None) -> Iterator[dict]:`}</CodeBlock>
        <p>
          Returns a prompts iterator. Always skips index 0 (system prompt). With{' '}
          <code>offset=N</code>: returns only the last N entries (minimum index 1).
          Used internally by <code>__max_tool_prompts__</code>.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>run_func_in_thread / run_task_in_thread</h3>
        <CodeBlock language="python">{`async def run_func_in_thread(
    self, func: Callable, executor=None, *args, **kwargs
) -> Future

async def run_task_in_thread(
    self, coroutine: Coroutine, executor=None
) -> Future`}</CodeBlock>
        <p>
          Run a synchronous callable (<code>run_func_in_thread</code>) or an async coroutine in
          a new event loop (<code>run_task_in_thread</code>) inside a thread pool. Returns a
          Future. Use to avoid blocking the async event loop with CPU-bound or legacy sync code.
        </p>
        <CodeBlock language="python">{`result = await context.run_func_in_thread(sync_heavy_computation, None, data)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>detached_kwargs</h3>
        <CodeBlock language="python">{`def detached_kwargs(self, **kwargs: Any) -> dict[str, Any]:`}</CodeBlock>
        <p>
          Returns the dict used to construct a detached context copy. Override in custom Context
          subclasses to pass extra fields (e.g. DB connection, websocket handle) into the
          detached copy.
        </p>
        <CodeBlock language="python">{`class AppContext(Context):
    db: AsyncSession   # custom field

    def detached_kwargs(self, **kwargs: Any) -> dict[str, Any]:
        return super().detached_kwargs(db=self.db, **kwargs)`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <h2>ActionReturn</h2>
      <p>
        Every lifecycle method must return an <code>ActionReturn</code>. The framework uses it
        to decide whether to continue, break loops, or stop entirely.
      </p>

      <div className="lifecycle-hook-section">
        <h3>Values</h3>
        <CodeBlock language="python">{`ActionReturn.GO            # Continue normally to the next step
ActionReturn.BREAK         # Break iteration loop → calls on_max_iteration()
ActionReturn.END           # Stop immediately → skips on_max_iteration()
ActionReturn.go(value=...) # GO carrying a payload in .value
ActionReturn.end(value=...) # END carrying a payload in .value

# Checking return values
ar.is_break   # True for both BREAK and END  (isinstance(ar, Break))
ar.is_end     # True only for END            (isinstance(ar, End))`}</CodeBlock>

        <Note>
          <strong>BREAK vs END inside a loop:</strong> BREAK exits the current iteration early,
          then the framework checks whether <code>__max_child_iteration__</code> is exhausted —
          only if it is does <code>on_max_iteration()</code> get called. If iterations remain,
          BREAK simply stops without triggering it. END skips the iteration count check
          entirely and never calls <code>on_max_iteration()</code>, regardless of how many
          iterations are left.
        </Note>
      </div>

      {/* ================================================================ */}
      <h2>ChatRole</h2>
      <CodeBlock language="python">{`from pybotchi import ChatRole

ChatRole.USER        # "user"
ChatRole.SYSTEM      # "system"
ChatRole.ASSISTANT   # "assistant"
ChatRole.TOOL        # "tool"
ChatRole.DEVELOPER   # "developer"`}</CodeBlock>

      {/* ================================================================ */}
      <h2>LLM</h2>
      <p>
        Global LLM registry. Register one or more models at startup; actions receive the
        correct model through their context.
      </p>

      <div className="lifecycle-hook-section">
        <h3>LLM.add</h3>
        <CodeBlock language="python">{`LLM.add(**llms: Any) -> None`}</CodeBlock>
        <p>
          Register LLMs by keyword name. The key <code>"base"</code> is required and used as
          the default model. Any additional keyword registers a named model.
        </p>
        <CodeBlock language="python">{`LLM.add(
    base=AzureChatOpenAI(model="gpt-4o-mini", ...),
    powerful=AzureChatOpenAI(model="gpt-4o", ...),
)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>LLM.base / LLM.get</h3>
        <CodeBlock language="python">{`LLM.base(_: type[T] | None = None) -> T
# Returns the "base" LLM; raises NotImplementedError if not set.
# Pass a type to narrow the return type for static analysis.

LLM.get(llm: str, type: type[T] | None = None, throw: bool = True) -> T | None
# type[T] — unconstrained TypeVar; pass the expected class to get a typed return.
# throw=False returns None instead of raising when the LLM is missing or wrong type.`}</CodeBlock>
        <CodeBlock language="python">{`from langchain_openai import AzureChatOpenAI

base = LLM.base()                                    # Any
typed = LLM.base(AzureChatOpenAI)                   # -> AzureChatOpenAI
model = LLM.get("powerful", AzureChatOpenAI)        # -> AzureChatOpenAI
maybe = LLM.get("powerful", AzureChatOpenAI, throw=False)  # -> AzureChatOpenAI | None`}</CodeBlock>
        <p>
          Inside lifecycle hooks, prefer <code>context.llm</code> — it is already bound with
          the correct tools for the current action.
        </p>
      </div>

      {/* ================================================================ */}
      <h2>gRPC</h2>
      <p>
        gRPC support runs action graphs across processes or machines. Import from{' '}
        <code>pybotchi.grpc</code>.
      </p>

      <div className="lifecycle-hook-section">
        <h3>GRPCAction</h3>
        <p>
          <strong>Server side</strong> — just a regular <code>Action</code> with{' '}
          <code>__groups__</code> set. No need to inherit <code>GRPCAction</code>:
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn
from pybotchi.grpc import GRPCContext

class WorkerAgent(Action):
    __groups__: set[str] = {"workers"}   # exposed via gRPC under the "workers" group

    class ProcessTask(Action):
        """Process a single task."""
        payload: str

        async def pre(self, context: GRPCContext) -> ActionReturn:
            result = do_work(self.payload)
            await context.add_response(self, result)
            return ActionReturn.GO`}</CodeBlock>

        <p>
          <strong>Client side</strong> — inherits <code>GRPCAction</code> and declares{' '}
          <code>__grpc_connections__</code> to connect to remote servers. Remote actions are
          dynamically discovered and injected as children at runtime via{' '}
          <code>get_child_actions()</code>:
        </p>
        <CodeBlock language="python">{`from pybotchi.grpc import GRPCAction, GRPCConnection

class OrchestratorAgent(GRPCAction):
    __grpc_connections__: list[GRPCConnection] = [
        GRPCConnection(
            name="workers",
            url="localhost:50051",
            groups=["workers"],   # fetch actions belonging to the "workers" group
        )
    ]
    # Remote actions from the server are discovered and injected as children
    # automatically — no need to declare them here`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>GRPCConnection</h3>
        <CodeBlock language="python">{`GRPCConnection(
    name="worker-pool",            # unique identifier
    url="localhost:50051",         # gRPC server address
    groups=["workers"],            # action groups to expose on this connection
    secure=False,                  # TLS — set True for production
    root_certificates=None,        # path or bytes for CA cert
    private_key=None,              # path or bytes for client key
    certificate_chain=None,        # path or bytes for client cert
    options=None,                  # list[tuple] — grpc channel options
    compression=None,              # GRPCCompression.Gzip etc.
    interceptors=None,             # list[ClientInterceptor]
    metadata=None,                 # dict — default call metadata (auth headers)
    allow_exec=False,              # allow remote action execution
    manual_enable=False,           # require explicit enable per-request
    allowed_actions=None,          # dict[str, bool] — default allow-list
    remote_action_class=None,      # override GRPCRemoteAction subclass
    exclude_unset=True,            # strip None fields from wire format
    require_integration=True,      # fail if integration not configured
)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>GRPCRemoteAction</h3>
        <p>
          Dynamically built proxy action that represents a remote server-side action.
          Subclass to customize <code>__concurrent__</code> or to handle streaming events.
        </p>
        <CodeBlock language="python">{`from pybotchi.grpc import GRPCRemoteAction

class MyRemote(GRPCRemoteAction):
    async def grpc_event_update(self, context, event) -> None:
        """Called on each streaming update from the server."""
        await context.notify(event.data)

    async def grpc_event_close(self, context, event) -> None:
        """Called when the server stream closes."""
        ...

    async def grpc_event_error(self, context, event) -> None:
        """Called when the server reports an error event."""
        ...

conn = GRPCConnection(
    name="workers",
    url="localhost:50051",
    remote_action_class=MyRemote,  # use custom remote class
)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>GRPCContext</h3>
        <p>
          Extends <code>Context</code>. Overrides <code>add_message</code>,{' '}
          <code>add_response</code>, <code>set_metadata</code>, and <code>notify</code> to
          automatically propagate changes up/down through gRPC pipes.
        </p>
        <CodeBlock language="python">{`class GRPCContext(Context[TLLM]):
    integrations: dict[str, GRPCIntegration]  # per-connection runtime overrides
    source_id: str | None                     # ID of originating context
    context_id: str                           # unique ID for this copy

    async def grpc_send_up(self, source_id, name, data) -> None    # push to caller
    async def grpc_send_down(self, source_id, name, data) -> None  # push to servers`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <h2>MCP</h2>
      <p>
        MCP (Model Context Protocol) support exposes action graphs as tool servers.
        Import from <code>pybotchi.mcp</code>.
      </p>

      <div className="lifecycle-hook-section">
        <h3>MCPAction</h3>
        <p>
          <strong>Server side</strong> — just a regular <code>Action</code> with{' '}
          <code>__groups__</code> set. <code>build_mcp_app</code> / <code>mount_mcp_app</code>{' '}
          scans all <code>Action</code> subclasses with <code>__groups__</code> and exposes
          them as MCP tools automatically:
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context

class SearchTool(Action):
    """Search the knowledge base."""
    __groups__: set[str] = {"public"}   # exposed as an MCP tool in the "public" group
    query: str

    async def pre(self, context: Context) -> ActionReturn:
        results = await search(self.query)
        await context.add_response(self, results)
        return ActionReturn.GO`}</CodeBlock>

        <p>
          <strong>Client side</strong> — inherits <code>MCPAction</code> and declares{' '}
          <code>__mcp_connections__</code> to consume tools from external MCP servers.
          Remote tools are dynamically discovered and injected as children via{' '}
          <code>get_child_actions()</code>:
        </p>
        <CodeBlock language="python">{`from pybotchi.mcp import MCPAction, MCPConnection, MCPContext, MCPMode

class MyAgent(MCPAction):
    __mcp_connections__: list[MCPConnection] = [
        MCPConnection(name="atlas", mode=MCPMode.SHTTP, url="http://mcp.example.com/mcp")
    ]
    # Remote MCP tools are discovered and injected as children automatically`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>MCPConnection</h3>
        <CodeBlock language="python">{`MCPConnection(
    name="tools-server",              # unique identifier
    mode=MCPMode.SHTTP,               # MCPMode.SSE or MCPMode.SHTTP
    url="http://localhost:8000/mcp",  # server URL
    headers=None,                     # default request headers dict
    timeout=5.0,                      # connection timeout (seconds)
    sse_read_timeout=300.0,           # SSE stream read timeout
    terminate_on_close=True,          # close session on disconnect
    httpx_client_factory=...,         # custom HTTP client factory
    auth=None,                        # httpx Auth object
    on_session_created=None,          # callback(session_id: str) -> None
    async_client_args=None,           # AsyncClientArgs TypedDict
    manual_enable=False,              # require explicit enable per-request
    allowed_tools=None,               # dict[str, bool] — default allow-list
    tool_action_class=None,           # override MCPToolAction subclass
    exclude_unset=True,               # strip None fields
    require_integration=True,         # fail if integration not configured
)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>MCPToolAction</h3>
        <p>
          Dynamically built proxy action for each MCP tool. Override to customize concurrent
          behavior or add pre/post logic around remote calls. Has a built-in{' '}
          <code>clean_content()</code> helper that handles all MCP content types (Text, Image,
          Audio, EmbeddedResource, ResourceLink) and a progress callback.
        </p>
        <CodeBlock language="python">{`from pybotchi.mcp import MCPToolAction

class AuditedTool(MCPToolAction):
    __concurrent__: bool = True   # run MCP calls concurrently

    async def pre(self, context: Context) -> ActionReturn:
        await log_audit(type(self).__name__, context.metadata)
        return ActionReturn.GO

conn = MCPConnection(
    name="audited",
    mode="SHTTP",
    url="http://localhost:8001/mcp",
    tool_action_class=AuditedTool,   # every tool from this server uses this class
)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>build_mcp_app / mount_mcp_app</h3>
        <CodeBlock language="python">{`from pybotchi.mcp import build_mcp_app, mount_mcp_app

# Standalone Starlette app with SSE or streamable-HTTP transport
app = build_mcp_app(MyTools, *groups, transport="streamable-http")

# Mount into an existing FastAPI / Starlette app
from fastapi import FastAPI
web_app = FastAPI()
mount_mcp_app(web_app, MyTools, *groups, transport="sse")`}</CodeBlock>
        <p>
          Both functions call <code>initialize_mcp_groups()</code> internally. Pass the group
          names that match the <code>__groups__</code> values on your actions.
        </p>
      </div>

      {/* ================================================================ */}
      <h2>Utilities</h2>

      <div className="lifecycle-hook-section">
        <h3>all_agents</h3>
        <CodeBlock language="python">{`from pybotchi import all_agents

# Generator yielding all Action subclasses where __agent__ = True
for agent_cls in all_agents():
    print(agent_cls.__name__)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>graph / flowchart</h3>
        <CodeBlock language="python">{`from pybotchi import graph

g = graph(MyRootAction, allowed_actions={})  # builds Graph (nodes + edges)
diagram = g.flowchart()   # returns Mermaid flowchart TD string
                          # concurrent edges are rendered with animation
print(diagram)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>uuid</h3>
        <CodeBlock language="python">{`from pybotchi.utils import uuid

# uuid7 preferred (time-ordered), falls back to uuid4
new_id = uuid()   # returns a UUID object`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>apply_placeholders</h3>
        <CodeBlock language="python">{`from pybotchi.utils import apply_placeholders

# Supports ${'{'}key{'}'} and ${'{'}key:default{'}'} syntax
result = apply_placeholders("\${greeting}, \${name}!", greeting="Hello", name="World")
# "Hello, World!"`}</CodeBlock>
        <p>
          Used internally to fill <code>__tool_call_prompt__</code> and{' '}
          <code>__max_iteration_prompt__</code> templates.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>unwrap_exceptions</h3>
        <CodeBlock language="python">{`from pybotchi.utils import unwrap_exceptions

# Generator that flattens ExceptionGroup into individual exceptions
for exc in unwrap_exceptions(outer_exception):
    print(type(exc).__name__)`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <div className="highlight-box">
        <h3>Quick Cheat-Sheet</h3>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context, LLM, graph, all_agents

# ── Class variables (select overrides) ───────────────────────────────────────
class MyAction(Action):
    __enabled__: bool = True                        # False = hidden from parent
    __concurrent__: bool = False                    # ← set on CHILD, not parent
    __max_child_iteration__: int | None = None      # None = run once
    __max_iteration__: int | None = None            # self-recursion cap
    __first_tool_only__: bool = False
    __system_prompt__: str | None = None
    __temperature__: float | None = None
    __max_tool_prompts__: int | None = None         # sliding prompt window
    __default_tool__: str = "DefaultAction"
    __tool_call_prompt__: str | None = None
    __max_iteration_prompt__: str | None = None
    # ── not inheritable ───────────────────────────────────────────────────────
    __display_name__: str = "MyAction"              # UI / MCP title
    __groups__: set[str] | None = None              # set → all valid groups
    __agent__: bool = False                         # marker for all_agents()
    __to_commit__: bool = True
    __detached__: bool = False                      # auto-set when commit_context overridden

# ── Lifecycle hooks ───────────────────────────────────────────────────────────
    async def pre(self, context: Context) -> ActionReturn: ...
    async def post(self, context: Context) -> ActionReturn: ...
    async def fallback(self, context: Context, content: str) -> ActionReturn: ...
    async def on_error(self, context, exception, unwrapped_exceptions) -> ActionReturn: ...
    async def on_max_iteration(self, context: Context) -> ActionReturn: ...
    async def commit_context(self, context: Context, child: Context) -> None: ...
    async def child_selection(self, context, child_actions=None) -> tuple[list[Action], str]: ...
    async def child_selection_prompt(self, context, tool_choice) -> str: ...
    async def max_iteration_prompt(self, context) -> str: ...
    async def get_child_actions(self, context) -> dict[str, type[Action]]: ...
    async def on_child_init_error(self, context, next_actions, cls, args, exc): ...
    @classmethod
    async def _as_tool(cls, context) -> dict | type[BaseModel]: ...

# ── ActionReturn ─────────────────────────────────────────────────────────────
#   GO → continue  |  BREAK → break + on_max_iteration  |  END → stop, skip hook
ActionReturn.GO / ActionReturn.BREAK / ActionReturn.END
ActionReturn.go(value) / ActionReturn.end(value)

# ── Graph helpers ─────────────────────────────────────────────────────────────
ParentAction.add_child(ChildCls, name=None, override=False, extended=True)
ParentAction.remove_child("ChildName")
g = graph(MyRootAction, allowed_actions={})
g.flowchart()   # → Mermaid diagram string`}</CodeBlock>
      </div>
    </>
  )
}
