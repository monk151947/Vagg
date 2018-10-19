class Counter extends React.Component {
constructor(props) {
  super(props);
  this.handleOne = this.handleOne.bind(this);
  this.handleMinus = this.handleMinus.bind(this);
  this.handleReset = this.handleReset.bind(this);
  this.state = {
    count: props.count
  };
}
handleOne(){
  this.setState((prevState)=> {
    return {
      count: prevState.count + 1
    };
  });
}
handleMinus(){
  this.setState((prevState)=> {
    return {
      count: prevState.count - 1
    };
  });
}
handleReset(){
  this.setState(()=> {
    return {
      count: 0
    };
  });
}
  render() {
    return(
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.handleOne}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

ReactDOM.render(<Counter count={20}/>, document.getElementById('app'));
