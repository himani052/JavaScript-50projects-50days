 let panels = document.querySelectorAll('.panel');

console.log(panels);

panels.forEach((panel) => {

    panel.addEventListener('click', () => {
        console.log('click !');

        removeActiveClasses();
        panel.classList.add("active");

    });

});

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}