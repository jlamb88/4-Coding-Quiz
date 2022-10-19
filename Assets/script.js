var questions=[
  {questionNo:1,
  question:'Objects are defined in Javascript using what characters?',
  choices: [{text:"[]", correct: false},{text:"()", correct:false},{text:"{}",correct:true}, {text:"<>", correct:false}]
  },
  {questionNo:2,
  question: 'What command allows you to use ouput generated by a function?',
  choices: [{text: "access", correct: false},{text: "return", correct: true},{text:"print", correct: false},{text: "call", correct: false}],
  },
  {questionNo:3,
  question: "What symbol is a wildcard in Javascript?",
  choices: [{text: "&", correct: false},{text: "$", correct:false},{text:"=", correct: false},{text:"*", correct: true}]
  }
]

var timerEl = document.getElementById("timer");
var questionEl = document.getElementById("questionText");
var choicesEl = document.getElementById('choices');
var currentQ = 0

function generateTimer(seconds)  {
        timerEl.textContent = seconds;
        
        setInterval(function () {
          var timerSecs = timerEl.textContent;
          if (timerSecs>0) 
          {
          timerSecs--;
          timerEl.textContent = timerSecs
          }
          else {timeEl.textContent = "0"
          };
        }
      , 1000);
    }
    



generateTimer(60);
generateQuestion(currentQ);

function generateQuestion(currentQ) 
{
  console.log(currentQ);
  if (currentQ < questions.length) 
  {
    questionEl.textContent = ""
    var clrChoices  = document.querySelectorAll('.choice');
    clrChoices.forEach(clrChoices => {
      clrChoices.remove();
      });
    questionEl.textContent = questions[currentQ].question;
    for(c=0;c<questions[currentQ].choices.length; c++) 
      {
        var choiceNode = document.createElement('button');
        var choiceCorrect = questions[currentQ].choices[c].correct;
        choiceNode.setAttribute('onclick', 'checkAnswer(event.target.dataset.correct)');
        choiceNode.setAttribute('id','choiceBtn'+(c+1));
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('data-correct', choiceCorrect);
        choiceNode.textContent = questions[currentQ].choices[c].text;
        choicesEl.appendChild(choiceNode);
       }
    
    }
  else
    {
    makeScore();
    }
  }

 function checkAnswer(checkButton)
  {
  console.log(checkButton);
  timerEl = document.getElementById("timer");
   if (checkButton==="true")
    {
    document.getElementById("response").textContent = "Correct!"
    currentQ += 1;
    generateQuestion(currentQ);
    }
  else 
    {
    document.getElementById("response").textContent = "Wrong. 5 seconds have been deducted from your time."
    timerEl.textContent -=5;
    }
  }

function makeScore()
{
currentScore = timerEl.textContent;
topScore = localStorage.getItem("topScore")
if (currentScore > topScore) {
localStorage.setItem ("topScore", currentScore);
}
}


