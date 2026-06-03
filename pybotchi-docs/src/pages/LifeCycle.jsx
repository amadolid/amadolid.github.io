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
        <h3>pre</h3>
        <p>Executes before child agents run, allowing preparation, validation, and data gathering.</p>
        <ul>
          <li>Guardrails and validation before execution</li>
          <li>Data gathering (RAG, knowledge graphs, etc.)</li>
          <li>Business logic, tool execution, or preprocessing</li>
          <li>Logging and notifications</li>
        </ul>
        <CodeBlock language="python">{`from itertools import islice

from pybotchi import Action, ActionReturn, Context

from pydantic import Field

class Translate(Action):
    """Translate query to requested language."""

    language: str = Field(description="Target language.")

    async def pre(self, context: Context) -> ActionReturn:
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

        return ActionReturn.GO

        # You can return ActionReturn.END if there's another agent or child to be executed and you already want to stop the workflow
        # You can return ActionReturn.BREAK if it's part of iteration agent and you only need to break the loop and continue on next execution`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>post</h3>
        <p>Executes after child agents complete, handling result consolidation and cleanup.</p>
        <ul>
          <li>Consolidate results from child agent executions</li>
          <li>Data persistence (RAG, knowledge graphs, etc.)</li>
          <li>Cleanup and recording processes</li>
          <li>Logging and notifications</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def post(self, context: Context) -> ActionReturn:
        """Execute post process."""
        message = await context.llm.ainvoke(
            [
                {
                    "content": f"You are a specialized agent for for generating closing remarks.",
                    "role": "system",
                },
                *islice(context.prompts, 1, None),
            ]
        )
        await context.add_response(self, message.text)

        # All process here are optional and overridable
        # Save data to db, Do cleanups, No restriction at all

        return ActionReturn.GO`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_error</h3>
        <p>Handles errors during execution with retry logic or custom error handling.</p>
        <ul>
          <li>Error handling and retry mechanisms</li>
          <li>Logging and notifications</li>
          <li>Re-raise errors for parent agent handling</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def on_error(self, context: Context, exception: Exception) -> ActionReturn:
        """Execute on error process."""
        # Consume exception Here
        # Check for type or attributes then execute their respective full back process

        # Example:
        match exception:
            case ConnectionError():
                print("Network connection failed")
                fallback1()
            case TimeoutError():
                print("Request timed out")
                fallback2()
            case _:
                print(f"Unexpected error: {type(e).__name__}: {e}")
                fallback3()

        # Optional re-raise
        raise e`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>fallback</h3>
        <p>Executes when no child agent is selected, handling non-tool-call results.</p>
        <ul>
          <li>Process text content results from tool calls</li>
          <li>Allow non-tool-call result handling</li>
          <li>Logging and notifications</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # your attributes ...
    # your pre execution method ...
    # your child actions ...

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        """Execute fallback process."""
        # You can just add the content as response
        await context.add_response(self, content)

        # or
        # await context.add_message(ChatRole.ASSISTANT, content)

        return ActionReturn.GO

        # or
        # return ActionReturn.END`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>child_selection</h3>
        <p>Determines which child agents to execute, can be overridden with custom logic.</p>
        <ul>
          <li>Override with traditional control flow (if/else, switch/case)</li>
          <li>Custom agent selection logic</li>
          <li>Return declared or undeclared child agents</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context

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

        # message.text is for a fallback process in case tool_calls is empty.
        return next_actions, message.text

        # Alternatively:
        # return [SomeAction()], "Your fallback message"`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>commit_context</h3>
        <p>The final lifecycle event that controls context merging with the main execution context.</p>
        <ul>
          <li>Detach and clone current context for isolated execution</li>
          <li>Control which data merges with main context</li>
          <li>Useful for reactive agents that only need final results</li>
        </ul>
        <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context

class GeneratePresentation(Action):
    """Generate presentation based on user's query."""

    # optional attribute to enable iteration
    __max_child_iteration__ = 5

    # your attributes ...

    async def commit_context(self, parent: Context, child: Context) -> None:
        """Execute commit context if it's detached."""
        # The default implementation will merge usages.
        await super().commit_context(parent, child)

        # Include additional data merging or logging here.
        # Transfer context.prompts, metadata, or any other important information.`}</CodeBlock>
      </div>

      <h2>Extended Life Cycle Hooks</h2>

      <div className="lifecycle-hook-section">
        <h3>pre_mcp</h3>
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

    async def pre_mcp(self, context: MCPContext) -> ActionReturn:
        """Execute pre process."""
        if not (integration := context.integrations.get("jira")):
            raise NotImplementedError("Feature not yet implemented!")

        # Implement guardrails or additional validation for custom security checks.
        # Implement business logic to generate a user token or refresh an existing one

        # Optionally adjust headers for MCP arguments for the duration of this context.
        integration["config"]["headers"] = {"Authorization": "Bearer {{access_token}}"}
        # Optionally override allowed_tools for the duration of this context.
        integration["allowed_tools"] = {
            "Action1",
            "Action2",
        }

        return ActionReturn.GO`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>pre_grpc</h3>
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

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", "group-1")]

    # your attributes ...

    async def pre_grpc(self, context: GRPCContext) -> ActionReturn:
        """Execute pre grpc execution."""
        if not (integration := context.integrations.get("testing")):
            raise NotImplementedError("Feature not yet implemented!")

        # Optionally Adjust GRPC connection arguments and additional configuration.
        integration["config"]["metadata"] = {
            "additional_field_to_be": "included in invocation_metadata"
        }
        integration["config"]["group"] = "override the group"
        integration["allowed_tools"] = {
            "Action1",
            "Action2",
        }

        return ActionReturn.GO`}</CodeBlock>
      </div>

      <div className="lifecycle-hook-section">
        <h3>on_child_init_error</h3>
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
        </ul>
        <CodeBlock language="python">{`from json import dumps
from typing import Any

from pybotchi import Action, ActionReturn, Context, uuid


class GeneralChatWithCorrection(Action):
    """Runs with an iteration loop; handles bad tool arguments gracefully."""

    __max_child_iteration__ = 4
    __first_tool_only__ = True

    class Print(Action):
        """Print a number."""

        number: int  # LLM may initially send a string — triggers init error

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_response(self, str(self.number))
            return ActionReturn.GO

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
