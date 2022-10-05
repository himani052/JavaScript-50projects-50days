const faqToggle = document.querySelectorAll('.faq-toggle');

console.log(faqToggle);

faqToggle.forEach((e) => {
    e.addEventListener('click', () => {
       e.parentNode.classList.toggle('active');
    });
})