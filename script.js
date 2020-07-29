var button=document.querySelector(".btn");
var colorList=["#f1f5f8","#f15025","red","green","rgba(133,122,200)"];
var main=document.querySelector(".main");
var change=document.querySelector("span");

main.style.backgroundColor=colorList[0];
change.innerHTML=colorList[0].toUpperCase()

button.addEventListener("click",function(){
    var n=Math.floor(Math.random()*colorList.length);
    main.style.backgroundColor=colorList[n];
    change.innerHTML=colorList[n].toUpperCase()


})