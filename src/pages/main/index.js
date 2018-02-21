import React, { Component } from 'react';
import Showtext from '../../components/showtextanimation.js';
import Tes from '../../components/pre.js';
import './css/main.css';
class page extends Component{
  constructor(props){
    super(props);
    this.state={
      classname:''
    }
    this.targets=[];
    this.index=-1;
    this.targetsR=[];
    this.indexR=-1;
    this.getTarget=this.getTarget.bind(this);
    this.getTargetR=this.getTargetR.bind(this);
    this.finish=this.finish.bind(this);
    this.finishR=this.finishR.bind(this);
    this.finishSV=this.finishSV.bind(this);
  }
  finish(){
    this.index++
    this.targets[this.index].show();

  }
  finishR(){
    this.indexR++
    this.targetsR[this.indexR].show();

  }
  finishSV(){
    this.rightelement.className='right';
    this.finish();
  }
  getTarget(target){
    this.targets.push(target);
  }
  getTargetR(target){
    this.targetsR.push(target);
  }

  render(){
    console.log();
    var s1,s2,s3,s4;
    if(navigator.userAgent.search(/Mobile/)!=-1){
      s1=`#codepanel {
      width:100%;
      height:100vw;
      overflow-Y:auto;
  }`;
      s2=`#codepanel {
      transform:rotateX(-10deg) translateZ(-100px);
}`
      s3=`#codepanel {
      position:relative;
      left:0;
}`
    }else{
      s1=`#codepanel {
      width:50%;
      height:45vw;
      overflow-Y:auto;
  }`;
      s2=`#codepanel {
      transform:rotateY(10deg) translateZ(-100px);
}`
      s3=`#codepanel {
      position:fixed;
      left:0;
}`
    }

    return (<div><div id="codepanel">

      <Showtext gettarget={this.getTarget} start={true} finish={this.finish} >{`/*
 *  感谢您打开这个网页.
 *  我是Ciwi,一名前端程序员.
*/

 /*  让我们从写代码开始吧...  */`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{`
* {
      transition: all .3s;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} >{`
/*
 *  现在背景看起来有点单调
 *  那我们来给它一点颜色吧...
*/`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{`body {
      background-color:rgba(0,43,54,1);
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{`#codepanel {
      color:white;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} >{`
/*  把代码区标识出来  */`}</Showtext>
      <Showtext gettarget={this.getTarget} finish={this.finish} addstyle={true} >{`#codepanel {
      border:1px solid white;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{s1}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} >{`
/*  加点3D效果,看起来有立体感些  */`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{`#app {
      perspective:1000px;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{s2}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{s3}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} >{`
/*  代码看起来有些难识别,让代码高亮  */`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{`.selector {
      color:orange;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finish} addstyle={true} >{`.key {
      color:#64D5EA;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}   finish={this.finish} addstyle={true} >{`.value {
      color:#BE84F2;
}`}</Showtext>
      <Showtext gettarget={this.getTarget}  finish={this.finishSV} >{`
/*  现在请允许我进行简单的自我介绍  */`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} >{`
/*  自我介绍现在看起来有些粗糙, 需要将它美化格式一下 */`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.right {
      padding:15px;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.separate-line{
display:none;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.resume-title{
      font-size: 1.5em;
      font-weight: bold;
      display:inline-block;
      border-bottom:1px solid black;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.personal-detail{
      margin:14px 0px;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.github-link{
      margin-top:14px;
      display:block;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.skill-ul{
      list-style-type: disc;
      padding-left:40px;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}  finish={this.finishR} addstyle={true} >{`.project-ul{
      list-style-type: decimal;
      padding-left:40px;
}`}</Showtext>
      <Showtext gettarget={this.getTargetR}   addstyle={true} >{`a{
      color:#ff4081;
      text-decoration: underline;
}`}</Showtext>

   </div>
<div ref={(el)=>{this.rightelement=el;}}>
      <h2 className="resume-title"><Showtext gettarget={this.getTarget} finish={this.finish}  >Ciwi</Showtext></h2>
      <div className="separate-line"><Showtext gettarget={this.getTarget} finish={this.finish}  >------</Showtext></div>
      <div className="personal-detail"><Showtext gettarget={this.getTarget} finish={this.finish}  >前端程序员</Showtext></div>
      <h2 className="resume-title"><Showtext gettarget={this.getTarget} finish={this.finish}  >技能</Showtext></h2>
      <div className="separate-line"><Showtext gettarget={this.getTarget} finish={this.finish}  >---------</Showtext></div>
      <ul className="skill-ul">
        <li><Showtext gettarget={this.getTarget} finish={this.finish}  >Vue.js</Showtext></li>
        <li><Showtext gettarget={this.getTarget} finish={this.finish}  >能使用React.js进行开发</Showtext></li>
        <li><Showtext gettarget={this.getTarget} finish={this.finish}  >能使用Webpack进行开发</Showtext></li>
        <li><Showtext gettarget={this.getTarget} finish={this.finish}  >能使用PHP进行开发</Showtext></li>
        <li><Showtext gettarget={this.getTarget} finish={this.finish}  >能使用Webpack进行开发</Showtext></li>
      </ul>
      <h2 className="resume-title"><Showtext gettarget={this.getTarget} finish={this.finish}  >相关项目</Showtext></h2>
      <div className="separate-line"><Showtext gettarget={this.getTarget} finish={this.finish}  >---------</Showtext></div>
      <ul className="project-ul">
        <li><a target="_blank" href="http://www.bluamore.com"><Showtext gettarget={this.getTarget} finish={this.finish}  >Bluamore</Showtext></a></li>
        <li><a target="_blank" href="http://www.gdace.com/opencart2.1/"><Showtext gettarget={this.getTarget} finish={this.finish}  >CrystalAce</Showtext></a></li>
        <li><a target="_blank" href="http://easyhome.applinzi.com"><Showtext gettarget={this.getTarget} finish={this.finish}  >Easyhome</Showtext></a></li>
        <li><a target="_blank" href="#"><Showtext gettarget={this.getTarget} finish={this.finish}  >React简历</Showtext></a></li>
        <li><a target="_blank" href="http://easyhome.applinzi.com/public/jx3/"><Showtext gettarget={this.getTarget} finish={this.finish}  >门派介绍(剑侠情缘网络版叁-H5同人征集大赛二等级作品)</Showtext></a></li>
      </ul>
      <h2 className="resume-title"><Showtext gettarget={this.getTarget} finish={this.finish}  >链接</Showtext></h2>
      <div className="separate-line"><Showtext gettarget={this.getTarget} finish={this.finish}  >---------</Showtext></div>
      <a target="_blank" href="https://github.com/ciwihg" className="github-link"><Showtext gettarget={this.getTarget} finish={this.finishR} >Github</Showtext></a>
      </div></div>);
  }
}

export default page;
