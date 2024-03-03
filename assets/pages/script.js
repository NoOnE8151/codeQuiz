//defining elements
//quiz mode selection elements
const quizMode = document.querySelectorAll(".quizMode");
const quizIcon = document.querySelectorAll(".quizMode");
const quizTitle = document.querySelectorAll(".quizTitle");
const quizDesription = document.querySelectorAll(".quizDescription");

//actual quiz title (above one is for popup)
const quizHeadTitle = document.querySelector(".quizHeadTitle");
const quizHeadIcon = document.querySelector(".quizHeadIcon");

const gameRoot = document.querySelector("#gameRoot");
const popupCont = document.querySelector("#popupCont");

//quiz result element
const resultCont = document.querySelector(".resultCont");
const resultRoot = document.querySelector("#resultRoot");
const queCount = document.querySelector("#queCount");
const wrongGuess = document.querySelector("#wrongGuess");
const correctGuess = document.querySelector("#score");
const reQuizBtn = document.querySelector("#reQuizBtn");
const mainMenuBtn = document.querySelector("#mainMenuBtn");

//start confirmation popup elements
const popupTitle = document.querySelector(".popupTitle");
const popupDescription = document.querySelector(".popupDescription");
const popupIcon = document.querySelector(".popupIcon");

//defining buttons
const startBtn = document.querySelector(".startBtn");
const cancelBtn = document.querySelector(".cancelBtn");
const nextBtn = document.querySelector(".nextBtnCont");

//quiz game elements
const quizCont = document.querySelector("#quizCont");
const questionEle = document.querySelector(".question");
const option = document.querySelectorAll(".option");

//sound effectcs
const correctSound = new Audio('../audio/correct.mp3');
const wrongSound = new Audio('../audio/wrong.mp3');
const clickSound = new Audio('../audio/click.mp3');
//background musics
const bgMusic = new Audio('../audio/bgMusic.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.1;

//utility variables
let question;
let score = 0;
let wrongGuessCount = 0;

//select a mode
quizMode.forEach(mode => {
  mode.addEventListener("click", () => {
    clickSound.play();
    selectedMode = mode.getAttribute("id");
    showPopup();
  })
})

//hide popup button
cancelBtn.addEventListener("click", () => {
  clickSound.play()
  hidePopup();
})

//show popup
const showPopup = () => {
  gameSetup();
  gameRoot.classList.remove("gameRootHidden");
}
//hide popup with gameroot
const hidePopup = () => {
  gameRoot.classList.add("gameRootHidden")
}
//hide popup only
const hidePopupOnly = () => {
  popupCont.classList.add("popupContHidden")
}

//setup up game content according to selected mode
const gameSetup = () => {
  if (selectedMode === 'htmlMode') {
    popupTitle.innerText = "HTML Quiz";
    popupDescription.innerText = "This quiz contains questions about HTML";
    popupIcon.setAttribute("src", '../img/html.png');
    quizHeadTitle.innerText = "HTML Quiz"; // Update quizHeadTitle here
    quizHeadIcon.setAttribute("src", '../img/html.png'); // Update quizHeadIcon here
    question = htmlQue;
} else if (selectedMode === 'cssMode') {
    popupTitle.innerText = "CSS Quiz";
    popupDescription.innerText = "This quiz contains questions about CSS";
    popupIcon.setAttribute("src", '../img/css.png');
    quizHeadTitle.innerText = "CSS Quiz"; // Update quizHeadTitle here
    quizHeadIcon.setAttribute("src", '../img/css.png'); // Update quizHeadIcon here
    question = cssQue;
} else if (selectedMode === 'codeQuizMode') {
    popupTitle.innerText = "codeQuiz";
    popupDescription.innerText = "This quiz contains questions about codeConquests";
    popupIcon.setAttribute("src", '../img/logo.png');
    quizHeadTitle.innerText = "codeQuiz"; // Update quizHeadTitle here
    quizHeadIcon.setAttribute("src", '../img/logo.png'); // Update quizHeadIcon here
    question = codeQue;
} else {
    alert("something went wrong while setting up the game, please open an issue ticket in the git repository \n https://www.github.com/No-OnE/codeQuiz");
}
}

//show the actual quiz game
const showQuiz = () => {
  quizCont.classList.remove("quizContHidden");
}
//hide quiz
const hideQuiz = () => {
  quizCont.classList.add("quizContHidden");
}

/* initialize the game */
//start button click event
startBtn.addEventListener("click", () => {
  clickSound.play();
  bgMusic.play();
  hidePopupOnly();
  updateQuiz();
  showQuiz();
})

//update quiz questions and answers 
let queIdx = 0;

//update 
const updateQuiz = () => {
  questionEle.innerText = question[queIdx].que;
  updateOptions();
}

//update quiz options
const updateOptions = () => {
  option.forEach((opt, idx) => {
    opt.innerText = question[queIdx]['opt' + (idx + 1)];
  });
};

//toggle next btn
//show next btn
const showNextBtn = () => {
  nextBtn.classList.remove("nextBtnContHidden")
}
const hideNextBtn = () => {
  nextBtn.classList.add("nextBtnContHidden")
}

//change correct option's color to green even if user select wrong option.
const showCorrectOpt = () => {
  option.forEach(opt => {
    if (opt.innerText === question[queIdx].correctOpt()) {
      opt.style.backgroundColor = 'green';
    }
  })
}

//add event listener to options
let selectedOpt = false;
option.forEach((opt, i) => {
    opt.addEventListener("click", (event) => {
      if (!selectedOpt) {
        const clickedOption = event.target.innerText;
        const currentQuestion = question[queIdx];
        if (clickedOption === currentQuestion.correctOpt()) {
            showCorrectOpt();
            correctSound.play();
            score++;
            console.log(score);
        } else {
          opt.style.backgroundColor = 'red';
          showCorrectOpt();
          wrongSound.play()
          wrongGuessCount++;
        }
        
        selectedOpt = true;
        nextBtn.classList.remove("nextBtnContHidden");
        queIdx++;
      } else {
        if ("vibrate" in navigator) {
    navigator.vibrate(200);
} 
      }
      
    });
});

//this function will reset option's color
const resetOptColor = () => {
  option.forEach(opt => {
    opt.style.backgroundColor = "";
  })
}

//add event listener to next button
nextBtn.addEventListener("click", () => {
  clickSound.play()
  selectedOpt = false;
  nextBtn.classList.add("nextBtnContHidden");
  resetOptColor();
  
  if (queIdx === question.length) {
    resultRoot.classList.remove("resultContHidden");
    queCount.innerText = queIdx;
    wrongGuess.innerText = wrongGuessCount;
    correctGuess.innerText = score;
    queIdx = 0;
  } else {
    updateQuiz();
  }
  
})

//hide quiz results
const hideResult = () => {
  resultRoot.classList.add("resultContHidden");
}
//reset score
const resetScore = () => {
  queIdx = 0;
  score = 0;
  wrongGuessCount = 0;
}

// add event to listener to restart button
reQuizBtn.addEventListener('click', () => {
  hideResult();
  updateQuiz();
  resetScore();
})

//add event listener to main menu btn
mainMenuBtn.addEventListener("click", () => {
  location.reload(true);
  });