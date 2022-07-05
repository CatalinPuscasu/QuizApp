let quizContainer = document.querySelector('.quiz-container');
let submit = document.getElementById('submit');
let resultContainer = document.querySelector('.rezultate');


// to create the next question button inside the answers div
let nextQuestion = null;
nextQuestion = nextQuestion === null ? document.createElement('button') : nextQuestion;
nextQuestion.classList.add('nextQuestion');

// list of questions

 let questions = [
    {
      question : "What is PHP?",
      answers : {
        a : 'It is a programming language for the back-end!',
        b : 'Some acronym, I dunno',
        c : 'It is one of those extensions in many sites...'
      },
      correctAnswer : 'a'
    },
     
    {
      question : 'Javascript was invented by :',
      answers : {
        a : 'Brendan Eich',
        b : 'Steve Jobs',
        c : 'Bill Gates'
      },
      correctAnswer : 'a'

    },
    {
      question : 'What does I.T. stand for?',
      answers : {
        a : 'Informations and Transports',
        b : 'Information Technology',
        c : 'Technical Info'
      },
      correctAnswer : 'b'

    },
   ];


function createQuiz (questions, quizContainer, resultContainer, submit) {



 function showQuestions (questions, quizContainer) {
  
  let questionsOutput = [];
  let answers;

  for (let i = 0; i < questions.length; i++) {

     answers = [];

     for (letter in questions[i].answers) {

        answers.push(
          '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
     }
     questionsOutput.push('<div class="question">' + questions[i].question + '</div>' + 
     '<div class="answers">' + answers.join('') + '</div>' + '<button id="nextQuestion">To the next question! </button>'
     );  
  }

  quizContainer.innerHTML = questionsOutput.join('');
  
 } 
    
   function showResults (questions, quizContainer, resultContainer) {

     let answersContainer = document.querySelectorAll('.answers');

     let userAnswers = '';
     let numCorrect = 0;

     for (let i = 0; i < questions.length; i++) {

      userAnswers = (answersContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;

      if (userAnswers === questions[i].correctAnswer) {
      
        numCorrect ++;

        answersContainer[i].style.color = 'lightgreen';

      } else {

        answersContainer[i].style.color ='red';
      }
    }

    resultContainer.innerHTML = numCorrect + ' out of ' + questions.length;

   }

   showQuestions(questions, quizContainer);

   submit.onclick = function () {
      
    showResults(questions, quizContainer, resultContainer);

   }


}

createQuiz(questions, quizContainer, resultContainer, submit);

let restartButton = document.getElementById('restart');

const refreshPage = () => {

  location.reload();
}

restartButton.addEventListener('click', refreshPage);













