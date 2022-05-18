
var myListItems=document.getElementsByTagName("li");
var i;
for(i=0;i<myListItems.length;i++){
var span=document.createElement("span");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
myListItems[i].appendChild(span);
}

function newItemsAdded(){
   var li=document.createElement("li");
   var inputValue=document.getElementById("myList").value;
   var t=document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue ===""){
       alert("You must Add Items");
   }else{
     document.getElementById("myul").appendChild(li);
}
document.getElementById("myList").value="";
var span=document.createElement("span");
var txt=document.createTextNode("\u00D7");
span.className="close";
span.appendChild(txt);
li.appendChild(span);
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
     }
}
var list=document.querySelectorAll("li");
for(i=0;i<list.length;i++){
    list[i].onclick=function(){
        this.classList.toggle("done");
     }
};
}
var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
};


var list=document.querySelectorAll("li");
for(i=0;i<list.length;i++){
    list[i].onclick=function(){
        this.classList.toggle("done");
     }
};



