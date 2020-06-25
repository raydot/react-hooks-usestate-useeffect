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

/**
 * Consider three components with every one containing a form and every form
 * containing a name field.  The value of the input is stored in the state
 * of the components.  A hook can be used to replicate this functionality
 * as many times as is needed!
 */

// 3.  Class-based components are complex! (No crying in code.)
// 4.  Sweet experience for developers that move up to down.  If you are the
//     sort of developer who likes to do the big stuff first, hooks are for
//        you!
