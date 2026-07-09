import CodeBlock from '../components/CodeBlock'
import Note from '../components/Note'

export default function ObjectOriented() {
  return (
    <>
      <h2>OOP-Driven Agent Customization</h2>
      <p>
        Customize your agent by utilizing <code>Object-Oriented Programming</code> practices
      </p>

      <h3 id="inheritance">Inheritance</h3>
      <h4>Overrides &amp; Extensions</h4>

      <CodeBlock language="python">{`from typing import ClassVar

from pybotchi import Action, graph

class A1(Action):
    """Doc 1."""

class A2(Action):
    """Doc 2."""

# Declare Agent with A1 & A2 as child Actions
class A0(Action):
    """Maid doc."""

    A1: ClassVar = A1
    A2: ClassVar = A2

    # OR
    # class A1(A1):
    #    pass
    # class A2(A2):
    #    pass

    # Additional Agents
    class A3(Action):
        """Doc 3."""

    class A4(Action):
        """Doc 4."""

        # override print method
        def print(self) -> None:
          """Print some value."""
          print("A0")

# Modify A0 docstring
class B0(A0):
    """Modified Main doc."""

    # replace A1
    class A1(Action):
        """Different Doc 1."""

    # extend A2 to add new child agent and replace docstring
    class A2(A0.A2):
        """Modified Doc 2."""

        class A2Child1(Action):
            """Child Doc 1."""

    # remove A3
    A3: ClassVar = None

    # override print method
    def print(self) -> None:
        """Print some value."""
        print("B0")

# Not recommended but it's supported
# Remove A4 from A0 and this will propagate to every derived classes
A0.remove_child("A4")`}</CodeBlock>

      <br />
      <img className="content-img2" src="assets/mermaid2.png" alt="mermaid2.png" />
      <img className="content-img2" src="assets/mermaid3.png" alt="mermaid3.png" />

      <h3>Abstractions &amp; Polymorphism</h3>
      <p>
        Though not commonly used in python, incorporating this approach significantly improves
        long-term design quality and maintainability.
      </p>

      <CodeBlock language="python">{`from abc import ABC, abstractmethod

from aiofiles import open as aio_open

from pybotchi import Action

class FileUpdateAction(Action, ABC):
    """File Update Abstract Action."""

    @abstractmethod
    async def read_file(self, path: str) -> str:
        """Read file by path."""
        pass

class FileUpdate(FileUpdateAction):
    """File Update Abstract Action."""

    async def read_file(self, path: str) -> str:
        """Read file by path."""
        with open(path, 'r') as f:
            return f.read()


class AsyncFileUpdate(FileUpdateAction):
    """File Update Abstract Action."""

    async def read_file(self, path: str) -> str:
        """Read file by path."""
        async with aio_open(path, 'r') as f:
            return await f.read()`}</CodeBlock>

      <h3>Encapsulation</h3>
      <Note>
        <strong>Note:</strong> Python doesn&apos;t enforce <strong>true</strong> encapsulation
        (like using keywords such as private in other languages), but you can use Pydantic&apos;s{' '}
        <code>PrivateAttr</code> feature. This allows you to hide internal attributes from the
        model&apos;s standard output and serialization.
      </Note>

      <CodeBlock language="python">{`from pybotchi import Action

from pydantic import Field, PrivateAttr

class Agent(Action):
    """Agent."""
    value: str = Field(description="some value")
    _private_value: str = PrivateAttr(default="some value")`}</CodeBlock>
    </>
  )
}
