import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function Runtime() {
  return (
    <>
      <h2>Runtime Builder</h2>
      <p>
        PyBotchi lets you modify the agent graph at runtime. You can add or remove child actions
        after class definition, and you can build circular or iterative workflows using four
        distinct patterns. This section covers <code>add_child</code> / <code>remove_child</code>{' '}
        and all four loop approaches.
      </p>

      <h3 id="add_child-remove_child">add_child / remove_child</h3>
      <p>
        Both <code>add_child</code> and <code>remove_child</code> are class-level methods. They
        mutate the action&apos;s child list permanently (for the lifetime of the process), so they
        are typically called at module level after class definitions — not inside hooks.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action


class Router(Action):
    """Routes requests."""


class WeatherTool(Action):
    """Get the current weather."""
    ...


class SummaryTool(Action):
    """Summarize results."""
    ...


# Add children after class definition
Router.add_child(WeatherTool)
Router.add_child(SummaryTool)

# Remove a child if needed
Router.remove_child(SummaryTool)`}</CodeBlock>

      <Note>
        <strong>add_child</strong> accepts a class and an optional alias string that overrides the
        class name used as the tool name. This is useful when adding the same action type under
        multiple names, or when creating circular references.
      </Note>

      <h3 id="iteration-pattern">Iteration Pattern</h3>
      <p>
        The simplest loop: set <code>__max_iteration__</code> to allow the parent to cycle
        through child selection multiple times. A <code>fallback</code> returning{' '}
        <code>ActionReturn.BREAK</code> stops the loop early when the LLM signals it is done.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


class WeatherAgent(Action):
    """Get weather and synthesize a response."""

    __max_iteration__ = 5  # allow up to 5 tool-selection rounds

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        """LLM replied without a tool call — we're done."""
        await context.add_message(ChatRole.ASSISTANT, content)
        return ActionReturn.BREAK  # break the iteration loop

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> None:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")`}</CodeBlock>

      <h3 id="circular-actions">Direct Circular Pattern</h3>
      <p>
        Wire a child action back to its parent (or any ancestor) using <code>add_child</code> with
        a <code>"DefaultAction"</code> alias. When the child finishes (returning <code>None</code>),
        it triggers a new tool-call on the aliased parent, creating a loop until <code>fallback</code> fires.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context


class WeatherAgent(Action):
    """Iterative weather agent using direct circular reference."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_message(ChatRole.ASSISTANT, content)
        return ActionReturn.STOP

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> None:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")


# Wire Weather → WeatherAgent under the alias "DefaultAction"
# When Weather.pre() returns None, WeatherAgent is selected next
WeatherAgent.Weather.add_child(WeatherAgent, "DefaultAction")`}</CodeBlock>

      <h3>Indirect Circular Pattern</h3>
      <p>
        Call <code>execute</code> on a parent action instance directly from inside a child&apos;s
        hook. This creates an indirect recursive loop that is fully controlled by your code rather
        than the tool-call mechanism.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionResult, ActionReturn, Context


class WeatherAgent(Action):
    """Iterative weather agent using indirect execution."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_message(ChatRole.ASSISTANT, content)
        return ActionReturn.STOP

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> ActionResult:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")

            # Directly invoke the parent action to continue the loop
            result = await WeatherAgent().execute(context, self)
            return result`}</CodeBlock>

      <Note>
        The indirect circular pattern gives you precise control over <em>when</em> to recurse. You
        can add conditions before calling <code>execute</code> to implement custom termination logic
        without relying on <code>fallback</code>.
      </Note>

      <h3>DefaultAction Pattern</h3>
      <p>
        Declare an inner class named <code>DefaultAction</code> as a child. It acts as the
        termination step: when the LLM stops calling tools and falls back to this action, it
        generates the final response and returns <code>ActionReturn.END</code>. Combine with
        <code>add_child</code> to wire in the loop.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context


class WeatherAgent(Action):
    """Weather agent with an explicit DefaultAction terminator."""

    class DefaultAction(Action):
        """General assistant — generates final response when no tool is needed."""

        async def pre(self, context: Context) -> ActionReturn:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_message(ChatRole.ASSISTANT, message.text)
            return ActionReturn.END  # stops the loop

    class Weather(Action):
        """Get the current weather for a location."""

        location: str

        async def pre(self, context: Context) -> None:
            if self.location.lower() == "yorkshire":
                await context.add_response(self, "It's cold and wet.")
            else:
                await context.add_response(self, "It's warm and sunny.")
            # returns None — continues, triggers WeatherAgent again


# Wire Weather back to WeatherAgent; DefaultAction handles final output
WeatherAgent.Weather.add_child(WeatherAgent, "DefaultAction")`}</CodeBlock>

      <div className="highlight-box">
        <h3>Choosing a Pattern</h3>
        <ul>
          <li>
            <strong>Iteration</strong> — simplest; use when you need a bounded loop with
            a clear max step count (<code>__max_iteration__</code>).
          </li>
          <li>
            <strong>Direct circular</strong> — clean; use when you want the tool-call mechanism
            to handle looping with no extra boilerplate.
          </li>
          <li>
            <strong>Indirect circular</strong> — most control; use when termination logic
            is complex or conditional.
          </li>
          <li>
            <strong>DefaultAction</strong> — explicit; use when you want a dedicated final-step
            action with custom generation logic and the loop wired via <code>add_child</code>.
          </li>
        </ul>
      </div>
    </>
  )
}
