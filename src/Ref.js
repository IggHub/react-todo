import React from 'react';

class RefApp extends React.Component {
  constructor(){
    super();
    this.state = {
      a: ''
    }
  }
  update(){
    this.setState({
      a: this.a.refs.input.value,
      b: this.refs.b.value
    })
  }
  render(){
    return(
      <div>
        <Input update={this.update.bind(this)} ref={component => this.a = component} /> {this.state.a}
        <hr />
        <input type="text" onChange={this.update.bind(this)} ref="b" />
        {this.state.b}
      </div>
    )
  }
}

class Input extends React.Component {
  render(){
    return (
      <div><input ref="input" type="text" onChange={this.props.update} /></div>
    )
  }
}

export default RefApp;
