import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleApp extends React.Component{
  constructor(){
    super();
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      val: this.state.val + 1
    })
  }
  componentWillMount(){
    console.log('componentWillMount');
    this.setState({
      m: 2
    })
  }
  componentDidMount(){
    console.log('componentDidMount!');
    this.inc= setInterval(this.update, 1000)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
    clearInterval(this.inc);
  }
  render(){
    console.log('render!');
    return(
      <button onClick={this.update}>Val: {this.state.val * this.state.m}</button>
    )
  }
}

class Wrapper extends React.Component{
  mount(){
    ReactDOM.render(<LifeCycleApp />, document.getElementById('a'));
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }
  render(){
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Un-Mount</button>
        <div id="a"></div>
      </div>
    )
  }
}

export default Wrapper;
