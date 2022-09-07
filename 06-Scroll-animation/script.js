const boxes = document.querySelectorAll(".content");

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes(){
    let pointer = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {
       const boxTop = box.getBoundingClientRect().top

       if(boxTop < pointer){
           box.classList.add("show");
       }else{
           box.classList.remove("show");
       }
    });
}