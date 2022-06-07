let button1 = document.getElementById('nextQuestion');



button1.addEventListener('click', function (event) {
event.preventDefault();
let show = document.querySelector('.intrebare-2');
show.classList.remove('intrebare-2');
show.classList.add('intrebare-2_active');
show.scrollIntoView({behavior : "smooth"});
});

// de folosit mai tarziu

// let submit = document.getElementById('submit');

// submit.addEventListener('click', function() {
//     let goodAnswers = 4;
//    alert(`You have completed the test with ${goodAnswers} answers!`);

// })

