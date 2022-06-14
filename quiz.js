// ---------- Scroll to next question------------

let button1 = document.getElementById('nextQuestion');

button1.addEventListener('click', function (event) {
event.preventDefault();
let show = document.querySelector('.intrebare-2');
show.classList.remove('intrebare-2');
show.classList.add('intrebare-2_active');
show.scrollIntoView({behavior : "smooth"});
});
// -----------------------------------

// ------------------ Validate question 1 answers-------------------

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
          console.log(" the correct answer is 'Terra', yee");          
      }  else {
          console.log("No, the correct answer was 'Terra'");
      }
})

//  ----------------------------------------------------------


const answer2 = document.querySelector('#answer2');


answer2.addEventListener('click', (event) => {
    event.preventDefault();
    let checkboxes = document.querySelectorAll('input[name ="anul"]:checked')

     let result = [];
     checkboxes.forEach((checkbox) => {
        result.push(checkbox.value);
     })
     console.log(result);

 if (result == 1939) {
    console.log("riiiight");
 } else {
    console.log("trebuie sa aleg cv din lista, se fie bine");
 }

})











// de folosit mai tarziu

// let submit = document.getElementById('submit');

// submit.addEventListener('click', function() {
//     let goodAnswers = 4;
//    alert(`You have completed the test with ${goodAnswers} answers!`);

// })

