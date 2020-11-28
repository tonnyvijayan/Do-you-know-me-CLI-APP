var readLineSync=require('readline-sync');
var score=0;

var userName=readLineSync.question("Hello, What is your name?\n").toUpperCase();

console.log("Welcome "+ userName+"! let's play  do you know Tonny?");

//var questionOne={
//   question:"Where does Tonny live? ",
//   answer:"goa"
// };

// var questionTwo={
//   question:"Which is Tonny's favourite sport? ",
//   answer:"badminton"
// };

var questions=[{
  question:"Where does Tonny live? ",
  answer:"goa"
},{
  question:"Which is Tonny's favourite sport? ",
  answer:"badminton"
},{
  question:"Which genre of movie does Tonny like watching? ",
  answer:"comedy"
}]; // made an array containing objects with keys and values


//function to compare question and answer
function play(questions,answers){ 
  var userAnswer=readLineSync.question(questions)

  if(userAnswer.toLowerCase()===answers){
    console.log("That is right")
    score=score+1;  
    
  }
  else{
    console.log("Oops! You're Wrong!")
  
  
  }
  console.log("Your score is "+ score)
  console.log("----------")
};

//putting a loop to run all elements from the array
for(i=0;i<questions.length;i++){  
  var currentquestion=questions[i]
  play(currentquestion.question,currentquestion.answer)

};

console.log("Thank you, "+userName+" for taking the quiz.Your final score is "+ score);




