import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function Nesting() {
  return (
    <>
      <h2>Complex Nesting</h2>
      <p>
        PyBotchi actions are defined as Python classes. Child actions are simply inner classes,
        which means the full power of Python inheritance and composition applies. This section
        shows patterns from simple two-level nesting through deep multi-level hierarchies and
        mixed inheritance trees.
      </p>

      <h3>Basic Nesting</h3>
      <p>
        The simplest pattern: define child actions as inner classes. The parent&apos;s
        LLM tool-call selects which child to run.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context
from pydantic import Field


class GeneralChat(Action):
    """Casual Generic Chat."""

    class MathProblem(Action):
        """Solve the math problem."""

        answer: str = Field(description="Your mathematical answer")

        async def pre(self, context: Context) -> None:
            await context.add_response(self, self.answer)

    class Translation(Action):
        """Translate to a different language."""

        async def pre(self, context: Context) -> None:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_usage(self, context.llm.model_name, message.usage_metadata)
            await context.add_response(self, message.text)`}</CodeBlock>

      <h3 id="deep-hierarchies">Deep Hierarchies</h3>
      <p>
        Children can themselves have children, forming multi-level trees. Each level gets its own
        LLM tool-call, progressively narrowing the task.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context


class Deep(Action):
    """Respond to a joke."""

    class Funny(Action):
        """Use when the joke is funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "Ha! That's funny.")
            return ActionReturn.END

    class NotFunny(Action):
        """Use when the joke is not funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "I don't get it.")
            return ActionReturn.END


class GeneralChat(Action):
    """Casual Generic Chat."""

    # Inherits Deep's children (Funny and NotFunny)
    class Joke(Deep):
        """Respond to jokes."""

    class Greetings(Action):
        """Reply to hello/hi."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_response(self, "Hello!")
            return ActionReturn.END`}</CodeBlock>

      <h3>Inheritance Patterns</h3>
      <p>
        Standalone action classes can be used as base classes and then inherited into any parent.
        This lets you define reusable action logic once and compose it into multiple agents.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context


# --- Reusable base action ---
class Mini(Action):
    """Reply to good-byes."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_response(self, content)
        return ActionReturn.END


class Nano(Action):
    """Reply to greetings."""

    async def pre(self, context: Context) -> ActionReturn:
        await context.add_response(self, "Hello")
        return ActionReturn.END


# --- Compose into a parent ---
class GeneralChat(Action):
    """Casual Generic Chat."""

    # Each child inherits the logic from the base class
    class Goodbyes(Mini):
        """Reply to good-byes."""  # class doc overrides the tool description

    class Greetings(Nano):
        """Reply to greetings."""`}</CodeBlock>

      <Note>
        The class docstring of each inner class becomes its <strong>tool description</strong> for
        the LLM tool-call. Override it in the subclass to give the tool a more contextual description
        even when inheriting from a base action.
      </Note>

      <h3>Mixed Patterns</h3>
      <p>
        All patterns can be freely combined: some children inherit from bases, some are defined
        inline, and children can themselves have multiple levels of nesting.
      </p>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole, Context
from pydantic import Field


class Deep(Action):
    """Respond to a joke."""

    class Funny(Action):
        """Use when the joke is funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "your funny")
            return ActionReturn.END

    class NotFunny(Action):
        """Use when the joke is not funny."""

        async def pre(self, context: Context) -> ActionReturn:
            await context.add_message(ChatRole.ASSISTANT, "your not funny")
            return ActionReturn.END


class Mini(Action):
    """Reply to good-byes."""

    async def fallback(self, context: Context, content: str) -> ActionReturn:
        await context.add_response(self, content)
        return ActionReturn.END


class Nano(Action):
    """Reply to greetings."""

    async def pre(self, context: Context) -> ActionReturn:
        await context.add_response(self, "Hello")
        return ActionReturn.END


class GeneralChat(Action):
    """Casual Generic Chat with 5 specialised child actions."""

    class Joke(Deep):
        """Respond to jokes — inherits Funny/NotFunny sub-actions."""

    class Goodbyes(Mini):
        """Reply to good-byes."""

    class Greetings(Nano):
        """Reply to greetings."""

    class MathProblem(Action):
        """Solve a math problem."""

        answer: str = Field(description="Your mathematical answer")

        async def pre(self, context: Context) -> None:
            await context.add_response(self, self.answer)

    class Translation(Action):
        """Translate to a different language."""

        async def pre(self, context: Context) -> None:
            message = await context.llm.ainvoke(context.prompts)
            await context.add_usage(self, context.llm.model_name, message.usage_metadata)
            await context.add_response(self, message.text)`}</CodeBlock>

      <div className="highlight-box">
        <h3>How Child Discovery Works</h3>
        <p>
          PyBotchi automatically discovers all inner classes that inherit from <code>Action</code>{' '}
          and presents them to the LLM as tool options. The order they are defined in the class body
          is preserved. There is no limit to nesting depth — each level triggers its own tool-call
          with only that level&apos;s children visible to the model.
        </p>
      </div>
    </>
  )
}
