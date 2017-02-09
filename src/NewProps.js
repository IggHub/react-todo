import React from 'react';
import ReactDOM from 'react-dom';

class NewPropApp extends React.Component {
  constructor(){
    super();
    this.state = {
      increasing: false
    }
  }
  update(e){
    ReactDOM.render(<NewPropApp val={this.props.val + 1} />, document.getElementById('root'))
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      increasing: nextProps.val > this.props.val
    })
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextProps.val % 5 === 0;
  }
  componentDidUpdate(prevProps, prevState){
    console.log('prevProps:', prevProps.val);
    console.log(prevProps.val)
  }
  render(){
    console.log(this.state.increasing)
    return (
      <div>
        <button onClick={this.update.bind(this)}>{this.props.val}</button>
      </div>
    )
  }
}

NewPropApp.defaultProps = {
  val: 0
}


export default NewPropApp;
