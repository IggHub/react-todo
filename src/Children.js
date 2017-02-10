import React from 'react';

class ChildrenApp extends React.Component {
  render(){
    return (
      <ParentApp>
        <div className="childA"></div>
        <div className="childB"></div>
        <div className="childC"></div>
      </ParentApp>
    )
  }
}

class ParentApp extends React.Component {
  render(){
    console.log('before', this.props.children)
    let items = React.Children.toArray(this.props.children);
//    let items = React.Children
//      .forEach(this.props.children, child => console.log(child.props.className))
//    let items = React.Children
//      .only(this.props.children);
    console.log(items);
    return null
  }
}

export default ChildrenApp;
