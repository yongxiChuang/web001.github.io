document.querySelector('img').onclick = function(){
    alert('Ouch! Stop poking me!');
}

var myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'image/_MG_3799.JPG'){
        myImage.setAttribute('src', 'image/_MG_3796.JPG');
    }
    else{
        myImage.setAttribute('src', 'image/_MG_3799.JPG');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName(){
    let myName = prompt("Please enter your name: ");
    if(!myName || myName === null){
        alert("Please enter again.");
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = "Hello, " + myName;
    }
}

/*
//初始化設定
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = "love " + storedName;
}
*/

myButton.onclick = function(){
    setUserName();
}





