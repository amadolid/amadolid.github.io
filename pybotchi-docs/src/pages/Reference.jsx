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
      <h2 id="execution-flow">Execution Flow</h2>
      <p>
        Every call to <code>context.start(MyAction)</code> follows this exact sequence:
      </p>
      <CodeBlock language="python">{`context.start(MyAction)
  └─ validates prompts[0] is system role
  └─ action.execute(context)
       └─ sets _parent, optionally detaches context, checks self-recursion
            [on breach: on_max_self_recursion() → default STOP]
       └─ pre(context)
       └─ iteration loop (up to __max_iteration__ times):
            └─ execution(context)
                 ├─ get_child_actions(context)  → filtered children dict
                 ├─ [fast path: 1 child, 0 Pydantic fields, no fallback → run directly, no LLM]
                 ├─ child_selection(context, children)  → (list of child instances, content)
                 │    └─ default: LLM tool call (tool_choice="auto" if fallback, "any" if Anthropic+no fallback, "required" otherwise)
                 │    └─ for each tool call: instantiate child; on failure → on_child_init_error()
                 ├─ run selected children (concurrent or sequential based on child's __concurrent__)
                 └─ fallback(context, content) if LLM selected nothing
                      [if zero children and fallback is overridden: LLM is auto-invoked first, result passed to fallback]
            [the loop only exits early on BREAK/STOP; END from execution is ignored]
            [after loop: if STOP → return early]
            [after loop: if exhausted → on_max_iteration(); if result.is_end → return early]
            [without __max_iteration__: execution runs once; END/BREAK/STOP → return early]
       └─ post(context)
       └─ on exception:
            ├─ on_error not overridden → __to_commit__ = False, re-raise the first leaf error
            └─ on_error overridden → return its result if is_end, else None (post is skipped)
       └─ finally:
            ├─ cleanup(context)  [always runs, even on END/BREAK/STOP/errors]
            └─ commit_context(parent, child)  [only if __detached__ and __to_commit__; runs even if cleanup raises]`}</CodeBlock>

      {/* ================================================================ */}
      <h2 id="action-class-variables">Action Class Variables</h2>
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
        <h3>__max_iteration__</h3>
        <p>
          Type: <code>int | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Loops <code>execution()</code> up to N times. <code>None</code> means run once (no loop).
          On exhaustion <code>on_max_iteration()</code> is called. Use <code>ActionReturn.BREAK</code>{' '}
          to exit the loop early, or <code>ActionReturn.STOP</code> to stop the entire agent.
        </p>
        <CodeBlock language="python">{`class Researcher(Action):
    __max_iteration__: int = 5   # up to 5 iterations
    __first_tool_only__: bool = True

    class Search(Action):
        """Search the web for information."""
        query: str

    class Summarize(Action):
        """Produce the final answer — call this when enough info is gathered."""

        async def pre(self, context: Context) -> ActionReturn:
            msg = await context.llm.ainvoke(context.prompts)
            await context.add_response(self, msg.text)
            return ActionReturn.BREAK   # break the iteration loop`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_self_recursion__</h3>
        <p>
          Type: <code>int | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Per-class self-recursion limit. Takes priority over <code>context.max_self_recursion</code>.
          Checked in <code>check_self_recursion()</code> each time this action class is about
          to execute. When the limit is exceeded, the <code>on_max_self_recursion()</code> hook
          is invoked &mdash; which by default returns <code>ActionReturn.STOP</code>. Override that
          hook to run side effects or return <code>None</code> to keep going past the cap.
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
          Combine with <code>__max_iteration__</code> for strict step-by-step workflows.
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
          the LLM. Affects tool selection, fallback invocation, and <code>on_max_iteration</code>.{' '}
          <code>None</code> uses the model&apos;s configured default.
        </p>
        <p>
          It only takes effect if the registered LLM exposes temperature as a configurable field:{' '}
          <code>LLM.add(base=model.configurable_fields(temperature=ConfigurableField(id=&quot;llm_temperature&quot;)))</code>.
          Otherwise it&apos;s silently ignored.
        </p>
        <CodeBlock language="python">{`class PreciseRouter(Action):
    __temperature__: float | None = 0.0   # deterministic routing

class CreativeWriter(Action):
    __temperature__: float | None = 1.2   # more varied output`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_child_selection_prompts__</h3>
        <p>
          Type: <code>int | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Sliding window: only the last N prompts (minimum index 1, always keeping the system
          prompt) are sent to the LLM during <code>child_selection()</code>. Useful for keeping
          token costs low in long iteration loops. <code>None</code> sends all prompts.
        </p>
        <CodeBlock language="python">{`class LongRunningAgent(Action):
    __max_iteration__: int = 20
    __max_child_selection_prompts__: int = 6   # only last 6 messages sent to LLM each cycle`}</CodeBlock>
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
            return ActionReturn.END  # stops only this GeneralAnswer; parent continues

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
          <code>{'${tool_choice}'}</code> (the mode: <code>auto</code>, <code>any</code>, or{' '}
          <code>required</code>), <code>{'${default}'}</code> (<code>__default_tool__</code>), and{' '}
          <code>{'${system}'}</code>. Falls back to{' '}
          <code>DEFAULT_TOOL_CALL_PROMPT</code> (overridable via env var). The default template
          also contains <code>{'${addons}'}</code>, which the core never fills, so it renders empty
          unless you override <code>child_selection_prompt</code>.
        </p>
        <CodeBlock language="python">{`class MyAction(Action):
    __tool_call_prompt__: str | None = """
\${system}

Tool choice mode: \${tool_choice}
Suggested default tool: \${default}
""".strip()`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__max_iteration_prompt__</h3>
        <p>
          Type: <code>str | None</code> &nbsp;|&nbsp; Default: <code>None</code>
        </p>
        <p>
          Replaces the finalization prompt used when <code>__max_iteration__</code> is
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
        <h3 id="__groups__">__groups__</h3>
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
class SearchTool(Action):
    __groups__: set[str] = {"tools", "public"}

# Groups dict — target specific integration types
class AdminTool(Action):
    __groups__ = {"mcp": {"admin"}, "grpc": {"internal"}}`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__detached__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: auto
        </p>
        <p>
          Auto-set <code>True</code> when <code>commit_context</code> is overridden anywhere in
          the class hierarchy. Can also be set explicitly, but an explicit value is{' '}
          <strong>not inherited</strong>: subclasses fall back to the automatic value. When{' '}
          <code>True</code>: <code>execute()</code> calls <code>context.detach_context()</code>,
          and the action&apos;s own hooks and its children all work on that isolated copy.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>__to_commit__</h3>
        <p>
          Type: <code>bool</code> &nbsp;|&nbsp; Default: <code>True</code> &nbsp;|&nbsp;
          <strong> not inheritable</strong>
        </p>
        <p>
          Set <code>False</code> internally when an <code>Exception</code> escapes and{' '}
          <code>on_error</code> isn&apos;t overridden. (If <code>on_error</code> re-raises, or the
          task is cancelled, it stays <code>True</code>.) Prevents <code>commit_context()</code> from running in the
          <code>finally</code> block. Can also be set manually to suppress merging. Doesn&apos;t
          affect <code>cleanup</code>, which always runs.
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
      <h2 id="overridable-methods">Overridable Methods</h2>
      <p>
        All methods below have default implementations. Override only what your logic requires.
      </p>

      <div className="lifecycle-hook-section">
        <h3>pre</h3>
        <CodeBlock language="python">{`async def pre(self, context: Context) -> ActionResult:`}</CodeBlock>
        <p>
          Called first, before any child selection. Default: returns <code>None</code>.
          Use for input validation, data gathering (RAG), or setting up state. Return{' '}
          <code>ActionReturn.END</code> to stop only this action (siblings continue).
        </p>
        <CodeBlock language="python">{`async def pre(self, context: Context) -> ActionResult:
    if not self.query:
        await context.add_response(self, "No query provided.")
        return ActionReturn.END
    await context.set_metadata("query", value=self.query)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>post</h3>
        <CodeBlock language="python">{`async def post(self, context: Context) -> ActionResult:`}</CodeBlock>
        <p>
          Called after all children complete (after the iteration loop exits).
          Default: returns <code>None</code>. Use for consolidating results or final LLM
          summarization. Skipped if the action ended early (<code>END</code>/<code>BREAK</code>/
          <code>STOP</code>) or an error occurred; a <code>BREAK</code> that only exits this
          action&apos;s own <code>__max_iteration__</code> loop still runs it. Use{' '}
          <code>cleanup</code> for anything that must always run.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>fallback</h3>
        <CodeBlock language="python">{`async def fallback(self, context: Context, content: str) -> ActionResult:`}</CodeBlock>
        <p>
          Called when: (a) the LLM selected no tools, or (b) the action has zero children
          (in which case the LLM is auto-invoked first on the full <code>context.prompts</code>{' '}
          and the result is passed here). Default: returns <code>None</code>. Use to handle
          plain-text responses or break iteration loops. Overriding it switches{' '}
          <code>tool_choice</code> to <code>auto</code> and disables the single-child shortcut.
          Inside the action&apos;s own <code>__max_iteration__</code> loop, return{' '}
          <code>BREAK</code> to finish; <code>END</code> is ignored there.
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
    next_actions: list[Action],
    child_cls: type[Action],
    child_args: dict[str, Any],
    exception: Exception,
) -> str | None:`}</CodeBlock>
        <p>
          Called when a child action fails to instantiate from the LLM&apos;s tool call args
          (e.g. Pydantic validation error). Default: not defined (re-raises).
          Return <code>None</code> to skip the failed action and continue processing any
          remaining tool calls. Return a string to stop all further tool-call processing: the
          whole selection is discarded (including children already built), and the string is
          routed to <code>fallback(content)</code> if <code>fallback</code> is overridden
          (otherwise it&apos;s dropped). Useful for feeding an error correction back to the LLM
          on the next iteration. <code>next_actions</code> is the live list being built, so you
          can append a replacement action before returning <code>None</code>.
        </p>
        <CodeBlock language="python">{`async def on_child_init_error(self, context, next_actions, child_cls, child_args, exception):
    # Return a string to route to fallback with a correction hint for the next iteration
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
    unwrapped_exceptions: Generator[Exception, None, None],
) -> ActionResult:`}</CodeBlock>
        <p>
          Called when any unhandled exception propagates through <code>execute()</code>.
          Default: not defined (re-raises the first leaf error and skips{' '}
          <code>commit_context</code>). Return an <code>ActionResult</code> to recover, or
          re-raise. Returning <code>None</code> ends the action normally but skips{' '}
          <code>post</code>; nothing is retried. <code>unwrapped_exceptions</code> is a
          generator of leaf exceptions from <code>unwrap_exceptions()</code> — iterate it to
          inspect <code>ExceptionGroup</code> members individually (errors from concurrent
          children arrive wrapped). For <code>MCPAction</code>/<code>GRPCAction</code>, it runs
          after the connections are closed.
        </p>
        <CodeBlock language="python">{`async def on_error(self, context, exception, unwrapped_exceptions) -> ActionResult:
    for error in unwrapped_exceptions:
        match error:
            case ConnectionError():
                await context.add_response(self, "Connection lost. Please try again.")
                return None  # swallow the error; post is skipped
    raise exception`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_max_self_recursion</h3>
        <CodeBlock language="python">{`async def on_max_self_recursion(self, context: Context) -> ActionResult:`}</CodeBlock>
        <p>
          Called from <code>check_self_recursion()</code> when this action class has been invoked
          more times than <code>__max_self_recursion__</code> (or <code>context.max_self_recursion</code>)
          allows within a single turn. <strong>Default: returns <code>ActionReturn.STOP</code></strong>,
          halting the agent. Override to log/notify before stopping, or return <code>None</code> to
          let execution continue past the cap.
        </p>
        <CodeBlock language="python">{`async def on_max_self_recursion(self, context: Context) -> ActionResult:
    await context.notify({"event": "recursion-limit", "action": type(self).__name__})
    return ActionReturn.STOP   # or return None to keep going`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_max_iteration</h3>
        <CodeBlock language="python">{`async def on_max_iteration(self, context: Context) -> ActionResult:`}</CodeBlock>
        <p>
          Called after <code>__max_iteration__</code> is exhausted without a BREAK or STOP.
          Default: invokes the LLM with <code>max_iteration_prompt()</code> and adds the response.
          Override for custom finalization, structured output, or graceful degradation.
          <strong> Not called when BREAK exits the loop cleanly.</strong>
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>commit_context</h3>
        <CodeBlock language="python">{`async def commit_context(self, parent: Context, child: Context) -> None:`}</CodeBlock>
        <p>
          Called in the <code>finally</code> block (after <code>cleanup</code>) when{' '}
          <code>__detached__</code> and <code>__to_commit__</code> are both <code>True</code>.
          Default: merges the child context&apos;s token usages into the parent. Override to
          selectively merge prompts, metadata, or other state from the isolated branch back into
          the parent context.
        </p>
        <CodeBlock language="python">{`async def commit_context(self, parent: Context, child: Context) -> None:
    # Only bring back messages added after the branch point
    new_messages = child.prompts[len(parent.prompts):]
    parent.prompts.extend(new_messages)
    # Merge child usages into the parent (always call this)
    await super().commit_context(parent, child)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>cleanup</h3>
        <CodeBlock language="python">{`async def cleanup(self, context: Context) -> None:`}</CodeBlock>
        <p>
          Called in the <code>finally</code> block every time the action finishes: on success,
          on <code>END</code>/<code>BREAK</code>/<code>STOP</code>, on errors (handled or not), on
          max self recursion, and on cancellation. Default: does nothing. Use for releasing
          resources, resetting state, or final logging.
        </p>
        <ul>
          <li>Runs before <code>commit_context</code>, so usage recorded during cleanup still merges into the parent when the action is detached.</li>
          <li>May run even if <code>pre</code> didn&apos;t; don&apos;t assume setup completed.</li>
          <li>
            Return value is ignored. If it raises, that error replaces the action&apos;s result (the
            original error survives only as <code>__context__</code>) and skips{' '}
            <code>on_error</code>. <code>commit_context</code> still runs, unless the action
            already failed with an unhandled error.
          </li>
          <li>
            Can&apos;t tell how the action ended: <code>sys.exc_info()</code> only shows unhandled
            errors. Track the outcome on the instance if you need it.
          </li>
          <li>For <code>MCPAction</code>/<code>GRPCAction</code>, runs after the connections are closed (as does <code>on_error</code>).</li>
        </ul>
        <CodeBlock language="python">{`_conn: Connection | None = PrivateAttr(default=None)

async def cleanup(self, context: Context) -> None:
    if self._conn is not None:   # pre may not have run
        await self._conn.close()`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="child_selection">child_selection</h3>
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
          <li><code>content</code> — the LLM&apos;s text content (may be non-empty even when tools were selected), or the string returned by <code>on_child_init_error</code>; routed to <code>fallback(content)</code> when actions is empty</li>
        </ul>
        <p>
          Override to add filtering, validation, inject additional actions, or completely bypass
          the LLM for complex routing logic. It isn&apos;t called when the action has no enabled
          children, or exactly one child with no fields and no <code>fallback</code>.
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
        <p>
          For deterministic or rule-based routing, bypass the LLM entirely. The action still needs
          real children (more than one, or a <code>fallback</code>), otherwise{' '}
          <code>child_selection</code> isn&apos;t called:
        </p>
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
        <CodeBlock language="python">{`def child_selection_prompt(self, context: Context, tool_choice: str) -> str:`}</CodeBlock>
        <p>
          Called inside <code>child_selection()</code> to build the tool-selection system prompt
          string. Default: applies the <code>__tool_call_prompt__</code> template. A lighter
          override than rewriting all of <code>child_selection</code> — just return any string.
        </p>
        <CodeBlock language="python">{`def child_selection_prompt(self, context: Context, tool_choice: str) -> str:
    base = super().child_selection_prompt(context, tool_choice)
    user_role = context.metadata.get("user_role", "user")
    return f"[Role: {user_role}]\\n{base}"`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>max_iteration_prompt</h3>
        <CodeBlock language="python">{`def max_iteration_prompt(self, context: Context) -> str:`}</CodeBlock>
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
async def _as_tool(cls, context: Context) -> dict[str, Any]:
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
      <h2 id="action-class-methods">Action Class Methods</h2>
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
          Adds an action as a child. Raises if name already exists unless{' '}
          <code>override=True</code>.
        </p>
        <ul>
          <li>
            <code>extended=True</code> (default) adds <code>extend_action(action, name)</code>: a
            new subclass named <code>name</code>, so it doesn&apos;t share mutable state (such as
            its child list) across parents. It keeps the action&apos;s docstring, but
            non-inheritable attributes (<code>__display_name__</code>, <code>__groups__</code>,{' '}
            <code>__agent__</code>, <code>__to_commit__</code>, an explicit{' '}
            <code>__detached__</code>) reset to their defaults. <code>name</code> becomes the tool
            name.
          </li>
          <li>
            <code>extended=False</code> adds the class itself. Keep <code>name</code> equal to the
            class name: the LLM is sent the class name, so a different alias can&apos;t be resolved.
          </li>
          <li>It doesn&apos;t reach subclasses of the parent that already exist.</li>
        </ul>
        <CodeBlock language="python">{`class PlannerAgent(Action): ...
class ExecutorAgent(Action): ...
class ReviewAgent(Action): ...

# extended=False shares the classes themselves, so the cycle closes
PlannerAgent.add_child(ExecutorAgent, extended=False)
PlannerAgent.add_child(ReviewAgent)

# Circular: executor can re-invoke planner
ExecutorAgent.add_child(PlannerAgent, extended=False)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>extend_action</h3>
        <CodeBlock language="python">{`from pybotchi import extend_action

extend_action(action: type[Action], name: str | None = None) -> type[Action]`}</CodeBlock>
        <p>
          Returns a new subclass of <code>action</code> named <code>name</code> (default: the
          action&apos;s own name), keeping its module and docstring. This is what{' '}
          <code>add_child</code> uses when <code>extended=True</code>.
        </p>
        <CodeBlock language="python">{`Forecast = extend_action(WeatherTool, "Forecast")   # same tool description, new name`}</CodeBlock>
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
          Calls <code>add_child()</code> on every immediate child — injects a capability one
          level down (the grandchild level only; it isn&apos;t recursive).
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>remove_child / remove_grand_child</h3>
        <CodeBlock language="python">{`Action.remove_child(name: str) -> None
Action.remove_grand_child(name: str) -> None`}</CodeBlock>
        <p>
          Remove a child by <strong>name</strong> from <code>__child_actions__</code>.
          Cascades to all subclasses. If the child is inherited from a parent class, the
          attribute is set to <code>None</code> on this class instead, which hides it here
          without touching the parent. <code>remove_grand_child</code> calls{' '}
          <code>remove_child</code> on every immediate child.
        </p>
      </div>

      {/* ================================================================ */}
      <h2 id="context">Context</h2>
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
    max_self_recursion: int | None   # global self-recursion limit (__max_self_recursion__ takes priority)
    parent: Self | None              # set by detach_context(); reference to originating context

    # cached properties
    llm: TLLM                        # LLM.base(); override in a subclass to use another model
    llm_model: str                   # model name read from llm (see MODEL_NAME_SOURCE)
    llm_is_anthropic: bool           # True if llm._llm_type contains "anthropic"`}</CodeBlock>
        <p>
          <code>llm_model</code> checks the LLM&apos;s attributes listed in the{' '}
          <code>MODEL_NAME_SOURCE</code> env var (default{' '}
          <code>model,model_name,deployment_name</code>) and falls back to{' '}
          <code>&quot;UNSPECIFIED&quot;</code>. <code>llm_is_anthropic</code> decides whether
          child selection uses <code>tool_choice=&quot;any&quot;</code> or{' '}
          <code>&quot;required&quot;</code>.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>start</h3>
        <CodeBlock language="python">{`async def start(
    self,
    action: type[Action],
    /,
    **kwargs: Any,
) -> tuple[Action, ActionResult]:`}</CodeBlock>
        <p>
          The main entry point. Raises <code>RuntimeError</code> unless <code>prompts[0]</code>{' '}
          is a system role, resets the <code>_action_call</code> counter, instantiates the action
          with <code>kwargs</code> as its field values, then calls{' '}
          <code>action.execute(context)</code>.
          Returns <code>(action_instance, ActionResult)</code> — the result may be{' '}
          <code>None</code> when the action completes normally without returning a signal.
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
          <code>metadata</code>, and copies <code>streaming</code> and{' '}
          <code>max_self_recursion</code>. <code>usages</code> starts empty (which is why the
          default <code>commit_context</code> merges them back). Sets <code>parent=self</code> on
          the copy. Used for isolated branches where children should not affect the main context.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>detached_start</h3>
        <CodeBlock language="python">{`async def detached_start(
    self,
    action: type[Action],
    /,
    **kwargs: Any,
) -> tuple[Context, Action, ActionResult]:`}</CodeBlock>
        <p>
          Convenience: calls <code>detach_context()</code> then <code>start()</code>.
          Returns <code>(child_context, action_instance, ActionResult)</code> (the result may be{' '}
          <code>None</code>). Use to run an action in isolation and inspect or merge the result
          manually.
        </p>
        <CodeBlock language="python">{`child_ctx, action, result = await context.detached_start(SubWorkflow)
# Inspect child_ctx.prompts, child_ctx.metadata before merging`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>add_message</h3>
        <CodeBlock language="python">{`async def add_message(self, role: ChatRole, content: str, metadata: dict | None = None) -> None:`}</CodeBlock>
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
    action: Action | ToolCall,
    content: str,
    metadata: dict | None = None,
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
    model: str | None,
    usage: UsageMetadata | None,
    name: str | None = None,
    raise_error: bool = False,
) -> None:`}</CodeBlock>
        <p>
          Appends to <code>action._usage</code> and merges into <code>context.usages[model]</code>.
          <code>name</code> labels the usage record: <code>"$tool"</code>,{' '}
          <code>"$fallback"</code>, <code>"$finalize"</code> (from <code>on_max_iteration</code>,
          unrelated to <code>cleanup</code>), or a custom label.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>set_metadata / update_metadata</h3>
        <CodeBlock language="python">{`async def set_metadata(self, *paths: Any, value: Any, update: bool = False) -> None
async def update_metadata(self, *paths: Any, value: Any) -> None`}</CodeBlock>
        <p>
          Deep-set by path. <code>update=True</code> (or <code>update_metadata</code>) extends
          lists/dicts/sets/tuples instead of replacing. No paths = replace the entire metadata
          dict (for both methods). Every intermediate key must already exist; a missing one
          raises <code>ValueError</code>.
        </p>
        <CodeBlock language="python">{`await context.set_metadata("results", value={})                  # create the "results" bucket
await context.set_metadata("results", "step1", value="done")     # metadata["results"]["step1"] = "done"
await context.update_metadata("results", value={"step2": "ok"})  # merge → {"step1": "done", "step2": "ok"}`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>notify</h3>
        <CodeBlock language="python">{`async def notify(self, message: dict[str, Any]) -> None:`}</CodeBlock>
        <p>
          No-op in the base class. Override in your custom Context for WebSocket, SSE, or
          logging. Called by the framework on: tool selection start/complete, fallback
          start/complete, finalize start/complete (<code>on_max_iteration</code>&apos;s summary
          step, not the <code>cleanup</code> hook), and gRPC/MCP events.
        </p>
        <CodeBlock language="python">{`# Core (status: "started" | "completed")
{"event": "tool", "type": "selection", "status": ..., "data": [display names] | [{"action", "args"}]}
{"event": "tool", "type": "fallback",  "status": ..., "data": display_name}
{"event": "tool", "type": "finalize",  "status": ..., "data": display_name}

# gRPC (status: "started" | "inprogress" | "completed")
{"event": "grpc", "class": class_name, "type": remote_action_name, "status": ..., "data": ...}

# MCP (status: "started" → args, "inprogress" → {progress, total, message}, "completed" → content)
{"event": "mcp-call-tool", "class": class_name, "type": tool_name, "status": ..., "data": ...}`}</CodeBlock>
        <p>
          Selection events are skipped on the single-child shortcut, and fallback events only
          fire on the zero-children path (when the LLM is invoked for <code>fallback</code>).
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>shifted_prompts</h3>
        <CodeBlock language="python">{`def shifted_prompts(self, offset: int | None = None) -> Iterator[dict]:`}</CodeBlock>
        <p>
          Returns a prompts iterator. Always skips index 0 (system prompt). With{' '}
          <code>offset=N</code>: returns only the last N entries (minimum index 1).
          Used internally by <code>__max_child_selection_prompts__</code>.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>run_func_in_thread / run_task_in_thread</h3>
        <CodeBlock language="python">{`def run_func_in_thread(
    self, task: Callable, executor=None, *args, **kwargs
) -> Future

def run_task_in_thread(
    self, task: Coroutine, executor=None
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
        <CodeBlock language="python">{`from pydantic import ConfigDict

class AppContext(Context):
    model_config = ConfigDict(arbitrary_types_allowed=True)   # needed for non-pydantic types

    db: AsyncSession   # custom field

    def detached_kwargs(self, **kwargs: Any) -> dict[str, Any]:
        return super().detached_kwargs(db=self.db, **kwargs)`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <h2 id="actionreturn">ActionReturn</h2>
      <p>
        Lifecycle methods return <code>ActionResult</code> (<code>ActionReturn | None</code>).
        The value controls what the framework does next.
      </p>

      <div className="lifecycle-hook-section">
        <h3>Values</h3>
        <CodeBlock language="python">{`from pybotchi import ActionResult, ActionReturn

# None — continue normally; nothing is interrupted (equivalent of old GO)
return None

# ActionReturn.END — stop only this action's remaining lifecycle.
# Sibling actions at the same level continue running.
return ActionReturn.END

# ActionReturn.BREAK — stop this action AND break the nearest ancestor's
# __max_iteration__ loop. Also stops subsequent siblings in sequential execution.
return ActionReturn.BREAK

# ActionReturn.STOP — stop the entire agent immediately.
# Propagates all the way up through every ancestor. No value attached.
return ActionReturn.STOP

# ActionReturn.stop(value=...) — STOP with a return value.
# The value is accessible on the ActionReturn object after context.start() returns.
return ActionReturn.stop(value="any_value_of_any_type")

# Checking return values
ar.is_end    # True for END, BREAK, and STOP  (isinstance(ar, End))
ar.is_break  # True for BREAK and STOP        (isinstance(ar, Break))
ar.is_stop   # True only for STOP             (isinstance(ar, Stop))`}</CodeBlock>

        <Note>
          <strong>END, BREAK, and STOP are pre-instantiated singletons.</strong> Use them
          directly — do not call them as constructors. Only{' '}
          <code>ActionReturn.stop(value=...)</code> is a factory method, for when you need to
          attach a return value to a STOP signal.
        </Note>

        <Note>
          <strong>END vs BREAK inside an iteration loop:</strong> END stops the current
          action's lifecycle but does <em>not</em> break the parent&apos;s loop — the loop
          continues to the next iteration. This also applies to END returned from the looping
          action&apos;s own <code>fallback</code>. BREAK exits the loop immediately, so{' '}
          <code>on_max_iteration()</code> isn&apos;t called, and the looping action&apos;s{' '}
          <code>post</code> still runs. BREAK ends every non-looping action between the
          returning action and the loop (their <code>post</code> is skipped). With no looping
          ancestor, it reaches <code>context.start()</code>.
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
      <h2 id="llm">LLM</h2>
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
# Without type: returns the instance, or None if missing (never raises).
# With type: raises Exception if missing or wrong type, unless throw=False (returns None).`}</CodeBlock>
        <CodeBlock language="python">{`from langchain_openai import AzureChatOpenAI

base = LLM.base()                                    # Any
typed = LLM.base(AzureChatOpenAI)                   # -> AzureChatOpenAI
model = LLM.get("powerful", AzureChatOpenAI)        # -> AzureChatOpenAI
maybe = LLM.get("powerful", AzureChatOpenAI, throw=False)  # -> AzureChatOpenAI | None`}</CodeBlock>
        <p>
          Inside lifecycle hooks, prefer <code>context.llm</code>: it&apos;s the context&apos;s
          base LLM (a cached <code>LLM.base()</code>), with no tools bound. Override the{' '}
          <code>llm</code> property in a Context subclass to use another model.
        </p>
      </div>

      {/* ================================================================ */}
      <h2 id="anthropic-compatibility">Anthropic Compatibility</h2>
      <p>
        PyBotchi is designed to pass <strong>only the tools relevant to the current intent</strong>{' '}
        when invoking child selection. This reduces noise in the LLM context and improves routing
        accuracy. However, Anthropic models have a known constraint that conflicts with this design:
      </p>
      <Note>
        <strong>Known issue — Anthropic tool-schema requirement:</strong> When a conversation
        history already contains a <code>tool_use</code> / <code>tool_result</code> entry for a
        specific tool, Anthropic requires that tool&apos;s schema to be included in{' '}
        <em>every subsequent</em> API call in that session — even if the tool is no longer
        relevant. PyBotchi&apos;s selective-tool approach omits those schemas on later turns,
        which causes Anthropic to return a validation error.
        <br /><br />
        OpenAI does not have this restriction. Anthropic may address this in a future API version.
      </Note>

      <p>Three approaches are available today:</p>

      <div className="lifecycle-hook-section">
        <h3>Option 1 — 1-level deep agent</h3>
        <p>
          Place all child actions directly under a single top-level parent. Every child selection
          call will include all tool schemas, which always satisfies Anthropic&apos;s requirement.
          This is the simplest approach and the recommended starting point.
        </p>
        <CodeBlock language="python">{`class MyAgent(Action):
    """All tools live one level deep — Anthropic always sees every schema."""

    class Search(Action):
        """Search the web."""
        query: str

    class Summarize(Action):
        """Summarize gathered results."""

    class Translate(Action):
        """Translate text."""
        language: str`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>Option 2 — Use <code>add_message</code> instead of <code>add_response</code></h3>
        <p>
          <code>add_response(action, content)</code> records the full tool-call pair (tool name,
          args, result) in the conversation history. Replacing it with{' '}
          <code>add_message(ChatRole.ASSISTANT, content)</code> writes a plain assistant message
          instead — Anthropic won&apos;t require those tool schemas on future turns because no
          tool-call entry exists.
        </p>
        <p>
          Trade-off: the structured tool-call/result metadata is not in the prompt history.
          You can add a summarization step to keep the context clean.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, ChatRole, Context

class MyAction(Action):
    async def pre(self, context: Context) -> None:
        msg = await context.llm.ainvoke(context.prompts)
        # Plain assistant message — no tool_use/tool_result metadata stored
        await context.add_message(ChatRole.ASSISTANT, msg.text)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>Option 3 — Custom <code>child_selection</code> with schema re-injection</h3>
        <p>
          Override <code>child_selection</code> to inspect the prompt history for previously-used
          tool names and re-inject their schemas into the current tool set, even if those tools
          are not part of the active intent. This preserves PyBotchi&apos;s selective routing
          while satisfying Anthropic&apos;s constraint.
        </p>
        <p>
          Most complete solution, but requires more implementation work. A built-in mechanism for
          this is under consideration for a future release.
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, Context

class MyAgent(Action):

    class ToolA(Action):
        """Do something."""
        param: str

    class ToolB(Action):
        """Do something else."""

    async def child_selection(self, context: Context, child_actions=None):
        if child_actions is None:
            child_actions = await self.get_child_actions(context)

        # Collect tool names already referenced in history as tool_use entries
        seen_tools = {
            call["function"]["name"]
            for msg in context.prompts
            if msg.get("role") == "assistant"
            for call in msg.get("tool_calls", [])
        }

        # Re-include any previously-seen tool even if not in the current intent
        extended = {**child_actions}
        for name in seen_tools:
            if name not in extended and name in self.__child_actions__:
                extended[name] = self.__child_actions__[name]

        return await super().child_selection(context, extended)`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <h2 id="grpc">gRPC</h2>
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

        async def pre(self, context: GRPCContext) -> None:
            result = do_work(self.payload)
            await context.add_response(self, result)`}</CodeBlock>

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
    groups=["workers"],            # remote action groups to fetch/consume from this server
    secure=False,                  # TLS — set True for production
    root_certificates=None,        # path or bytes for CA cert
    private_key=None,              # path or bytes for client key
    certificate_chain=None,        # path or bytes for client cert
    options=None,                  # list[tuple] — grpc channel options
    compression=None,              # GRPCCompression.Gzip etc. (from pybotchi.grpc.common)
    interceptors=None,             # list[ClientInterceptor] — use for auth on every RPC
    metadata=None,                 # dict keyed by RPC; only "connect" is used, as (key, value) pairs
    allow_exec=False,              # UNSAFE: allow exec() of raw code from the server — keep False unless trusted
    manual_enable=False,           # with an allow-list, unlisted actions are excluded
                                   # instead of falling back to __enabled__
    allowed_actions=None,          # dict[str, bool] — default allow-list (empty = no filtering)
    remote_action_class=None,      # override GRPCRemoteAction subclass
    block_return=False,            # False: honor a server-returned ActionReturn (e.g. STOP)
                                   # True: ignore it
    exclude_unset=True,            # drop fields never explicitly set (pydantic exclude_unset)
    require_integration=True,      # skip this connection unless context.integrations has its name
)`}</CodeBlock>
        <p>
          With <code>require_integration=True</code> (the default), a connection is silently
          skipped when <code>context.integrations</code> has no entry for its name, so a plain
          context gets no remote actions. Pass <code>integrations={'{'}&quot;name&quot;: {'{}'}{'}'}</code>{' '}
          (including names used by nested connections on the server, since integrations are
          forwarded) or set <code>require_integration=False</code>.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>GRPCRemoteAction</h3>
        <p>
          Dynamically built proxy action that represents a remote server-side action.
          Subclass to customize <code>__concurrent__</code> or to handle streaming events.
        </p>
        <CodeBlock language="python">{`from google.protobuf.json_format import MessageToDict

from pybotchi.grpc import GRPCRemoteAction

class MyRemote(GRPCRemoteAction):
    async def grpc_event_update(self, context, event) -> None:
        """Called on each streaming update from the server."""
        await log_event(MessageToDict(event)["data"])
        # super() applies the remote context changes (messages, metadata, notify)
        await super().grpc_event_update(context, event)

    async def grpc_event_close(self, context, event) -> None:
        """Called when the server stream closes."""
        # super() collects usages, child actions, and the ActionReturn
        await super().grpc_event_close(context, event)

    async def grpc_event_error(self, context, event) -> None:
        """Called when the server reports an error event."""
        # super() raises GRPCRemoteError (from pybotchi.grpc.exception)
        await super().grpc_event_error(context, event)

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
          automatically propagate changes up/down through gRPC pipes. Other methods and direct
          mutations (e.g. <code>context.metadata[...] = ...</code>) aren&apos;t propagated. If you
          override <code>notify</code>, call <code>super().notify()</code> to keep forwarding.
        </p>
        <p>
          The context snapshot sent to the server includes <code>integrations</code> (with any
          auth headers or metadata set in <code>pre_grpc</code>), prompts, and metadata. Only
          connect to servers you trust, or override <code>grpc_sharing_dump</code> to strip
          secrets.
        </p>
        <CodeBlock language="python">{`class GRPCContext(Context[TLLM]):
    integrations: dict[str, GRPCIntegration]  # per-connection runtime overrides
    source_id: str | None                     # ID of originating context
    context_id: str                           # unique ID for this copy

    async def grpc_send_up(self, source_id, name, data) -> None    # push to caller
    async def grpc_send_down(self, source_id, name, data) -> None  # push to servers`}</CodeBlock>
      </div>

      {/* ================================================================ */}
      <h2 id="mcp">MCP</h2>
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

    async def pre(self, context: Context) -> None:
        results = await search(self.query)
        await context.add_response(self, results)`}</CodeBlock>

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
    timeout=30.0,                     # HTTP timeout (seconds); also caps every MCP request
    sse_read_timeout=300.0,           # stream read timeout
    terminate_on_close=True,          # (SHTTP only) close session on disconnect
    httpx_client_factory=...,         # (SSE only) custom HTTP client factory
    auth=None,                        # (SSE only) httpx Auth object
    on_session_created=None,          # (SSE only) callback(session_id: str) -> None
    async_client_args=None,           # (SHTTP only) extra httpx.AsyncClient kwargs, e.g. {"auth": ...}
    client_session_args=None,         # ClientSessionArgs TypedDict — extra
                                      # mcp.ClientSession kwargs (callbacks, etc.)
    manual_enable=False,              # with an allow-list, unlisted tools are excluded
                                      # instead of falling back to __enabled__
    allowed_tools=None,               # dict[str, bool] — default allow-list (empty = no filtering)
    tool_action_class=None,           # override MCPToolAction subclass
    block_return=False,               # False: honor a server-returned ActionReturn (e.g. STOP)
                                      # via consume_result_meta(); True: ignore it
    exclude_unset=True,               # drop fields never explicitly set (pydantic exclude_unset)
    require_integration=True,         # skip this connection unless context.integrations has its name
)`}</CodeBlock>
        <p>
          <code>timeout</code> now defaults to <code>30.0</code> (was <code>5.0</code>). The
          underlying <code>mcp.ClientSession</code> read timeout is derived from{' '}
          <code>min(timeout, sse_read_timeout)</code>, so with the defaults every MCP request,
          including <code>call_tool</code>, fails after 30 seconds. For slow tools, raise{' '}
          <code>timeout</code> or pass{' '}
          <code>client_session_args={'{'}&quot;read_timeout_seconds&quot;: timedelta(...){'}'}</code>.
          Supply <code>client_session_args</code> to configure session-level callbacks (sampling,
          elicitation, logging, message handlers) directly on the connection.
        </p>
        <p>
          With <code>require_integration=True</code> (the default), a connection is silently
          skipped when <code>context.integrations</code> has no entry for its name. Tool names
          (and <code>allowed_tools</code> keys) are the generated class names: snake_case or
          kebab-case MCP tool names are camel-cased (<code>jira_get_issue</code> →{' '}
          <code>JiraGetIssue</code>). <code>context.allowed_actions</code> doesn&apos;t filter
          remote tools; use <code>allowed_tools</code>.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>MCPToolAction</h3>
        <p>
          Dynamically built proxy action for each MCP tool. Override to customize concurrent
          behavior or add pre/post logic around remote calls. Has a built-in{' '}
          <code>clean_content()</code> helper that handles all MCP content types (Text, Image,
          Audio, EmbeddedResource, ResourceLink) and a progress callback.
        </p>
        <CodeBlock language="python">{`from pybotchi import ActionResult
from pybotchi.mcp import MCPConnection, MCPContext, MCPToolAction

class AuditedTool(MCPToolAction):
    __concurrent__: bool = True   # run MCP calls concurrently

    async def pre(self, context: MCPContext) -> ActionResult:
        await log_audit(type(self).__name__, context.metadata)
        # MCPToolAction.pre makes the actual call_tool request — always call super()
        return await super().pre(context)

conn = MCPConnection(
    name="audited",
    mode="SHTTP",
    url="http://localhost:8001/mcp",
    tool_action_class=AuditedTool,   # every tool from this server uses this class
)`}</CodeBlock>
        <h4>consume_result_meta</h4>
        <CodeBlock language="python">{`async def consume_result_meta(self, context: MCPContext, meta: dict[str, Any]) -> ActionResult:`}</CodeBlock>
        <p>
          Called after a tool result comes back, with the result&apos;s <code>_meta</code> payload.
          When the server is a PyBotchi MCP app, that payload carries the remote action&apos;s
          serialized tree and its <code>ActionReturn</code>. Default behavior: unless the
          connection sets <code>block_return=True</code>, a <code>return</code> entry in the meta
          is rebuilt into the signal (e.g. a <code>STOP</code> with its value) so a remote stop can
          halt the local graph too. Nothing else from the meta is applied. Override to merge the
          remote context, usage, or action tree.
        </p>
        <CodeBlock language="python">{`class MathProblem(MCPToolAction):
    async def consume_result_meta(self, context, meta) -> ActionResult:
        print("remote context:", meta.get("context"))
        # super() converts meta["return"] into an ActionReturn unless block_return=True
        return await super().consume_result_meta(context, meta)`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>build_mcp_app / mount_mcp_app</h3>
        <CodeBlock language="python">{`from pybotchi.mcp import build_mcp_app, mount_mcp_app

# Standalone Starlette app with SSE or streamable-HTTP transport
app = build_mcp_app(*groups, transport="streamable-http", stateless_groups=False)

# Mount into an existing FastAPI / Starlette app — async context manager
from fastapi import FastAPI
web_app = FastAPI()
async with mount_mcp_app(web_app, *groups, transport="sse", stateless_groups=False):
    ...  # servers stay mounted for the duration of this block`}</CodeBlock>
        <p>
          Both functions call <code>initialize_mcp_groups()</code> internally. Pass the group
          names that match the <code>__groups__</code> values on your actions (omit them to expose
          every group).
        </p>
        <p>
          <code>stateless_groups</code> controls each FastMCP server&apos;s{' '}
          <code>stateless_http</code> flag. Pass a single <code>bool</code> to apply to all groups,
          or a <code>dict[str, bool]</code> to set it per group. <strong>Keep it{' '}
          <code>False</code> (the default) to support server-initiated callbacks</strong> &mdash;
          sampling, elicitation, and logging require a stateful session. Set it <code>True</code>
          only for simple, fully stateless tools that never call back to the client.
        </p>
        <p>
          PyBotchi also patches each server&apos;s capabilities with a <code>pybotchi_native</code>
          marker. When a PyBotchi client connects to a PyBotchi server it detects this flag and
          enables context propagation (see MCP Context Propagation below).
        </p>
      </div>

      <div className="lifecycle-hook-section" id="mcp-context-propagation">
        <h3>MCP Context Propagation</h3>
        <p>
          When both ends run PyBotchi, the client forwards a snapshot of its context (prompts,
          metadata, allowed actions, integrations, usages) to the server with every tool call,
          and the server returns its resulting context, action tree, and <code>ActionReturn</code>{' '}
          in the result&apos;s <code>_meta</code>. By default the client only applies the returned{' '}
          <code>ActionReturn</code>, so a remote <code>STOP</code> can halt the whole graph.
          Override <code>consume_result_meta()</code> to merge the remote metadata or usage.
        </p>
        <p>
          The snapshot includes <code>integrations</code> (with any auth headers set in{' '}
          <code>pre_mcp</code>). Only enable this with servers you trust, or override{' '}
          <code>mcp_sharing_dump</code> to strip secrets.
        </p>
        <CodeBlock language="python">{`class MCPContext(Context[TLLM]):
    integrations: dict[str, MCPIntegration]  # per-connection runtime overrides
    source_id: str | None                    # ID of the calling (upstream) context
    context_id: str                          # unique ID for this context copy

    def mcp_dump(self) -> dict[str, Any]         # full JSON dump (server → client)
    def mcp_sharing_dump(self) -> dict[str, Any] # dump sent client → server
                                                 # (re-chains source_id / context_id)`}</CodeBlock>
        <p>
          On the server side, each exposed action runs inside an <code>MCPContext</code>
          reconstructed from the caller&apos;s snapshot; the live FastMCP request is available as{' '}
          <code>context._request_context</code> for session callbacks (it&apos;s always set, but
          callbacks only work when the group is <em>not</em> stateless, and it&apos;s{' '}
          <code>None</code> outside MCP). On the client side, override{' '}
          <code>MCPToolAction.consume_result_meta()</code> to read the returned context.
        </p>
      </div>

      {/* ================================================================ */}
      <h2 id="utilities">Utilities</h2>

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

g = await graph(MyRootAction, allowed_actions={})  # async — builds Graph (nodes + edges)
diagram = g.flowchart()   # returns Mermaid flowchart TD string
                          # concurrent edges are rendered with animation
print(diagram)`}</CodeBlock>
        <p>
          An empty or missing <code>allowed_actions</code> includes every child, even ones with{' '}
          <code>__enabled__ = False</code>. Pass a non-empty dict to apply the same filtering as{' '}
          <code>get_child_actions()</code>.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3>Action.serialize</h3>
        <CodeBlock language="python">{`action, result = await context.start(MyRootAction)
tree = action.serialize()   # mode="python" (default) or "json"
# {"name": "MyRootAction", "args": {...}, "usages": [...], "actions": [ ...children... ]}`}</CodeBlock>
        <p>
          Returns the executed action tree: each action&apos;s name, arguments, recorded usages,
          and the actions it ran, recursively. Useful for logging and auditing a turn.
        </p>
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

# Supports \${key} and \${key:default} syntax
result = apply_placeholders("\${greeting}, \${name}!", greeting="Hello", name="World")
# "Hello, World!"`}</CodeBlock>
        <p>
          Used internally to fill <code>__tool_call_prompt__</code> and{' '}
          <code>__max_iteration_prompt__</code> templates. Defaults in the{' '}
          <code>{'${key:default}'}</code> form are parsed as JSON, so a string default needs
          quotes (e.g. <code>{'${name:"World"}'}</code>).
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
        <CodeBlock language="python">{`from pybotchi import Action, ActionResult, ActionReturn, ChatRole, Context, LLM, graph, all_agents, extend_action

# ── Class variables (select overrides) ───────────────────────────────────────
class MyAction(Action):
    __enabled__: bool = True                        # False = hidden from parent
    __concurrent__: bool = False                    # ← set on CHILD, not parent
    __max_iteration__: int | None = None            # child selection loop cap
    __max_self_recursion__: int | None = None       # per-action self-call cap (→ on_max_self_recursion)
    __first_tool_only__: bool = False
    __system_prompt__: str | None = None
    __temperature__: float | None = None
    __max_child_selection_prompts__: int | None = None  # sliding prompt window
    __default_tool__: str = "DefaultAction"
    __tool_call_prompt__: str | None = None
    __max_iteration_prompt__: str | None = None
    # ── not inheritable ───────────────────────────────────────────────────────
    __display_name__: str = "MyAction"              # UI / MCP title
    __groups__: set[str] | None = None              # set → all valid groups
    __agent__: bool = False                         # marker for all_agents()
    __to_commit__: bool = True
    __detached__: bool = False                      # auto: True if commit_context is overridden
                                                    # (explicit value isn't inherited)

# ── Lifecycle hooks ───────────────────────────────────────────────────────────
    async def pre(self, context: Context) -> ActionResult: ...
    async def post(self, context: Context) -> ActionResult: ...
    async def fallback(self, context: Context, content: str) -> ActionResult: ...
    async def on_error(self, context, exception, unwrapped_exceptions) -> ActionResult: ...
    async def on_max_iteration(self, context: Context) -> ActionResult: ...
    async def on_max_self_recursion(self, context: Context) -> ActionResult: ...
    async def commit_context(self, parent: Context, child: Context) -> None: ...
    async def cleanup(self, context: Context) -> None: ...              # always runs, like finally
    async def child_selection(self, context, child_actions=None) -> tuple[list[Action], str]: ...
    def child_selection_prompt(self, context, tool_choice) -> str: ...   # sync
    def max_iteration_prompt(self, context) -> str: ...                  # sync
    async def get_child_actions(self, context) -> dict[str, type[Action]]: ...
    async def on_child_init_error(self, context, next_actions, cls, args, exc) -> str | None: ...
    @classmethod
    async def _as_tool(cls, context) -> dict | type[BaseModel]: ...

# ── ActionResult / ActionReturn ───────────────────────────────────────────────
#   None → continue  |  END → stop self  |  BREAK → break loop  |  STOP → stop agent
ActionReturn.END / ActionReturn.BREAK / ActionReturn.STOP
ActionReturn.stop(value)   # STOP with a return value

# ── Graph helpers ─────────────────────────────────────────────────────────────
ParentAction.add_child(ChildCls, name=None, override=False, extended=True)
ParentAction.remove_child("ChildName")   # inherited children are shadowed with None
extend_action(ChildCls, "Alias")         # subclass that keeps the docstring
g = await graph(MyRootAction, allowed_actions={})   # graph() is async
g.flowchart()   # → Mermaid diagram string`}</CodeBlock>
      </div>
    </>
  )
}
