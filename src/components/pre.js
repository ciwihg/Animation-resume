import React, { Component } from 'react';
import Showtext from './showtextanimation.js';
class test extends Component{
  constructor(props){
    super(props);
  }
  render(){
    console.log(this.props.children.props.children.charCodeAt(7));
    return (<Showtext start={true} content={this.props.children.props.children}></Showtext>);
  }
}
 export default test;
