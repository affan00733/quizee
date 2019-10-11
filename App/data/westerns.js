const questions = [

  {   // 1
      question: "To operate a fire extinguisher, follow the :",
      answers: [
          { id: "1", text: "RACE" },
          { id: "2", text: "PASS", correct: true },
          { id: "3", text: "PASS and RACE" },
          { id: "4", text: "None of above" },
      ],
      ex: "P-Pull  A-Aim  S-Squeeze  S-Sweep",
      corAns: "PASS"
  },

  //2
  {
      question: "Wood, Plastic & Paper are classified as",
      answers: [
          { id: "1", text: "Class A", correct: true },
          { id: "2", text: "Class B" },
          { id: "3", text: "Class C" },
          { id: "4", text: "Class D" }
      ],
      ex: "Class A:fires involving solid materials Class B:fires involving flammable liquids Class C:fires involving gases Class D:fires involving metals",
      corAns: "Class A"
  },

  //3
  {
      question: "An exit route consists of three parts: exit access, exit, and exit discharge",
      answers: [
          { id: "1", text: "True", correct: true },
          { id: "2", text: "False" },
      ],
      ex: "exit route consists of three parts",
      corAns: "True"
  },

  //4
  {
      question: "Class B fire extinguishers are designed to be used on combustible metals",
      answers: [
          { id: "1", text: "True" },
          { id: "2", text: "False", correct: true },
      ],
      ex: "Fire extinguishers with a Class B rating are effective against fires due to flammable liquid. ",
      corAns: "False"
  },

  //5
  {
      question: "OSHA stands for the Occupational Safety and Hazards Administrations",
      answers: [
          { id: "1", text: "True" },
          { id: "2", text: "False", correct: true },
      ],
      ex: "Occupational Safety and Health Administration",
      corAns: "False"
  },


  //6
  {
      question: "An 'A' class fire is fueled by",
      answers: [
          { id: "1", text: "Wood, paper, cloth, trash, plastics", correct: true },
          { id: "2", text: "Flammable liquids: gasoline, oil, grease, acetone" },
          { id: "3", text: "Electrical: energized electrical equipment" },
          { id: "4", text: "None of above" },
      ],
      ex: "Class A - Fire including solid substances",
      corAns: "Wood, paper, cloth, trash, plastics"
  },


  //7
  {
      question: "A 'B' class fire is fueled by:",
      answers: [
          { id: "1", text: "Wood, paper, cloth, trash, plastics" },
          { id: "2", text: "Flammable liquids: gasoline, oil, grease, acetone", correct: true },
          { id: "3", text: "Electrical: energized electrical equipment" },
          { id: "4", text: "None of above" },
      ],
      ex: "Class B:fires involving flammable liquids",
      corAns: "Flammable liquids: gasoline, oil, grease, acetone"
  },


  //8
  {
      question: "A 'C' class fire is fueled by",
      answers: [
          { id: "1", text: "Wood, paper, cloth, trash, plastics" },
          { id: "2", text: "Flammable Gases: natural gas, hydrogen, propane, butane", correct: true },
          { id: "3", text: "Electrical: energized electrical equipment" },
          { id: "4", text: "None of above" },
      ],
      ex: "Class C:fires involving gases",
      corAns: "Flammable Gases: natural gas, hydrogen, propane, butane"
  },

  //9
  {
      question: "Fire extinguishers are rated",
      answers: [
          { id: "1", text: "Type A" },
          { id: "2", text: "Type B" },
          { id: "3", text: "Type C" },
          { id: "4", text: "All of above", correct: true },
      ],
      ex: "All are correct",
      corAns: "All of above"
  },



]

export default questions;
