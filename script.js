const accordion = document.getElementsByClassName('Q-and-A-section');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
    });
}