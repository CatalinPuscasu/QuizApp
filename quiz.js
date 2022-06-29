let quizContainer = document.querySelector('.quiz-container');
let submit = document.getElementById('submit');
let resultContainer = document.querySelector('.rezultate');


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

    }
   ];


function createQuiz (questions, quizContainer, resultContainer, submit) {



 function showQuestions (questions, quizContainer) {
  
  let questionsOutput = [];
  let answers;

  for (let i = 0; i < questions.length; i++) {

     answers = [];

     for (letter in questions[i].answers) {

        answers.push('<label>' + '<input type= "radio" name="question">' + i + '" value=' + letter+'">'
        + letter + ': ' + questions[i].answers[letter] + '</label>'
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













