import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'
import Collapsible from '../components/Collapsible'

const SERVER_STANDALONE = `from os import getenv

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pydantic import Field
from uvicorn import run

from pybotchi import Action, ActionReturn, ChatRole, Context, LLM
from pybotchi.mcp import build_mcp_app

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

    __groups__ = {"mcp": {"group-1"}}

    equation: str = Field(description="The mathematical equation to solve (e.g., '2x + 5')")

    async def pre(self, context: Context) -> ActionReturn:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Solve \`{self.equation}\`")
        await context.add_usage(self, context.llm.model_name, message.usage_metadata)
        await context.add_response(self, message.text)
        return ActionReturn.GO


class Translation(Action):
    """Translate to specific language."""

    __groups__ = {"mcp": {"group-1"}}

    message: str = Field(description="The text content to be translated.")
    language: str = Field(description="The ISO code or name of the target language.")

    async def pre(self, context: Context) -> ActionReturn:
        """Execute pre process."""
        message = await context.llm.ainvoke(f"Translate \`{self.message}\` to {self.language}")
        await context.add_usage(self, context.llm.model_name, message.usage_metadata)
        await context.add_response(self, message.text)
        return ActionReturn.GO


class JokeWithStoryTelling(Action):
    """Tell Joke or Story."""

    __groups__ = {"mcp": {"group-1", "group-2"}}

    query: str

    async def pre(self, context: Context) -> ActionReturn:
        """Execute pre process."""
        await context.add_message(ChatRole.USER, self.query)
        return ActionReturn.GO

    class Joke(Action):
        """Generate a joke."""

        __concurrent__ = True

        async def pre(self, context: Context) -> ActionReturn:
            """Execute pre process."""
            message = await context.llm.ainvoke("generate very short joke")
            await context.add_usage(self, context.llm.model_name, message.usage_metadata)
            await context.add_response(self, message.text)
            return ActionReturn.GO

    class StoryTelling(Action):
        """Tell a story."""

        __concurrent__ = True

        async def pre(self, context: Context) -> ActionReturn:
            """Execute pre process."""
            message = await context.llm.ainvoke("generate a very short story")
            await context.add_usage(self, context.llm.model_name, message.usage_metadata)
            await context.add_response(self, message.text)
            return ActionReturn.GO

    async def post(self, context: Context) -> ActionReturn:
        """Execute post process."""
        message = await context.llm.ainvoke(context.prompts)
        await context.add_usage(self, context.llm.model_name, message.usage_metadata, "combine")
        await context.add_message(ChatRole.ASSISTANT, message.text)
        return ActionReturn.END


# SSE paths /group-1/sse & /group-2/sse
# Streamable HTTP paths /group-1/mcp & /group-2/mcp
app = build_mcp_app(transport="streamable-http")

if __name__ == "__main__":
    run(
        app,
        host="127.0.0.1",
        port=8000,
        log_level="info",
    )`

const SERVER_MOUNTED = `from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI

from pybotchi.mcp import mount_mcp_app

# ... (same Action definitions as above) ...

@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
    """Override life cycle."""
    async with mount_mcp_app(app, transport="streamable-http"):
        yield


app = FastAPI(lifespan=lifespan)
if __name__ == "__main__":
    run(app, host="127.0.0.1", port=8000, log_level="info")`

const CLIENT_PY = `from asyncio import run
from json import dumps
from os import getenv

from dotenv import load_dotenv

from langchain_openai import AzureChatOpenAI

from pybotchi import ActionReturn, ChatRole, LLM
from pybotchi.mcp import MCPAction, MCPConnection, MCPContext, MCPIntegration, graph

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


class GeneralChat(MCPAction):
    """Casual Generic Chat."""

    __mcp_connections__ = [MCPConnection("testing", "SHTTP", "http://localhost:8000/group-1/mcp")]

    async def pre_mcp(self, context: MCPContext) -> ActionReturn:
        """Execute pre mcp execution."""
        print("Trigger anything here before mcp client connection")
        print("Build context.integrations['testing']['config']")
        print("Refresh tokens")
        return ActionReturn.GO


async def test() -> None:
    """Chat."""
    integrations: dict[str, MCPIntegration] = {"testing": {}}
    context = MCPContext(
        prompts=[
            {"role": ChatRole.SYSTEM, "content": ""},
            {"role": ChatRole.USER, "content": "What is 4 x 4 and what is the english of \`Kamusta?\`"},
        ],
        integrations=integrations,
    )
    action, result = await context.start(GeneralChat)
    print(dumps(context.prompts, indent=4))
    print(dumps(action.serialize(), indent=4))

    general_chat_graph = await graph(GeneralChat, {"IgnoredAction": False}, integrations)
    print(general_chat_graph.flowchart())


run(test())`

