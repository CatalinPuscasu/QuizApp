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
quizContainer.style.Height = '34px';
quizContainer.style.Width = '34px';
quizContainer.classList.add('quiz-container');

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

function displayQuestions ()  {
   let intrebare1 = '<p>' + questions[0].intrebare + '</p>';
   let raspunsuri1 = '<input[type = radio]>' + questions[0].raspunsuri.text + '</input>';
   quizContainer.innerHTML = intrebare1;
  }

  displayQuestions();











// de folosit mai tarziu

// let submit = document.getElementById('submit');

// submit.addEventListener('click', function() {
//     let goodAnswers = 4;
//    alert(`You have completed the test with ${goodAnswers} answers!`);

// })

