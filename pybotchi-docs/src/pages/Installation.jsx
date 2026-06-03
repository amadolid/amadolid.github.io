import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function Installation() {
  return (
    <>
      <h2>Installation</h2>
      <p>PyBotchi requires Python 3.12 or higher. Install using pip:</p>

      <CodeBlock language="bash">pip install pybotchi</CodeBlock>

      <h3>Optional Dependencies</h3>
      <p>For additional features, install optional dependencies:</p>

      <CodeBlock language="bash">{`# With grpc support
pip install pybotchi[grpc]

# With mcp support
pip install pybotchi[mcp]

# With both
pip install pybotchi[grpc,mcp]`}</CodeBlock>

      <h3>From Source</h3>
      <p>To install the latest development version:</p>

      <CodeBlock language="bash">{`git clone https://github.com/amadolid/pybotchi.git
cd pybotchi
pip install -e .
# pip install -e .[grpc]
# pip install -e .[mcp]
# pip install -e .[grpc,mcp]`}</CodeBlock>

      <Note>
        <strong>Note:</strong> It&apos;s recommended to use a virtual environment to avoid
        dependency conflicts.
      </Note>
    </>
  )
}
