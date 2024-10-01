document.addEventListener("DOMContentLoaded",function(){
let singupbtn = document.getElementById("singupbtn");
let singinbtn = document.getElementById("singinbtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
singinbtn.onclick = function(){
    nameField.style.maxHeight=0;
    title.innerHTML="Sing In";
    singupbtn.classList.add("disable");
    singinbtn.classList.remove("disable");
}

singupbtn.onclick = function(){
    nameField.style.maxHeight="60px";
    title.innerHTML="Sing up";
    singupbtn.classList.remove("disable");
    singinbtn.classList.add("disable");
}
});