const CLAUDE_DESKTOP = `{
  "mcpServers": {
    "pybotchi-tools": {
      "command": "npx",
      "args": ["mcp-remote", "http://localhost:8000/group-1/mcp"]
    }
  }
}`

export default function MCP() {
  return (
    <>
      <h2>MCP (Model Context Protocol)</h2>
      <p>
        PyBotchi&apos;s <strong>MCP support</strong> enables seamless integration with the{' '}
        <strong>Model Context Protocol</strong>, allowing your Actions to function as MCP servers
        that can be consumed by any MCP-compatible client. This lets you expose your agent
        capabilities as standardized tools while maintaining PyBotchi&apos;s powerful orchestration
        features.
      </p>

      <Note>
        <strong>Key concept:</strong> PyBotchi Actions can serve as MCP tools, bridging the gap
        between PyBotchi&apos;s agent architecture and the broader MCP ecosystem. Your Actions
        become discoverable, callable tools for any MCP client.
      </Note>

      <h3>Dual-Mode Architecture</h3>
      <p>PyBotchi supports MCP in two complementary ways:</p>
      <ul>
        <li>
          <strong>MCP Server Mode:</strong> Expose your Actions as MCP tools that can be discovered
          and invoked by external MCP clients (Claude Desktop, IDEs, etc.)
        </li>
        <li>
          <strong>MCP Client Mode:</strong> Connect to external MCP servers and integrate their
          tools as child Actions within your PyBotchi orchestration graph
        </li>
      </ul>

      <div className="highlight-box">
        <h3>Why MCP Integration Matters</h3>
        <p>
          The Model Context Protocol is rapidly becoming the standard for AI tool integration. By
          supporting MCP, PyBotchi Actions can be consumed by any MCP-compatible application while
          maintaining all the benefits of PyBotchi&apos;s lifecycle management, context
          synchronization, and orchestration patterns.
        </p>
        <p>
          This means your carefully crafted agent workflows can be exposed as simple tools to
          external systems, or you can incorporate external MCP tools into your complex multi-agent
          orchestrations.
        </p>
      </div>

      <h3>Transport Protocols</h3>
      <p>PyBotchi MCP servers support multiple transport mechanisms:</p>
      <ul>
        <li>
          <strong>Server-Sent Events (SSE):</strong> Real-time streaming protocol ideal for
          long-running operations and progressive updates
        </li>
        <li>
          <strong>Streamable HTTP (SHTTP):</strong> HTTP-based protocol for simpler integration
          with existing web infrastructure
        </li>
      </ul>

      <h3>Core Capabilities</h3>
      <div className="features-grid">
        {[
          { icon: '🔌', title: 'Standard Protocol Support', body: 'Full compatibility with MCP specification. Your Actions automatically generate proper tool schemas and handle the complete request/response cycle.' },
          { icon: '🎯', title: 'Group-Based Organization', body: 'Organize Actions into logical groups with separate MCP endpoints. Each group exposes only its designated Actions, enabling fine-grained access control.' },
          { icon: '🔄', title: 'Bidirectional Integration', body: 'Serve your Actions as MCP tools OR consume external MCP servers as child Actions. Mix and match based on your architecture needs.' },
          { icon: '⚡', title: 'Concurrent Execution', body: 'MCP Actions support the same concurrent execution patterns as local Actions. Enable __concurrent__ for parallel processing across MCP boundaries.' },
          { icon: '🏗️', title: 'FastAPI Integration', body: 'Mount MCP endpoints directly to existing FastAPI applications or run standalone with Starlette. Integrate seamlessly with your current web infrastructure.' },
          { icon: '🛠️', title: 'Complete Lifecycle Control', body: 'All PyBotchi lifecycle hooks work with MCP Actions. Use pre_mcp for authentication, override context propagation, and maintain full control.' },
        ].map(({ icon, title, body }) => (
          <div className="feature-card" key={title}>
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </div>

      <h3>When to Use MCP</h3>
      <ul>
        <li><strong>External tool exposure:</strong> Make your PyBotchi agents available to Claude Desktop, IDEs, or other MCP-compatible applications.</li>
        <li><strong>Third-party integration:</strong> Consume tools from external MCP servers (Brave Search, file systems, databases) within your PyBotchi orchestration.</li>
        <li><strong>Ecosystem participation:</strong> Contribute your specialized agents to the growing MCP ecosystem while maintaining PyBotchi&apos;s advanced features.</li>
        <li><strong>Standardized APIs:</strong> Provide a standard interface to your agents without sacrificing PyBotchi&apos;s orchestration capabilities.</li>
        <li><strong>Hybrid architectures:</strong> Combine PyBotchi&apos;s orchestration with MCP&apos;s broad ecosystem support for maximum flexibility.</li>
      </ul>

      <Note>
        <strong>Design principle:</strong> Use MCP when you need standardized tool integration
        with the broader AI ecosystem while maintaining PyBotchi&apos;s powerful orchestration
        features.
      </Note>

      <h3>Complete Example</h3>
      <p>
        This example demonstrates both MCP server and client modes, showing how to expose Actions
        as MCP tools and consume them from a PyBotchi client.
      </p>

      <Collapsible summary={<><strong>server.py (standalone)</strong> — MCP Server (Exposing Actions as Tools)</>}>
        <CodeBlock language="python">{SERVER_STANDALONE}</CodeBlock>
      </Collapsible>

      <Collapsible summary={<><strong>server.py (mounted)</strong> — Alternative: Mount to Existing FastAPI App</>}>
        <CodeBlock language="python">{SERVER_MOUNTED}</CodeBlock>
      </Collapsible>

      <Collapsible summary={<><strong>client.py</strong> — MCP Client (Consuming MCP Tools)</>}>
        <CodeBlock language="python">{CLIENT_PY}</CodeBlock>
      </Collapsible>

      <h3>Running the Example</h3>

      <h4>Start the MCP Server</h4>
      <CodeBlock language="bash">python3 server.py</CodeBlock>

      <Collapsible summary="Server Output">
        <CodeBlock language="bash">{`INFO:     Started server process [642763]
INFO:     Waiting for application startup.
INFO:     Application startup complete.
INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)`}</CodeBlock>
      </Collapsible>

      <h4>Run the Client</h4>
      <CodeBlock language="bash">python3 client.py</CodeBlock>

      <Collapsible summary="Client Output — Execution Flow">
        <CodeBlock language="bash">{`Trigger anything here before mcp client connection
Build context.integrations['testing']['config']
Refresh tokens
etc ...`}</CodeBlock>
      </Collapsible>

      <h3>Execution Graph Visualization</h3>
      <img
        className="content-img"
        src="assets/mcp.png"
        alt="Distributed MCP execution graph showing seamless orchestration of local and remote Tools with concurrent execution paths."
      />

      <h3>MCP Endpoints Structure</h3>
      <p>PyBotchi automatically generates MCP endpoints based on your Action groups:</p>
      <ul>
        <li><code>/&lt;group-name&gt;/mcp</code> — Streamable HTTP endpoint for the group</li>
        <li><code>/&lt;group-name&gt;/sse</code> — Server-Sent Events endpoint for the group</li>
      </ul>
      <p>
        Each endpoint exposes only the Actions assigned to that group via <code>__groups__</code>,
        enabling fine-grained access control and logical organization.
      </p>

      <div className="highlight-box">
        <h3>What This Example Demonstrates</h3>
        <ul>
          <li><strong>MCP server setup:</strong> Actions are automatically exposed as MCP tools with proper schemas</li>
          <li><strong>Group organization:</strong> Actions are organized into logical groups with separate endpoints</li>
          <li><strong>Client integration:</strong> PyBotchi client consumes MCP tools as if they were local Actions</li>
          <li><strong>Nested Actions:</strong> <code>JokeWithStoryTelling</code> contains concurrent child Actions</li>
          <li><strong>Lifecycle hooks:</strong> <code>pre_mcp</code> enables authentication and configuration before connection</li>
          <li><strong>Transport flexibility:</strong> Support for both SSE and Streamable HTTP transports</li>
        </ul>
      </div>

      <h3>Using MCP with Claude Desktop</h3>
      <p>
        Your PyBotchi MCP server can be consumed by Claude Desktop or any other MCP-compatible
        client. Simply configure the client to connect to your server&apos;s MCP endpoint:
      </p>
      <CodeBlock language="json">{CLAUDE_DESKTOP}</CodeBlock>
    </>
  )
}
