import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function QuickStart() {
  return (
    <>
      <h2>Quick Start</h2>
      <p>
        Get up and running with PyBotchi in minutes. Here&apos;s a simple example to create your
        first agent:
      </p>

      <h3>Declare your base LLM</h3>
      <Note>
        <strong>Note:</strong> By default, you can use classes that extend LangChain&apos;s
        BaseChatModel, such as AzureChatOpenAI. However, if you want to use a different AI library
        or framework for advanced tasks, you will likely need to customize the Context and Action
        classes to integrate those tools.
        <br />
      </Note>
      <h5 style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
        This base LLM instance will be used for tool-selection (or child-selection).
      </h5>

      <CodeBlock language="python">{`from langchain_openai import AzureChatOpenAI

from pybotchi import LLM

LLM.add(
    base=AzureChatOpenAI(
        api_key="{{CHAT_KEY}}",
        azure_endpoint="{{CHAT_ENDPOINT}}",
        azure_deployment="{{CHAT_DEPLOYMENT}}",
        model="{{CHAT_MODEL}}",
        api_version="{{CHAT_VERSION}}",
        temperature={{CHAT_TEMPERATURE}},
        stream_usage=True,
    )
)`}</CodeBlock>

      <h3>Declare your master agent</h3>
      <p>
        Get up and running with PyBotchi in minutes. Here&apos;s a simple example to create your
        first agent:
      </p>

      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, Context

from pydantic import Field

# previous imports and code ...

class GeneralChat(Action):
    """Casual Generic Chat."""

    class AnswerMathProlem(Action):
        """Answer math problem."""

        answer: str = Field(description="The answer to the math problem")

        async def pre(self, context: Context) -> ActionReturn:
            """Execute pre process."""
            await context.add_response(self, self.answer)
            return ActionReturn.GO


    class Translate(Action):
        """Translate query to requested language."""

        translation: str = Field(description="The translation of the query")

        async def pre(self, context: Context) -> ActionReturn:
            """Execute pre process."""
            await context.add_response(self, self.translation)
            return ActionReturn.GO`}</CodeBlock>

      <h3>Initialize your context</h3>
      <Note>
        <strong>Note:</strong> The system prompt is required, even if it is empty. This ensures
        more secure prompting and provides a placeholder for your custom system prompt.
      </Note>

      <CodeBlock language="python">{`from pybotchi import Context

context = Context(
    prompts=[
        {
            "role": "system",
            "content": """
You're an AI the can solve math problem and translate any request.

Your primary focus is to prioritize tool usage and efficiently handle multiple tool calls, including invoking the same tool multiple times if necessary.
Ensure that all relevant tools are effectively utilized and properly sequenced to accurately and comprehensively address the user's inquiry.
""",
        },
        {
            "role": "user",
            "content": "4 x 4 and explain your answer in filipino",
        },
    ],
)`}</CodeBlock>

      <h3>Run your master agent</h3>
      <p>Start your agent using asyncio.</p>

      <CodeBlock language="python">{`from asyncio import run
from json import dumps

from pybotchi import graph

# previous imports and code ...

async def main():
    action, _ = await context.start(GeneralChat)
    print(dumps(context.prompts, indent=4))
    print(dumps(action.serialize(), indent=4))

    general_chat_graph = await graph(GeneralChat)
    print(general_chat_graph.flowchart())

run(main())`}</CodeBlock>

      <p>Result:</p>
      <CodeBlock language="bash">{`[
    {
        "role": "system",
        "content": "You're an AI the can solve math problem and translate any request.\\n\\nYour primary focus is to prioritize tool usage and efficiently handle multiple tool calls, including invoking the same tool multiple times if necessary.\\nEnsure that all relevant tools are effectively utilized and properly sequenced to accurately and comprehensively address the user's inquiry."
    },
    {
        "role": "user",
        "content": "4 x 4 and explain your answer in filipino"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_ea7e65251a02464ba1c60d403748dae4",
                "function": {
                    "name": "AnswerMathProlem",
                    "arguments": "{\\"answer\\":\\"4 x 4\\"}"
                },
                "type": "function"
            }
        ]
    },
    ...
]
flowchart TD
__main__.GeneralChat.AnswerMathProlem[AnswerMathProlem]
__main__.GeneralChat.Translate[Translate]
__main__.GeneralChat{GeneralChat}
__main__.GeneralChat --> __main__.GeneralChat.Translate
__main__.GeneralChat --> __main__.GeneralChat.AnswerMathProlem
style __main__.GeneralChat fill:#4CAF50,color:#000000`}</CodeBlock>

      <h3>Mermaid-JS Flowchart</h3>
      <img className="content-img" src="assets/mermaid.png" alt="mermaid.png" />
    </>
  )
}
