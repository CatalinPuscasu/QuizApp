let button1 = document.getElementById('nextQuestion');



button1.addEventListener('click', function (event) {
event.preventDefault();
let show = document.querySelector('.intrebare-2');
show.classList.remove('intrebare-2');
show.classList.add('intrebare-2_active');
show.scrollIntoView({behavior : "smooth"});
});

