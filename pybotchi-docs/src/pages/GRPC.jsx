import CodeBlock from "../components/CodeBlock";
import Note from "../components/Note";
import Collapsible from "../components/Collapsible";

const SERVER_PY = `from os import getenv

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pybotchi import Action, ActionReturn, ChatRole, LLM
from pybotchi.grpc import GRPCAction, GRPCConnection, GRPCContext

from pydantic import Field

load_dotenv()

LLM.add(
    base=AzureChatOpenAI(
        api_key=getenv("CHAT_KEY"),
        azure_endpoint=getenv("CHAT_ENDPOINT"),
        azure_deployment=getenv("CHAT_DEPLOYMENT"),
        model=getenv("CHAT_MODEL"),
        api_version=getenv("CHAT_VERSION"),
        temperature=int(getenv("CHAT_TEMPERATURE", "1")),
        stream_usage=True,
    )
)


class MathProblem(Action):
    """Solve the math problem."""

    __groups__ = {"grpc": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve (e.g., '2x + 5')")

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_usage(self, context.llm.model, message.usage_metadata)
        await context.add_message(
            ChatRole.ASSISTANT,
            "Adding additional message",
            metadata={"additional": True},
        )
        await context.add_response(self, message.text)


class Translation(Action):
    """Translate to specific language."""

    __groups__ = {"grpc": {"group-1"}}

    message: str = Field(description="The text content to be translated.")
    language: str = Field(description="The ISO code or name of the target language.")

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Translate \`{self.message}\` to {self.language}")
        await context.add_usage(self, context.llm.model, message.usage_metadata)
        await context.add_response(self, message.text)


# Example nested gRPC Action - exposed at group-1 and connected to group-2
class JokeWithStoryTelling(GRPCAction):
    """Tell Joke or Story."""

    __groups__ = {"grpc": {"group-1"}}
    __grpc_connections__ = [GRPCConnection("testing2", "localhost:50051", ["group-2"])]

    async def post(self, context: GRPCContext) -> ActionReturn:
        """Execute post process."""
        message = await context.llm.ainvoke(context.prompts)
        await context.add_usage(self, context.llm.model, message.usage_metadata, "combine")
        await context.add_message(ChatRole.ASSISTANT, message.text)
        return ActionReturn.STOP


class Joke(Action):
    """Generate a joke."""

    __concurrent__ = True
    __groups__ = {"grpc": {"group-2"}}

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke("generate very short joke")
        await context.add_usage(self, context.llm.model, message.usage_metadata)
        await context.add_response(self, message.text)


class StoryTelling(Action):
    """Tell a story."""

    __concurrent__ = True
    __groups__ = {"grpc": {"group-2"}}

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke("generate a very short story")
        await context.add_usage(self, context.llm.model, message.usage_metadata)
        await context.add_response(self, message.text)`;

const CLIENT_PY = `from asyncio import run
from os import getenv
from json import dumps

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pybotchi import Action, ActionResult, ActionReturn, ChatRole, LLM
from pybotchi.grpc import (
    GRPCAction,
    GRPCConnection,
    GRPCContext,
    GRPCIntegration,
    GRPCRemoteAction,
    graph,
)

load_dotenv()

LLM.add(
    base=AzureChatOpenAI(
        api_key=getenv("CHAT_KEY"),
        azure_endpoint=getenv("CHAT_ENDPOINT"),
        azure_deployment=getenv("CHAT_DEPLOYMENT"),
        model=getenv("CHAT_MODEL"),
        api_version=getenv("CHAT_VERSION"),
        temperature=int(getenv("CHAT_TEMPERATURE", "1")),
        stream_usage=True,
    )
)


class GeneralChat(GRPCAction):
    """Casual Generic Chat."""

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", ["group-1"])]

    async def pre_grpc(self, context: GRPCContext) -> None:
        """Execute pre grpc execution."""
        print("Trigger anything here before grpc client connection")
        print("Build context.integrations['testing']['config']")
        print("Refresh tokens")
        print("etc ...")

    class MathProblem(GRPCRemoteAction):
        async def pre(self, context: GRPCContext) -> ActionResult:
            """Execute pre execution."""
            print("#####################################")
            return await super().pre(context)

    class RequestValidator(Action):
        """Validate request concurrently."""

        __concurrent__ = True

        async def pre(self, context: GRPCContext) -> None:
            """Execute pre execution."""
            await context.add_response(self, "Validated!")


async def test() -> None:
    """Chat."""
    integrations: dict[str, GRPCIntegration] = {"testing": {}, "testing2": {}}
    context = GRPCContext(
        prompts=[
            {
                "role": ChatRole.SYSTEM,
                "content": "Address user's query while always including \`RequestValidator\` as first tool if available",
            },
            {
                "role": ChatRole.USER,
                "content": "What is 4 x 4 and what is the english of \`Kamusta?\`",
            },
        ],
        integrations=integrations,
    )
    action, result = await context.start(GeneralChat)
    print(dumps(context.prompts, indent=4))
    print(dumps(action.serialize(), indent=4))

    general_chat_graph = await graph(GeneralChat, integrations=integrations)
    print(general_chat_graph.flowchart())


run(test())`;

