let button1 = document.getElementById('nextQuestion');



button1.addEventListener('click', function (event) {
event.preventDefault();
let show = document.querySelector('.intrebare-2');
show.classList.remove('intrebare-2');
show.classList.add('intrebare-2_active');
show.scrollIntoView({behavior : "smooth"});
});

let answer1 = document.getElementById('answer1');

const radioButtons = document.querySelectorAll('input[name = "planetei"]');

answer1.addEventListener('click', (event) => {
    event.preventDefault()
    let setAnswer;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            setAnswer = radioButton.value;
            break;
        }
    }
      if (setAnswer == "Terra") {
          console.log("This is the correct answer!!!");
      } else {
          console.log("No, the correct answer was 'Terra'");
      }

})









// de folosit mai tarziu

// let submit = document.getElementById('submit');

// submit.addEventListener('click', function() {
//     let goodAnswers = 4;
//    alert(`You have completed the test with ${goodAnswers} answers!`);

// })

