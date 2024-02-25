var len = document.querySelectorAll(".drum").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buton = this.innerHTML;
        makesound(buton);
        anima(buton)
    });
}
document.addEventListener("keypress" , function(event){
    if(event.key == "c"){
        var d = new Audio("kick-bass.mp3");
        d.play();
    }
    makesound(event.key);
    anima(event.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;


        default:

            break;
    }
}
function anima(buttonpressed){
    var activebutton = document.querySelector("."+buttonpressed);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed"),100
    });
}