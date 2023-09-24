const quizData=[
    {
      "question": "Surface tension of liquids generally…………….with temperature. (increases/decreases)",
      "choices": ["Increases", "Decreases"],
      "answer": "Decreases"
    },
    {
      "question": "Viscosity of gases………………..with temperature, whereas viscosity of liquids…………..with temperature. (increases/decreases)",
      "choices": ["Increases, Decreases", "Decreases, Decreases", "Decreases, Increase", "Increase, Increase"],
      "answer": "Increases, Decreases"
    },
    {
      "question": "A 50 kg girl wearing high heel shoes balances on a single heel. The heel is circular with a diameter 1.0 cm. What is the pressure exerted by the heel on the horizontal floor?",
      "choices": [
        "6.25 X 105 Pa",
        "5.17 X 106 Pa",
        "6.24 X 106 Pa",
        "6.94 X 104 Pa"
      ],
      "answer": "6.24 X 106 Pa"
    },
    {
      "question": "Toricelli's barometer used mercury. Pascal duplicated it using French wine of density 984 kg m-3. Determine the height of the wine column for normal atmospheric pressure.",
      "choices": ["9.7 m", "10.5 m", "11.6 m", "11 m"],
      "answer": "10.5 m"
    },
    {
      "question": "A hydraulic automobile lift is designed to lift cars with a maximum mass of 3000 kg. The area of cross-section of the piston carrying the load is 425 cm2. What maximum pressure would the smaller piston have to bear?",
      "choices": [
        "6.92 X 105 Pa",
        "6.05 X 106 Pa",
        "5.65 X 106 Pa",
        "6.27 X 104 Pa"
      ],
      "answer": "6.92 X 105 Pa"
    },
    {
      "question": "Can Bernoulli's equation be used to describe the flow of water through a rapid motion in a river?",
      "choices": ["Yes", "No"],
      "answer": "No"
    },
    {
      "question": "Does it matter if one uses gauge instead of absolute pressures in applying Bernoulli's equation?",
      "choices": ["Yes", "No"],
      "answer": "No"
    },
    {
      "question": "What is the term used for the fractional change in volume per unit increase in pressure?",
      "choices": ["Volume coefficient", "Pressure gradient", "Compressibility", "Bulk modulus"],
      "answer": "Compressibility"
    },
    {
      "question": "You are given two wires W1 and W2. Both are made of the same material and are of the same length. The radius of the cross-section of W2 is twice that of W1. The same load is suspended from both of them. If the strain in W1 is 4, then calculate the strain in W2.",
      "choices": ["8", "4", "2", "1"],
      "answer": "1"
    },
    {
      "question": "How does Young's modulus vary with the increase in temperature?",
      "choices": ["Increases", "Decreases", "Remain constant", "First increases and then decreases"],
      "answer": "Decreases"
    },
    {
      "question": "What bonds are present in a semiconductor?",
      "choices": ["Monovalent", "Bivalent", "Trivalent", "Covalent"],
      "answer": "Covalent"
    },
    {
      "question": "In a p-type semiconductor, the current conduction is due to",
      "choices": ["Holes", "Atoms", "Electrons", "Protons"],
      "answer": "Holes"
    },
    {
      "question": "What is the main function of a transistor?",
      "choices": ["Simplify", "Amplify", "Rectify", "All of the above"],
      "answer": "Amplify"
    },
    {
      "question": "What happens to the resistance of semiconductors on heating?",
      "choices": ["Increases", "Decreases", "Remains the same", "First increases later decreases"],
      "answer": "Decreases"
    },
    {
      "question": "A p-type semiconductor is",
      "choices": ["Positive", "Negative", "Uncharged"],
      "answer": "Uncharged"
    },
    {
      "question": "In a good conductor, the energy gap between conduction band and valence band is",
      "choices": ["Infinite", "Wide", "Narrow", "Zero"],
      "answer": "Zero"
    },
    {
      "question": "How much is the forbidden gap in the energy band of germanium in room temperature?",
      "choices": ["1.1 eV", "0.1 eV", "0.67 eV", "6.7 eV"],
      "answer": "0.67 eV"
    },
    {
      "question": "In a half-wave rectification, what will be the output frequency if the input frequency is 50 Hz",
      "choices": ["50 Hz", "60 Hz", "25 Hz", "100 Hz"],
      "answer": "50 Hz"
    },
    {
      "question": "The electric circuit used to get smooth output from the rectifier circuit is called",
      "choices": ["Oscillator", "Filter", "Amplifier", "Logic gate"],
      "answer": "Filter"
    },
    {
      "question": "The logic behind “NOR” gate is that it gives:",
      "choices": ["High output when both inputs are low", "Low output when both inputs are low", "High output when both inputs are high", "None of these"],
      "answer": "High output when both inputs are low"
    },
    {
      "question": "The least resistance obtained by using 2 Ω, 4 Ω, 1 Ω, and 100 Ω is",
      "choices": ["<100 ohm", "<4 ohm", "<1 ohm", ">2 ohm"],
      "answer": "<1 ohm"
    },
    {
      "question": "Work of 14 J is done to move 2 C charge between two points on a conducting wire. What is the potential difference between the two points?",
      "choices": ["28 V", "14 V", "7 V", "3.5 V"],
      "answer": "7 V"
    },
    {
      "question": "Fuse wire repeatedly gets burnt when used with a good heater. It is advised to use a fuse wire of",
      "choices": ["More length", "Less radius", "Less length", "More radius"],
      "answer": "More radius"
    },
    {
      "question": "Two devices are connected between two points, say A and B, in parallel. The physical quantity that will remain the same between the two points is",
      "choices": ["Current", "Voltage", "Resistance", "None of these"],
      "answer": "Voltage"
    },
    {
      "question": "What is the relationship between resistance and current?",
      "choices": ["They are directly related to each other", "They are inversely related to each other", "The resistance has a greater magnitude than the current", "The current has a greater magnitude than the resistance"],
      "answer": "They are inversely related to each other"
    },
    {
      "question": "An electric toaster has a power rating of 200 W. It operates for 1 hour in the morning and 1 hour in the evening. How much does it cost to operate the toaster for 10 days at Rs. 5 per kW h?",
      "choices": ["Rs. 20", "Rs. 400", "Rs. 5000", "Rs. 10000"],
      "answer": "Rs. 20"
    },
    {
      "question": "The force on a current-carrying conductor when placed perpendicular in a uniform magnetic field.",
      "choices": ["F=BIL", "F=B/IL", "F=L/BI", "F=I/BL"],
      "answer": "F=BIL"
    },
    {
      "question": "Which of the following devices converts electrical energy into mechanical energy?",
      "choices": ["Generator", "Motor", "Transformer", "Inductor"],
      "answer": "Motor"
    },
    {
      "question": "Which of the following is used to step up or step down the voltage in an electric circuit?",
      "choices": ["Transformer", "Inductor", "Capacitor", "Resistor"],
      "answer": "Transformer"
    },
    {
        "question": "A cooler of 1500 W, 200 volts and a fan of 500 W, 200 volts are to be used from a household supply. The rating of the fuse to be used is",
        "choices": ["2.5 A", "5.0 A", "7.5 A", "10 A"],
        "answer": "10 A"
      },
      {
        "question": "In an electrical circuit, two resistors of 2 Ω and 4 Ω, respectively, are connected in series to a 6 V battery. The heat dissipated by the 4 Ω resistor in 5 s will be",
        "choices": ["5 J", "10 J", "20 J", "30 J"],
        "answer": "20 J"
      },
      {
        "question": "Two bulbs are rated 40W, 220W and 60W, 220W. The ratio of their resistances will be",
        "choices": ["4:3", "3:4", "2:3", "3:2"],
        "answer": "3:2"
      }
  ]
  const questionElement = document.querySelector(".question");
  const answerButtons = document.querySelectorAll(".butn");
  const nextButton = document.querySelector(".next");
  const previousButton = document.querySelector(".pre");
  let currentQuestionIndex = 0;
  const result = [];
  const selectedAnswers = []; // Array to store selected answers for each question
  
  // Initialize the quiz with the first question
  loadQuestion(currentQuestionIndex);
  
  // Function to load a question and its answers
  function loadQuestion(questionIndex) {
      const currentQuestion = quizData[questionIndex];
      questionElement.textContent = currentQuestion.question;
      questionElement.style.animation = 'none'; // Reset animation
      questionElement.offsetHeight; /* Trigger reflow to apply animation immediately */
      questionElement.style.animation = null;
      // Clear the selected class from all answer buttons
      answerButtons.forEach(button => {
          button.classList.remove("selected");
          button.style.display = "none";
      });
  
      if (questionIndex === 0) {
          previousButton.style.display = "none";
      } else {
          previousButton.style.display = "block";
      }
  
      for (let i = 0; i < currentQuestion.choices.length; i++) {
          answerButtons[i].textContent = currentQuestion.choices[i];
          answerButtons[i].style.display = "block";
      }
  
      // Check if a selected answer exists for this question and apply it
      nextButton.style.display = "none";
      if (selectedAnswers[questionIndex]) {
          const selectedButtonIndex = currentQuestion.choices.indexOf(selectedAnswers[questionIndex]);
          nextButton.style.display = "block";
          if (selectedButtonIndex !== -1) {
              answerButtons[selectedButtonIndex].classList.add("selected");
          }
      }
  
     
  
      setTimeout(() => {
          questionElement.textContent = currentQuestion.question;
          questionElement.style.opacity = 1; // Fade in the question text
      }, 300);
  }
  
  // Function to handle the "Previous" button click
  function previousQuestion() {
      if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          loadQuestion(currentQuestionIndex);
      }
  }
  
  // Function to check the selected answer
  function checkAnswer() {
      const selectedButton = document.querySelector(".butn.selected");
      if (!selectedButton) {
          // If no answer is selected, do not proceed
          return;
      }
  
      const selectedAnswer = selectedButton.textContent;
      selectedAnswers[currentQuestionIndex] = selectedAnswer; // Store the selected answer
  
      const currentQuestion = quizData[currentQuestionIndex];
  
      if (selectedAnswer === currentQuestion.answer) {
          // Handle correct answer
          // You can add your own logic for correct answers here
          result[currentQuestionIndex]=1;
      } else {
          // Handle wrong answer
          // You can add your own logic for wrong answers here
          result[currentQuestionIndex]=0;
      }
  
      // Move to the next question
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
          loadQuestion(currentQuestionIndex);
      } else {
          // End of the quiz
          let score=0;
          for (let I = 0; I < result.length; I++) {
             score = result[I]+score;
          }
          
      }
    }
// Get the circular progress bar element and percentage text element

  // Add click event listeners to answer buttons
  answerButtons.forEach(button => {
      button.addEventListener("click", () => {
          // Remove the "selected" class from all buttons
          answerButtons.forEach(btn => btn.classList.remove("selected"));
  
          // Add the "selected" class to the clicked button
          button.classList.add("selected");
          nextButton.style.display = "block"; // Show the next button
      });
  });
  
  // Add click event listener to the "Previous" button
  previousButton.addEventListener("click", previousQuestion);
  
  // Add click event listener to the "Next" button
  nextButton.addEventListener("click", checkAnswer);
  
  // JavaScript to show/hide dropdown
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
});

dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
});