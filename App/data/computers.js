const questions = [
  {
    question: "Where should smoke alarms be placed?",
    answers: [
      { id: "1", text: "In the corner of the room" },
      { id: "2", text: "In the middle of the wall" },
      { id: "3", text: "On or near the ceiling", correct: true },
      { id: "4", text: "On or near the floor" }
    ],
    ex: "Smoke have tendency to move upwards so it would be better to keep it near ceiling.",
    corAns: "On or near the ceiling"
  },

  {
    question: "Why shouldnít carbon dioxide extinguishers be used in confined spaces?",
    answers: [
      { id: "1", text: "They might explode" },
      { id: "2", text: "Harmful fumes may be inhaled", correct: true },
      { id: "3", text: "They could cause claustrophobia" },
      { id: "4", text: " They might not show up if it's dark" }
    ],
    ex: "Harmful fumes can damage lungs",
    corAns: "Harmful fumes may be inhaled"
  },

  {
    question: "Fire extinguishers must be checked at least once a month.",
    answers: [
      { id: "1", text: "True", correct: true },
      { id: "2", text: "False" }
    ],
    ex: "There is no use of it if it doesn't help at the time of emergency",
    corAns: "True"
  },

  {
    question: "To operate the fire extinguisher, the acronym P.A.S.S. is often used to help us remember to",
    answers: [
      { id: "1", text: "Pass by the fire, activate the fire alarm, select the proper extinguisher, shoot at the base of the fire" },
      { id: "2", text: "Pull the pin, aim at the base of the fire, squeeze the handle, and sweep at the base of the fire", correct: true },
      { id: "3", text: "Pull the alarm, alert the response team, shut down the power sources, secure the area" },
      { id: "4", text: "Pass by the fire, activate the sprinkler system, seal fire area from oxygen, stop unauthorized entry" }
    ],
    ex: "To operate the fire extinguisher, its compulsory to pull the pin first rather than pass by fire or pull alarm",
    corAns: "Pull the pin, aim at the base of the fire, squeeze the handle, and sweep at the base of the fire"
  },

  {
    question: "What should you do when your clothes catch fire?",
    answers: [
      { id: "1", text: "Stop where you are, drop to the floor, roll against the floor and cool off with water after the fire is out", correct: true },
      { id: "2", text: "Run quickly such that the wind helps to put out the fire" },
      { id: "3", text: "Scream for help" },
      { id: "4", text: "Grab a fire extinguisher and spray it on your clothes" }
    ],
    ex: "Dropping on floor and sprinkling water can decrease the damage to the inner skin",
    corAns: "Stop where you are, drop to the floor, roll against the floor and cool off with water after the fire is out"
  },

  {
    question: "When water is sprayed on to an oil fire the fire will..",
    answers: [
      { id: "1", text: "Go out" },
      { id: "2", text: "Smolder" },
      { id: "3", text: "Rage" },
      { id: "4", text: "Spread", correct: true }
    ],
    ex: "Water vaporizes which will cause sudden mist of wallet articles",
    corAns: "Spread"
  },

  {
    question: "In case of electrical fire which fire extinguisher should be applied?",
    answers: [
      { id: "1", text: "Dry Powder" },
      { id: "2", text: "CO2" },
      { id: "3", text: "CO2 & dry powder", correct: true },
      { id: "4", text: "Water" }
    ],
    ex: "Because its safe on both high and low voltages",
    corAns: "CO2 & dry powder"
  },

  {
    question: "Which of the following extinguishers is suitable for a fire involving flammable liquids?",
    answers: [
      { id: "1", text: "Carbon dioxide extinguisher (black)", correct: true },
      { id: "2", text: "Powder extinguisher (blue)" },
      { id: "3", text: "Wet Chemical extinguisher (cream)" },
      { id: "4", text: "Polka dot extinguisher (dotty)" }
    ],
    ex: "They displace oxygen the fire needs to burn.",
    corAns: "Carbon dioxide extinguisher (black)"
  },

  {
    question: "Which of the following is not a type of firefighting equipment?",
    answers: [
      { id: "1", text: "Fire blanket" },
      { id: "2", text: "Hose reel" },
      { id: "3", text: "Sprinkler" },
      { id: "4", text: "Ice cubes", correct: true }
    ],
    ex: "Ice will melt and can't be used for firefighting",
    corAns: "Ice cubes"
  },

  {
    question: "Inside a building, fire extinguishers must be placed within what distance of each other?",
    answers: [
      { id: "1", text: "75 ft", correct: true },
      { id: "2", text: "100 ft" },
      { id: "3", text: "70 ft" },
      { id: "4", text: "85 ft" }
    ],
    ex: "This is the most optimal distance",
    corAns: "75 ft"
  },

  {
    question: "Fire extinguishers are classified by",
    answers: [
      { id: "1", text: "The type of fire they are used on", correct: true },
      { id: "2", text: "Size of the fire to put out" },
      { id: "3", text: "The temperature of fire" },
      { id: "4", text: "The color of the fire" }
    ],
    ex: "Specific type of extinguisher should only be used for specific type of fire.",
    corAns: "The type of fire they are used on"
  }


];
export default questions;