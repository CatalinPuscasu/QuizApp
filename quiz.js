let button1 = document.getElementById('nextQuestion');
// console.log(question1);

let question2 = document.querySelector('.intrebare-2');
// console.log(question2);

button1.addEventListener('click', function (event) {
event.preventDefault();
let show = document.querySelector('.intrebare-2');
show.classList.remove('intrebare-2');
});

// trebuie cumbva sa sterg prima intrebare cand apasa pe butonul urmatoarea intrebare

// question2.addEventListener('click', function () {
// goAway =document.querySelector('.intrebare1');
// goAway.parentElement.removechild(goAway);
// });