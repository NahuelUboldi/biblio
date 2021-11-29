/*
A stateless functional component is any function you write 
which accepts props and returns JSX. A stateless component, 
on the other hand, is a class that extends React.Component, 
but does not use internal state (covered in the next challenge). 
Finally, a stateful component is a class component that 
does maintain its own internal state. You may see stateful 
components referred to simply as components or React 
components.


*/


//Stateless Functional Component
// is any function you write which accepts props and returns JSX
const DemoComponent = function() {
    return (
      <div className='customClass' />
    );
  };


//React ES6 class Component
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
          <Fruits />
          <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  let targetNode = document.querySelector("#challenge-node");
  ReactDOM.render(<TypesOfFood />,targetNode);

  //Pass Props to a Stateless Functional Component
  const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date} </p>
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()} />
        { /* Change code above this line */ }
      </div>
    );
  }
};

//set the type of data required
Items.propTypes = {
    quantity: PropTypes.number.isRequired
    }
//set default props
ShoppingCart.defaultProps = {
  items: 0
};