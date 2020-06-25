// Why use hooks and functional components?

// 1.  Less and cleaner code

// Written as a class

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Title</h1>
        <h4>Subtitle</h4>
      </div>
    );
  }
}

// Written as a function Component

const Header = () => {
  <div>
    <h1>Title</h1>
    <h4>Subtitle</h4>
  </div>;
};

// 2.  Hierarchy and stateful logic:
// "React doesn't offer a way to "attach" reusable behavior to a component.
