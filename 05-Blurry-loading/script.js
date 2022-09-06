//Get all elements
const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let percentage = 0;

//call function blurrying every 30s
let num = setInterval(blurring, 30);

function blurring() {
    percentage++;

    if(percentage > 99){
        clearInterval(num);
    }

    loadText.innerText = `${percentage}%`;
    loadText.style.opacity = scale(percentage, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(percentage, 0,100, 30, 0)}px)`;
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}