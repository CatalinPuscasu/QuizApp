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
    {
      question : 'What are Chrome, Edge, Firefox?',
      answers : {
        a : 'Just brands',
        b : 'Some icons on my desktop',
        c : 'Browsers'
      },
      correctAnswer : 'c'

    },
    {
      question : '"Microsoft Word is :',
      answers : {
        a : 'A brand of speakers',
        b : 'A software',
        c : 'A type of keyboard'
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
     '<div class="answers">' + answers.join('') + '</div>'
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

      // Answers validation

      if (userAnswers === questions[i].correctAnswer) {
      
        numCorrect ++;

        answersContainer[i].style.color = '#07fc03';

      } else {

        answersContainer[i].style.color ='red';
      }
    }
    // to show the user's results

    alert(`You have answered correctly to ${numCorrect} questions out of ${questions.length}! If you wish to restart the quiz, just press the 'Restart the quiz!' button`);

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













