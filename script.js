const cards = document.querySelectorAll('.panel');

cards.forEach(panel => {
    panel.addEventListener('click', function() {
        removeActiveClass();
        panel.classList.add('active');
    })
}) 

function removeActiveClass() {
    cards.forEach(panel =>{
        panel.classList.remove('active');
    })
}