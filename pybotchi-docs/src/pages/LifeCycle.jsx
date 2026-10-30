import CodeBlock from '../components/CodeBlock'

export default function LifeCycle() {
  return (
    <>
      <h2>Life Cycle Hooks</h2>
      <p>
        The purpose of Life Cycle Hooks is to give developers fine-grained control over the various
        stages of an agent&apos;s or workflow&apos;s execution. They act as specific, reliable
        points where you can inject custom business logic, handle data, manage errors, and control
        the flow, ensuring the agent behaves exactly as intended from preparation to completion.
        <br />
        This control allows for more complex, robust, and customized agent architectures.
      </p>

      <div className="lifecycle-hook-section">
        <h3>ActionResult — Flow Control</h3>
        <p>
          The flow-control hooks (<code>pre</code>, <code>post</code>, <code>fallback</code>,{' '}
          <code>on_error</code>, <code>on_max_iteration</code>) return <code>ActionResult</code>,
          which is <code>ActionReturn | None</code>. The value controls what happens next:
        </p>
        <CodeBlock language="python">{`from pybotchi import ActionResult, ActionReturn

# None (or omit return) — continue normally, nothing is interrupted
return None

# ActionReturn.END — stop only this action's remaining lifecycle.
# Sibling actions at the same level continue running unaffected.
return ActionReturn.END

# ActionReturn.BREAK — stop this action AND break the nearest ancestor's
# iteration loop (__max_iteration__). Stops subsequent siblings too.
return ActionReturn.BREAK

# ActionReturn.STOP — stop the entire agent immediately.
# Propagates all the way up through every ancestor.
return ActionReturn.STOP

# ActionReturn.stop(value=...) — same as STOP but carries a return value
# accessible after context.start() completes.
return ActionReturn.stop(value="any_value_of_any_type")`}</CodeBlock>
        <p>
          <code>ActionReturn.END</code>, <code>ActionReturn.BREAK</code>, and{' '}
          <code>ActionReturn.STOP</code> are pre-instantiated singletons — use them directly
          without calling a constructor. Only <code>ActionReturn.stop(value=...)</code> is a
          factory method (for when you need to attach a return value).
        </p>
        <p>
          Inside an action with <code>__max_iteration__</code>, its own loop only exits on{' '}
          <code>BREAK</code> or <code>STOP</code>. <code>END</code> returned from its{' '}
          <code>fallback</code> or a child is ignored and the loop continues. A <code>BREAK</code>{' '}
          that exits the action&apos;s own loop is consumed there, so its <code>post</code> still
          runs. Without a looping ancestor, <code>BREAK</code> propagates up to{' '}
          <code>context.start()</code>, ending every action on the way.
        </p>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="pre">pre</h3>
        <p>Executes before child agents run, allowing preparation, validation, and data gathering.</p>
        <ul>
          <li>Guardrails and validation before execution</li>
          <li>Data gathering (RAG, knowledge graphs, etc.)</li>
          <li>Business logic, tool execution, or preprocessing</li>
          <li>Logging and notifications</li>
        </ul>
        <CodeBlock language="python">{`from itertools import islice

from pybotchi import Action, ActionResult, ActionReturn, Context

from pydantic import Field

class Translate(Action):
    """Translate query to requested language."""

    language: str = Field(description="Target language.")

    async def pre(self, context: Context) -> ActionResult:
        """Execute pre process."""
        # use base llm instance to invoke completion base on your requirements
        message = await context.llm.ainvoke(
            # Override system prompt to make your agent more specialized
            [
                {
                    "content": f"You are a specialized agent for translating the user's query to {self.language}",
                    "role": "system",
                },
                *islice(context.prompts, 1, None),
            ]
        )
        # push message.text to your conversational prompt context
        await context.add_response(self, message.text)

        # All process here are optional and overridable
        # You may do something else here like calling other framework/library
        # You may call langgraph ainvoke
        # You may call crewai kickoff_async
        # You may call OpenAI REST API directly
        # You may do guardrails before executing any commands
        # No restriction at all

        # Return None (or omit return) to continue normally
        # Return ActionReturn.END to stop only this action (siblings continue)
        # Return ActionReturn.BREAK to break the nearest ancestor iteration loop
        # Return ActionReturn.STOP to stop the entire agent`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="post">post</h3>
        <p>Executes after child agents complete, handling result consolidation and recording.</p>
        <ul>
          <li>Consolidate results from child agent executions</li>
          <li>Data persistence (RAG, knowledge graphs, etc.)</li>
          <li>Recording processes</li>
          <li>Logging and notifications</li>
        </ul>
        <p>
          Doesn&apos;t run if the action ended early (<code>END</code>, <code>BREAK</code>,{' '}
          <code>STOP</code>) or an error occurred. A <code>BREAK</code> that only exits this
          action&apos;s own <code>__max_iteration__</code> loop still runs <code>post</code>. Use{' '}
          <code>cleanup</code> for anything that must always run.
        </p>
        <CodeBlock language="python">{`from itertools import islice

from pybotchi import Action, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def post(self, context: Context) -> None:
        """Execute post process."""
        message = await context.llm.ainvoke(
            [
                {
                    "content": "You are a specialized agent for generating closing remarks.",
                    "role": "system",
                },
                *islice(context.prompts, 1, None),
            ]
        )
        await context.add_response(self, message.text)

        # All process here are optional and overridable
        # Save data to db, No restriction at all`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="on_error">on_error</h3>
        <p>Handles errors raised during execution with custom error handling.</p>
        <ul>
          <li>Error handling and recovery</li>
          <li>Logging and notifications</li>
          <li>Re-raise errors for parent agent handling</li>
        </ul>
        <ul>
          <li>
            Returning <code>None</code> swallows the error and the action ends normally, but{' '}
            <code>post</code> is skipped. Nothing is retried automatically.
          </li>
          <li>
            Errors from concurrent children arrive wrapped in an <code>ExceptionGroup</code>. Inspect{' '}
            <code>unwrapped_exceptions</code> to match the individual errors.
          </li>
          <li>
            Without an <code>on_error</code> override, the first leaf error is re-raised and a
            detached context isn&apos;t committed.
          </li>
          <li>
            For <code>MCPAction</code>/<code>GRPCAction</code>, it runs after the MCP/gRPC
            connections are closed.
          </li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionResult, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def on_error(self, context: Context, exception: Exception, unwrapped_exceptions) -> ActionResult:
        """Execute on error process."""
        # Consume exception Here
        # Check for type or attributes then execute their respective full back process

        # Example: unwrapped_exceptions yields the leaf errors (also from ExceptionGroups)
        for error in unwrapped_exceptions:
            match error:
                case ConnectionError():
                    print("Network connection failed")
                    fallback1()
                case TimeoutError():
                    print("Request timed out")
                    fallback2()
                case _:
                    print(f"Unexpected error: {type(error).__name__}: {error}")
                    fallback3()

        # Optional re-raise
        raise exception`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="fallback">fallback</h3>
        <p>Executes when no child agent is selected, handling non-tool-call results.</p>
        <ul>
          <li>Process text returned instead of tool calls</li>
          <li>Allow non-tool-call result handling</li>
          <li>Logging and notifications</li>
        </ul>
        <p>Overriding <code>fallback</code> also changes how child selection works:</p>
        <ul>
          <li>
            The selection call uses <code>tool_choice=&quot;auto&quot;</code>, so the LLM may answer in
            text instead of calling a tool.
          </li>
          <li>
            The single-child shortcut (one child with no fields runs directly, without an LLM call)
            is disabled.
          </li>
          <li>
            With no children, the LLM is called on <code>context.prompts</code> and its text is
            passed to <code>fallback</code>.
          </li>
          <li>
            Inside a <code>__max_iteration__</code> action, return <code>BREAK</code> to finish the
            loop. <code>END</code> is ignored and the loop continues.
          </li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionResult, ActionReturn, ChatRole, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def fallback(self, context: Context, content: str) -> ActionResult:
        """Execute fallback process."""
        # You can just add the content as response
        await context.add_response(self, content)

        # or
        # await context.add_message(ChatRole.ASSISTANT, content)

        # Return None to continue normally
        # Return ActionReturn.BREAK to break the nearest ancestor iteration loop
        # Return ActionReturn.STOP to stop the entire agent`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="child_selection">child_selection</h3>
        <p>Determines which child agents to execute, can be overridden with custom logic.</p>
        <ul>
          <li>Override with traditional control flow (if/else, switch/case)</li>
          <li>Custom agent selection logic</li>
          <li>Return declared or undeclared child agents</li>
        </ul>
        <p>
          It isn&apos;t called when the action has no enabled children, or has exactly one child
          with no fields and no <code>fallback</code> (that child runs directly).
        </p>
        <CodeBlock language="python">{`from pybotchi import Action, Context
from pybotchi.action import ChildActions

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def child_selection(
        self,
        context: Context,
        child_actions: ChildActions | None = None,
    ) -> tuple[list["Action"], str]:
        """Execute tool selection process."""
        # By default, child_actions will hold the current set of child actions.
        if child_actions is None:
            child_actions = await self.get_child_actions(context)

        # Override the selection here.
        # Use if/else, match/case, or an LLM tool call.
        message = await context.llm.ainvoke(...)

        # Select the next actions based on your result.
        next_actions = [
            child_actions[call["name"]](**call["args"]) for call in message.tool_calls
        ]

        # message.text is passed to fallback when no action is selected.
        return next_actions, message.text

        # Alternatively:
        # return [SomeAction()], "Your fallback message"`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="commit_context">commit_context</h3>
        <p>
          The final lifecycle event for detached actions. It controls what merges from the
          action&apos;s isolated context back into the parent context.
        </p>
        <ul>
          <li>Control which data merges with main context</li>
          <li>Useful for reactive agents that only need final results</li>
        </ul>
        <ul>
          <li>
            Overriding it auto-sets <code>__detached__ = True</code>: the action and its children
            work on a copy of the context.
          </li>
          <li>
            The default only merges token usages. Prompts and metadata stay in the copy unless you
            merge them here.
          </li>
          <li>
            It&apos;s skipped when an error escapes and <code>on_error</code> isn&apos;t overridden
            (<code>__to_commit__</code> becomes <code>False</code>).
          </li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...

    async def commit_context(self, parent: Context, child: Context) -> None:
        """Execute commit context if it's detached."""
        # The default implementation will merge usages.
        await super().commit_context(parent, child)

        # Include additional data merging or logging here.
        # Transfer context.prompts, metadata, or any other important information.`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="cleanup">cleanup</h3>
        <p>
          Always executes when the action finishes, like a <code>finally</code> block: on success,
          on <code>END</code>/<code>BREAK</code>/<code>STOP</code>, on errors (handled by{' '}
          <code>on_error</code> or not), on max self recursion, and on cancellation.
        </p>
        <ul>
          <li>Release resources (connections, locks, temp files)</li>
          <li>Reset state</li>
          <li>Final logging and metrics</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, Context
from pydantic import PrivateAttr

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    _conn: Connection | None = PrivateAttr(default=None)

    # your attributes ...

    async def pre(self, context: Context) -> None:
        """Execute pre process."""
        self._conn = await open_connection()

    async def cleanup(self, context: Context) -> None:
        """Execute cleanup process."""
        # pre may not have run (e.g. max self recursion or an early error)
        if self._conn is not None:
            await self._conn.close()`}</CodeBlock>
        <ul>
          <li>
            Runs before <code>commit_context</code>, so usage recorded during cleanup is still
            merged into the parent when the action is detached.
          </li>
          <li>
            May run even when <code>pre</code> didn&apos;t, so don&apos;t assume setup completed.
          </li>
          <li>
            Its return value is ignored and it can&apos;t change the flow. If it raises, that error
            replaces the action&apos;s result or original error. <code>commit_context</code> still
            runs, unless the action already failed with an unhandled error.
          </li>
          <li>
            For <code>MCPAction</code>/<code>GRPCAction</code>, it runs after the MCP/gRPC
            connections are closed (as does <code>on_error</code>). Do remote cleanup in{' '}
            <code>post</code>.
          </li>
        </ul>
      </div>

      <h2>Extended Life Cycle Hooks</h2>

      <div className="lifecycle-hook-section">
        <h3 id="pre_mcp">pre_mcp</h3>
        <p>
          Executes before MCP server connection for <code>MCPAction</code> agents only.
        </p>
        <ul>
          <li>Construct MCP server connection arguments</li>
          <li>Refresh expired credentials or tokens</li>
          <li>Guardrails and validation before connection</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import ActionReturn
from pybotchi.mcp import MCPAction, MCPConnection, MCPContext


class JiraRequestAction(MCPAction):
    """Trigger Atlassian Jira related request."""

    __mcp_connections__ = [
        MCPConnection("jira", "SSE", "https://mcp.atlassian.com/v1/sse")
    ]

    # your attributes ...

    async def pre_mcp(self, context: MCPContext) -> None:
        """Execute pre process."""
        # Without an integration entry, this connection is skipped (require_integration=True).
        if (integration := context.integrations.get("jira")) is None:
            raise NotImplementedError("Feature not yet implemented!")

        # Implement guardrails or additional validation for custom security checks.
        # Implement business logic to generate a user token or refresh an existing one

        # Optionally adjust headers for MCP arguments for the duration of this context.
        # Headers are merged over the connection's headers.
        integration.setdefault("config", {})["headers"] = {"Authorization": "Bearer {{access_token}}"}
        # Optionally override allowed_tools for the duration of this context.
        # allowed_tools is a dict[str, bool], merged over the connection's defaults.
        # Keys are the generated class names (e.g. "jira_get_issue" -> "JiraGetIssue").
        integration["allowed_tools"] = {
            "Action1": True,
            "Action2": True,
        }`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="pre_grpc">pre_grpc</h3>
        <p>
          Executes before GRPC server connection for <code>GRPCAction</code> agents only.
        </p>
        <ul>
          <li>Construct GRPC server connection arguments</li>
          <li>Refresh expired credentials or tokens</li>
          <li>Guardrails and validation before connection</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import ActionReturn
from pybotchi.grpc import GRPCAction, GRPCConnection, GRPCContext


class GeneralChat(GRPCAction):
    """Casual Generic Chat."""

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", ["group-1"])]

    # your attributes ...

    async def pre_grpc(self, context: GRPCContext) -> None:
        """Execute pre grpc execution."""
        # Without an integration entry, this connection is skipped (require_integration=True).
        if (integration := context.integrations.get("testing")) is None:
            raise NotImplementedError("Feature not yet implemented!")

        # Optionally Adjust GRPC connection arguments and additional configuration.
        config = integration.setdefault("config", {})
        # Metadata is keyed by RPC. Only "connect" is used, as (key, value) pairs.
        config["metadata"] = {
            "connect": [("x-additional-field", "included in invocation_metadata")]
        }
        config["groups"] = ["override-the-group"]
        # gRPC uses allowed_actions (dict[str, bool]), merged over the connection's defaults.
        integration["allowed_actions"] = {
            "Action1": True,
            "Action2": True,
        }`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3 id="on_child_init_error">on_child_init_error</h3>
        <p>
          Executes when a child action fails to initialize — for example, when the LLM returns
          malformed tool-call arguments that fail Pydantic validation. This hook lets you record
          the failure, add corrective context to the prompt history, and allow the iteration loop
          to retry with the error fed back to the model.
        </p>
        <ul>
          <li>Record the failed tool call in the action&apos;s history for serialization</li>
          <li>Add the error as a response so the LLM can self-correct on the next iteration</li>
          <li>Return <code>None</code> to skip the failed action and continue the loop</li>
          <li>
            Return a string to discard the whole selection (including children that built
            successfully). The string is passed to <code>fallback</code> as{' '}
            <code>content</code> if <code>fallback</code> is overridden.
          </li>
        </ul>
        <CodeBlock language="python">{`from json import dumps
from typing import Any

from pybotchi import Action, ActionReturn, Context
from pybotchi.utils import uuid


class GeneralChatWithCorrection(Action):
    """Runs with an iteration loop; handles bad tool arguments gracefully."""

    __max_iteration__ = 4
    __first_tool_only__ = True

    class Print(Action):
        """Print a number."""

        number: int  # LLM may send a non-numeric string — triggers init error

        async def pre(self, context: Context) -> None:
            await context.add_response(self, str(self.number))

    async def on_child_init_error(
        self,
        context: Context,
        next_actions: list[Action],
        child_cls: type[Action],
        child_args: dict[str, Any],
        exception: Exception,
    ) -> str | None:
        """Record the failed call and feed the error back to the LLM."""
        # 1. Track the failed attempt in action history
        self._actions.append({
            "name": child_cls.__name__,
            "args": child_args,
            "usages": [],
            "actions": [],
        })

        # 2. Add the failed tool call + error as a response so the LLM can retry
        await context.add_response(
            {
                "id": f"call_{uuid().hex}",
                "function": {
                    "name": child_cls.__name__,
                    "arguments": dumps(child_args),
                },
                "type": "function",
            },
            str(exception),
        )

        # Return None to skip this action and let the iteration continue
        return None`}</CodeBlock>
      </div>
    </>
  )
}
