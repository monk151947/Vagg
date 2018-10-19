class IndisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteoptions = this.handleDeleteoptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: props.options
    };
  }
  handleDeleteoptions(){
    this.setState(()=>({ options: [] }));
  }
  handleDeleteOption(optionToremove){
    this.setState((prevState)=> ({
      options: prevState.options.filter((option)=> optionToremove !== option)
    }))
  }
  handleAddOption(option) {
    if (!option) {
      return 'Enter Valid value to add Item';
    } else if (this.state.options.indexOf(option) > -1 ){
      return 'This option is already exists';
    }

    this.setState((prevState)=>({options: prevState.options.concat(option)}));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  render (){
    const subtitle = 'Here we go for subtitle';

    return (
      <div>
      <Header subtitle={subtitle}/>
      <Action hasOptions={this.state.options.length > 0 } handlePick={this.handlePick}/>
      <Options options={this.state.options}
      handleDeleteoptions={this.handleDeleteoptions}
    handleDeleteOption={this.handleDeleteOption} />
      <AddOption
        handleAddOption={this.handleAddOption}
      />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h1>{props.subtitle}</h1>}
    </div>
  );
};

Header.defaultProps ={
  title: 'Indisionapp'
}
IndisionApp.defaultProps ={
  options: []
}
// class Header extends React.Component {
//   render () {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h1>{this.props.subtitle}</h1>
//       </div>
//     )
//   }
// }

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handlePick}
          disabled={!props.hasOptions}>What should I do?</button>
      </div>
    );
};

// class Action extends React.Component {
//   render () {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}>What should I do?</button>
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteoptions}>Remove All</button>
      {
        props.options.map((option) =>(
           <Option key={option}
             optionText={option}
             handleDeleteOption={props.handleDeleteOption}
           />

        ))
      }
    </div>
  );
}
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteoptions}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }

const Option = (props) =>{
  return (
    <div>
      {props.optionText}
      <button onClick={(e)=> {props.handleDeleteOption(props.optionText)}}
        >Remove</button>
    </div>
  );
}
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(()=>({ error }));
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option'></input>
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}
ReactDOM.render(<IndisionApp />, document.getElementById('app'));
