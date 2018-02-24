import React, { Component } from 'react';
import './show.css';
import text2style from '../lib/textTostyle.js'
class page extends Component{
  constructor(props){
    super(props);
    this.animationIndex=1;
    this.selfupdate=false;
    this.pause=false;
    this.state={
      show:this.props.start
    }
    this.handleNext=this.handleNext.bind(this);
  }
  handleNext(event){
    if(this.animationIndex==this.els.length){
      (this.props.finish)&&(this.props.finish(this));
      var t=new text2style();
      var style;
        (this.props.addstyle)&&(style=t.createTag(this.props.children));
        (this.props.getstyle)&&(this.props.getstyle(style))
    }
    else{
      document.querySelector("#codepanel").scrollTop+=10;
      if(this.pause){return;}
      this.els[this.animationIndex].className=this.els[this.animationIndex].className+" showon";
      this.animationIndex++;
    }
  }
  stopAnimation(){
    this.pause=true;
  }
  playAnimation(){
    this.pause=false;
    this.els[this.animationIndex].className=this.els[this.animationIndex].className+" showon";
    this.animationIndex++;
  }
  initContent(){
    this.texts=[];
    this.els=[];
    var csspartlist={
      selector:"selector",
      123:"cssbegin",
      cssbegin:"key",
      key:"key",
      58:'vbegin',
      vbegin:'value',
      value:'value',
      59:'vend',
      vend:'key',
      125:'cssend'
    };
    var csspart='selector';
    for (var i = 0; i < this.props.children.length; i++) {

      if(this.props.addstyle){

        (csspartlist[this.props.children.charCodeAt(i)])?(csspart=csspartlist[this.props.children.charCodeAt(i)]):(csspart=csspartlist[csspart]);

       var e=(<span key={i} ref={(el)=>{el&&this.els.push(el);}} className={csspart} style={{whiteSpace:'pre'}} onAnimationEnd={this.handleNext}>{this.props.children[i]}</span>);
        }
      else{

      var e=(<span key={i} ref={(el)=>{el&&this.els.push(el);}} className='init' style={{whiteSpace:'pre'}} onAnimationEnd={this.handleNext}>{this.props.children[i]}</span>);
    }

      this.texts.push(e);
    }

  }
  fixClassName(){
    for (var i = 0; i < this.els.length; i++) {
      (this.els[i].className.search(/showon/)==-1)&&(this.els[i].className=this.els[i].className+' showon');
    }
  }
  startAnimation(){
    if(this.els[0].className.search(/showon/)!=-1){
      this.props.fix&&this.fixClassName();return;
    }
    this.els[0].className=this.els[0].className+" showon";
  }
  show(){
    this.setState({
      show:true
    });
  }
  componentDidMount() {

  this.props.gettarget(this);
    if(this.state.show){
   this.startAnimation();
 }

 }
 componentDidUpdate(){

(this.selfupdate)&&this.startAnimation();

 }
  render(){
if(this.state.show){
this.initContent();
this.selfupdate=true;
    return (<div>{this.texts}</div>);
}
else{
  return null;
}
  }
}

export default page;
