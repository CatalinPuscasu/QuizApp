// ---------- Scroll to next question------------

// let button1 = document.getElementById('nextQuestion');

// button1.addEventListener('click', function (event) {
// event.preventDefault();
// let show = document.querySelector('.intrebare-2');
// show.classList.remove('intrebare-2');
// show.classList.add('intrebare-2_active');
// show.scrollIntoView({behavior : "smooth"});
// });
// -----------------------------------

let quizContainer = document.querySelector('.quiz-container');

const questions = [
   question1 = {
    id : 1,
    intrebare : 'What is PHP?',
    raspunsuri : [
      {text : 'It is a backend language!'},
      {text : 'It is just an acronym...'}
    ],
    raspunsCorect : {text : 'It is a backend language!'},
     
   }
];

console.log(questions[0].intrebare);











// de folosit mai tarziu

// let submit = document.getElementById('submit');

// submit.addEventListener('click', function() {
//     let goodAnswers = 4;
//    alert(`You have completed the test with ${goodAnswers} answers!`);

// })

