class Texttostyle {
  constructor(){

  }
  createTag(c){
    var style=document.createElement("style");
   style.innerHTML=c;
   document.head.appendChild(style);
  }
}

export default Texttostyle;
