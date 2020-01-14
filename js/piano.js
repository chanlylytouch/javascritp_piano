const WHITE_KEYS = ['a','s','d','f','g','h','j'];
const BLACK_KEYS = ['z','x','c','v','b'];
// console.log(keys);
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click',() => onPlayPiano(key))
});

const whitKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
document.addEventListener('keydown', event => {
    const keybord = event.key;
    const whiteIndex = WHITE_KEYS.indexOf(keybord);
    const blackIndex = BLACK_KEYS.indexOf(keybord);
    // console.log(whiteIndex);
    if(!event.repeat){
        if(whiteIndex > -1){
            onPlayPiano(whitKeys[whiteIndex]);
        }
        if(blackIndex > -1){
            onPlayPiano(blackKeys[blackIndex]);
        }
    }
});
function onPlayPiano(key){
    const audio = document.getElementById(key.dataset.note);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("active");
    audio.addEventListener('ended',() => {
        key.classList.remove("active");
    })
}