const SERVER_OUTPUT = `#-------------------------------------------------------#
# Agent ID: agent_b7759e0b77b94cc081ddd40417747dc8
# Agent Path: server.py
# Starting None worker(s) on 0.0.0.0:50051
#-------------------------------------------------------#
# Agent Process: Process-1 [314611]
# Agent Handler: PyBotchiGRPC
#-------------------------------------------------------#`;

const CLIENT_FLOW = `Trigger anything here before grpc client connection
Build context.integrations['testing']['config']
Refresh tokens
etc ...
#####################################
[
    {
        "role": "system",
        "content": "Address user's query while always including \`RequestValidator\` as first tool if available"
    },
    {
        "role": "user",
        "content": "What is 4 x 4 and what is the english of \`Kamusta?\`"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_4c271935415d460d8d20ac26ffbeea15",
                "function": {
                    "name": "RequestValidator",
                    "arguments": "{}"
                },
                "type": "function"
            }
        ]
    },
    {
        "content": "Validated!",
        "role": "tool",
        "tool_call_id": "call_4c271935415d460d8d20ac26ffbeea15"
    },
    {
        "content": "Adding additional message",
        "role": "assistant"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_e2b365e22caf45f7991d47512bc1e39d",
                "type": "function",
                "function": {
                    "arguments": "{\"equation\":\"4 x 4\"}",
                    "name": "MathProblem"
                }
            }
        ]
    },
    {
        "content": "The result of \`4 x 4\` is **16**.",
        "role": "tool",
        "tool_call_id": "call_e2b365e22caf45f7991d47512bc1e39d"
    },
    {
        "content": "",
        "role": "assistant",
        "tool_calls": [
            {
                "id": "call_b4c8c806c96d4d48b68ef1046193f102",
                "type": "function",
                "function": {
                    "arguments": "{\"message\":\"Kamusta?\",\"language\":\"English\"}",
                    "name": "Translation"
                }
            }
        ]
    },
    {
        "content": "\"Kamusta?\" translates to \"How are you?\" in English.",
        "role": "tool",
        "tool_call_id": "call_b4c8c806c96d4d48b68ef1046193f102"
    }
]
{
    "name": "GeneralChat",
    "args": {},
    "usages": [
        {
            "name": "$tool",
            "model": "gpt-4.1",
            "usage": {
                "input_tokens": 324,
                "output_tokens": 66,
                "total_tokens": 390,
                "input_token_details": {
                    "audio": 0,
                    "cache_read": 0
                },
                "output_token_details": {
                    "audio": 0,
                    "reasoning": 0
                }
            }
        }
    ],
    "actions": [
        {
            "name": "RequestValidator",
            "args": {},
            "usages": [],
            "actions": []
        },
        {
            "name": "MathProblem",
            "args": {
                "equation": "4 x 4"
            },
            "usages": [
                {
                    "name": null,
                    "usage": {
                        "input_token_details": {
                            "cache_read": 0.0,
                            "audio": 0.0
                        },
                        "total_tokens": 29.0,
                        "input_tokens": 14.0,
                        "output_token_details": {
                            "audio": 0.0,
                            "reasoning": 0.0
                        },
                        "output_tokens": 15.0
                    },
                    "model": "gpt-4.1"
                }
            ],
            "actions": []
        },
        {
            "name": "Translation",
            "args": {
                "message": "Kamusta?",
                "language": "English"
            },
            "usages": [
                {
                    "name": null,
                    "usage": {
                        "input_token_details": {
                            "cache_read": 0.0,
                            "audio": 0.0
                        },
                        "total_tokens": 30.0,
                        "input_tokens": 15.0,
                        "output_token_details": {
                            "audio": 0.0,
                            "reasoning": 0.0
                        },
                        "output_tokens": 15.0
                    },
                    "model": "gpt-4.1"
                }
            ],
            "actions": []
        }
    ]
}`;

