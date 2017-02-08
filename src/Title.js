import React from 'react';

class TitleApp extends React.Component {
  render(){
    return (
      <Title title="Hey You!" />
    )
  }
}

const Title = (props) => <h1>Title: {props.title}</h1>

/*Title.propTypes = {
  title(props, propName, component){
    if(!(propName in props)){
      return new Error('missing ${propName}')
    }
    if(props[propName].length < 6){
      return new Error('${propName} was too short')
    }
  }
}
*/
export default TitleApp;
