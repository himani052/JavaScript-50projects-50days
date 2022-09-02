//Create all elements (progress bar, bouttons, cercles)
const progress = document.getElementById('progress');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');

let activeButton = 1;

//increment a counter when the next btn is clicked
next.addEventListener('click', () => {
    activeButton++;

    if(activeButton > circles.length){
        activeButton = circles.length;
    }
    update();
    //console.log(activeButton);
});

//Decrease this counter when the previews button is pressed
prev.addEventListener('click', () => {
    activeButton--;

    if(activeButton < 1){
        activeButton = 1;
    }
    update();
    //console.log(activeButton);
});


//If the circle button index is = to the counter, add the active class
function update(){
    circles.forEach((circle, idx) => {
        if(idx < activeButton){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    })

    //select the active button
    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    //Disable button previous and Next
    if(activeButton === 1){
        prev.disabled = true;
    }else if(activeButton === circles.length){
        next.disabled = true;
    }else {
        prev.disabled = false;
        next.disabled = false;
    }
}