const MERMAID_OUTPUT = `flowchart TD
__main__.GeneralChat.RequestValidator[RequestValidator]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.StoryTelling[StoryTelling]
__main__.GeneralChat{GeneralChat}
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling{JokeWithStoryTelling}
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Joke[Joke]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.patched.MathProblem[MathProblem]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Translation[Translation]
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling ed0@--"\`**GRPC** : testing2<br>*[concurrent]*\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Joke
grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling ed1@--"\`**GRPC** : testing2<br>*[concurrent]*\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.StoryTelling
__main__.GeneralChat --"\`**GRPC** : testing\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.patched.MathProblem
__main__.GeneralChat --"\`**GRPC** : testing\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.Translation
__main__.GeneralChat ed2@--"\`*[concurrent]*\`"--> __main__.GeneralChat.RequestValidator
__main__.GeneralChat --"\`**GRPC** : testing\`"--> grpc.agent_b7759e0b77b94cc081ddd40417747dc8.JokeWithStoryTelling
style __main__.GeneralChat fill:#4CAF50,color:#000000
classDef animate stroke-dasharray: 10,stroke-dashoffset: 500,animation: dash 10s linear infinite;
class ed0,ed1,ed2 animate`;

export default function GRPC() {
  return (
    <>
      <h2 id="distributed-agents">gRPC (Scaling)</h2>
      <p>
        PyBotchi&apos;s <strong>gRPC support</strong> enables{" "}
        <em>true distributed scaling</em> by allowing a PyBotchi client to
        connect to remote <strong>PyBotchi servers</strong> over gRPC. This lets
        you distribute compute resources <em>per Action</em> (or per group of
        Actions) while maintaining execution as a{" "}
        <strong>single unified graph</strong>.
      </p>

      <Note>
        <strong>Key concept:</strong> Remote Actions behave exactly like local
        Actions. They remain nodes in your graph—just executed on different
        machines with isolated resources.
      </Note>

      <h3>Real-Time Context Synchronization</h3>
      <p>
        When an Action executes through a gRPC connection, PyBotchi maintains{" "}
        <strong>bidirectional context synchronization</strong> between client
        and server throughout the execution lifecycle.
      </p>
      <ul>
        <li>
          <strong>Server → Client:</strong> When the remote server adds
          responses or updates context, changes propagate back to the client in
          real-time.
        </li>
        <li>
          <strong>Client → Server:</strong> When the client updates context
          during an active connection, changes flow to the server immediately.
        </li>
        <li>
          <strong>No polling required:</strong> Context stays synchronized
          through the persistent gRPC connection—no polling loops, background
          jobs, or coordination overhead.
        </li>
        <li>
          <strong>No database dependency:</strong> State synchronization happens
          directly through the connection without requiring external storage for
          coordination.
        </li>
      </ul>

      <div className="highlight-box">
        <h3>Why This Matters</h3>
        <p>
          Most distributed agent frameworks force you to choose between two
          painful options: implement polling loops with databases for state
          management, or lose the ability for agents to collaborate during
          execution. PyBotchi&apos;s gRPC mode eliminates this tradeoff
          entirely.
        </p>
        <p>
          Context synchronization is <strong>fully customizable</strong>—control
          exactly which data propagates (prompts, metadata, usage stats, or
          custom fields) and when it syncs. Override <code>commit_context</code>{" "}
          to implement selective propagation rules that match your architecture.
        </p>
      </div>

      <h3>Concurrent Execution Support</h3>
      <p>
        gRPC Actions fully support <strong>concurrent execution</strong> just
        like local Actions. Enable concurrent child execution by setting{" "}
        <code>__concurrent__</code> to control parallel processing across remote
        servers.
      </p>

      <h4>Via Remote Action Configuration</h4>
      <CodeBlock language="python">{`from pybotchi import Action, ActionReturn, ChatRole
from pybotchi.grpc import GRPCContext

from pydantic import Field

class MathProblem(Action):
    """Solve the math problem."""

    # Action will run concurrently
    __concurrent__ = True
    __groups__ = {"grpc": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve (e.g., '2x + 5')")

    async def pre(self, context: GRPCContext) -> None:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_response(self, message.text)`}</CodeBlock>

      <h4>Via Local Action Override</h4>
      <CodeBlock language="python">{`from pybotchi.grpc import GRPCAction, GRPCConnection, GRPCRemoteAction

class GeneralChat(GRPCAction):
    """Casual Generic Chat."""

    __grpc_connections__ = [GRPCConnection("testing", "localhost:50051", ["group-1"])]

    class MathProblem(GRPCRemoteAction):
        # This overrides the remote action configuration
        __concurrent__ = True`}</CodeBlock>

      <h3>Core Capabilities</h3>
      <div className="features-grid">
        {[
          {
            icon: "🧩",
            title: "Unified Graph Execution",
            body: "Remote Actions integrate seamlessly into your execution graph. Parent-child relationships, lifecycle hooks, and context flow work identically whether Actions run locally or remotely.",
          },
          {
            icon: "📈",
            title: "Targeted Resource Allocation",
            body: "Deploy compute-intensive Actions (RAG, embeddings, inference) on GPU servers, I/O-bound Actions (scraping, APIs) on separate workers, and coordination logic on lightweight clients.",
          },
          {
            icon: "🔁",
            title: "Zero-Overhead Synchronization",
            body: "Context updates propagate through persistent connections during execution. No polling loops, no sync jobs, no coordination overhead—just direct communication between client and server.",
          },
          {
            icon: "🧠",
            title: "Database-Free Architecture",
            body: "Eliminate the need for external databases or message queues solely for state coordination. Context syncs directly through gRPC connections, simplifying your infrastructure.",
          },
          {
            icon: "⚡",
            title: "Concurrent Remote Execution",
            body: "Execute multiple remote Actions in parallel across different servers. Enable __concurrent__ for true distributed parallel processing with automatic context aggregation.",
          },
          {
            icon: "🛠️",
            title: "Complete Customization",
            body: "Override connection behavior, authentication flow, context propagation rules, and execution lifecycle. Adapt gRPC integration to match your security, networking, and architectural requirements.",
          },
        ].map(({ icon, title, body }) => (
          <div className="feature-card" key={title}>
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <h3>When to Use gRPC</h3>
      <ul>
        <li>
          <strong>Resource-intensive Actions:</strong> RAG pipelines, vector
          searches, model inference, or long-running computations that benefit
          from dedicated hardware.
        </li>
        <li>
          <strong>Resource isolation:</strong> Separate CPU/GPU/memory
          allocation per Action group to prevent resource contention and improve
          reliability.
        </li>
        <li>
          <strong>Horizontal scaling:</strong> Deploy multiple servers hosting
          specialized Action groups, with automatic load distribution across
          instances.
        </li>
        <li>
          <strong>Team independence:</strong> Different teams deploy and scale
          their Actions independently without coordinating deployments or
          risking graph breakage.
        </li>
        <li>
          <strong>Cost optimization:</strong> Run expensive operations on spot
          instances or specialized hardware only when needed.
        </li>
        <li>
          <strong>Fault isolation:</strong> Contain failures to specific Action
          groups—a crashed remote Action doesn&apos;t take down your entire
          system.
        </li>
      </ul>

      <Note>
        <strong>Design principle:</strong> Use gRPC when you need distributed
        execution without the complexity of message queues, state databases, or
        coordination services. PyBotchi handles the hard parts—you just deploy
        Actions where they make sense.
      </Note>

      <h3>Complete Example</h3>
      <p>
        This example demonstrates a distributed setup with nested gRPC
        connections, concurrent execution, and bidirectional context
        synchronization.
      </p>

      <Collapsible
        summary={
          <>
            <strong>server.py</strong> — Remote Action Definitions
          </>
        }
      >
        <CodeBlock language="python">{SERVER_PY}</CodeBlock>
      </Collapsible>

      <Collapsible
        summary={
          <>
            <strong>client.py</strong> — Local Action with gRPC Connections
          </>
        }
      >
        <CodeBlock language="python">{CLIENT_PY}</CodeBlock>
      </Collapsible>

      <h3>Running the Example</h3>

      <h4>Start the gRPC Server</h4>
      <CodeBlock language="bash">pybotchi-grpc server.py</CodeBlock>

      <Collapsible summary="Server Output">
        <CodeBlock language="bash">{SERVER_OUTPUT}</CodeBlock>
      </Collapsible>

      <h4>Run the Client</h4>
      <CodeBlock language="bash">python3 client.py</CodeBlock>

      <Collapsible summary="Client Output — Execution Flow">
        <CodeBlock language="bash">{CLIENT_FLOW}</CodeBlock>
      </Collapsible>

      <Collapsible summary="Mermaid Graph Output">
        <CodeBlock language="bash">{MERMAID_OUTPUT}</CodeBlock>
      </Collapsible>

      <h3>Execution Graph Visualization</h3>
      <img
        className="content-img"
        src="assets/grpc.png"
        alt="Distributed gRPC execution graph showing local and remote Actions with concurrent execution paths"
      />

      <div className="highlight-box">
        <h3>What This Example Demonstrates</h3>
        <ul>
          <li>
            <strong>Nested gRPC connections:</strong>{" "}
            <code>JokeWithStoryTelling</code> connects to a second group of
            remote Actions
          </li>
          <li>
            <strong>Concurrent execution:</strong> <code>RequestValidator</code>
            , <code>Joke</code>, and <code>StoryTelling</code> run in parallel
          </li>
          <li>
            <strong>Bidirectional sync:</strong> Messages added on the server
            automatically appear in client context
          </li>
          <li>
            <strong>Usage tracking:</strong> Token usage from remote executions
            aggregates in the final output
          </li>
          <li>
            <strong>Action overrides:</strong> <code>MathProblem</code> is
            overridden locally to add custom pre-execution logic
          </li>
        </ul>
      </div>
    </>
  );
}
