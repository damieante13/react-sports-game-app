class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  //Method area
  //need to create acounter button function
  counterButton = (event) => {
    this.setState((state, props) => ({
      count: state.count + 1,
    }));
  };

  //render Area
  render() {
    return (
      <div id="App">
        <h1>React Block</h1>
        <button onClick={this.counterButton}>Click Me!</button>
        <BlockOne count={this.state.count} />
        <BlockTwo count={this.state.count} />
      </div>
    );
  }
}

function BlockOne(props) {
  if (props.count % 2 === 0) {
    return (
      <div>
        <h3>Block 1</h3>
        <div className="Blocks" id="red"></div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Block 1</h3>
        <div className="Blocks" id="weird"></div>
      </div>
    );
  }
}

function BlockTwo(props) {
  if (props.count % 2 === 0) {
    return (
      <div>
        <h3>Block 2</h3>
        <div className="Blocks" id="red"></div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>Block 2</h3>
        <div className="Blocks" id="yellow"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
