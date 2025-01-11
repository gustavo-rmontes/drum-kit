btnList = document.querySelectorAll(".drum");

for(var i=0; i < btnList.length; i++){
    btnList[i].addEventListener("click", function(){
        makeDrumSound(this.innerHTML);
        drumAnimation(this.innerHTML);
    });
}

document.addEventListener("keydown", function(e) {
    makeDrumSound(e.key);
    drumAnimation(e.key);
});

function makeDrumSound(key){
    var audio;
    switch (key) {
        case "w":
            audio = new Audio('sounds/snare.mp3');
            break;
        case "a":
            audio = new Audio('sounds/kick-bass.mp3');
            break;
        case "s":
            audio = new Audio('sounds/crash.mp3');
            break;
        case "d":
            audio = new Audio('sounds/tom-1.mp3');
            break;
        case "j":
            audio = new Audio('sounds/tom-2.mp3');
            break;
        case "k":
            audio = new Audio('sounds/tom-3.mp3');
            break;
        case "l":
            audio = new Audio('sounds/tom-4.mp3');
            break;
        default:
            break;
    }
    audio.play();
}

function drumAnimation(key){
    var buttonPressed = document.querySelector("." + key);

    buttonPressed.classList.add("pressed");
    
    setTimeout(function(){
        buttonPressed.classList.remove("pressed");
    }, 150);
}