import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


const flagData = [
  { 
    id: 1, 
    negara: "Indonesia", 
    image: "https://flagcdn.com/w320/id.png",
    alternatif: ["Republik Indonesia"],
  },
  { 
    id: 2, 
    negara: "Malaysia", 
    image: "https://flagcdn.com/w320/my.png",
    alternatif: [],
  },
  { 
    id: 3, 
    negara: "Singapura", 
    image: "https://flagcdn.com/w320/sg.png",
    alternatif: ["Singapore"],
  },
  { 
    id: 4, 
    negara: "Thailand", 
    image: "https://flagcdn.com/w320/th.png",
    alternatif: ["Siam"],
  },
  { 
    id: 5, 
    negara: "Filipina", 
    image: "https://flagcdn.com/w320/ph.png",
    alternatif: ["Philippines"],
  },
  { 
    id: 6, 
    negara: "Vietnam", 
    image: "https://flagcdn.com/w320/vn.png",
    alternatif: [],
  },
  { 
    id: 7, 
    negara: "Jepang", 
    image: "https://flagcdn.com/w320/jp.png",
    alternatif: ["Japan", "Nippon"],
  },
  { 
    id: 8, 
    negara: "Korea Selatan", 
    image: "https://flagcdn.com/w320/kr.png",
    alternatif: ["South Korea"],
  },
  { 
    id: 9, 
    negara: "China", 
    image: "https://flagcdn.com/w320/cn.png",
    alternatif: ["Tiongkok", "Republik Rakyat Tiongkok", "People's Republic of China"],
  },
  { 
    id: 10, 
    negara: "India", 
    image: "https://flagcdn.com/w320/in.png",
    alternatif: ["Bharat"],
  }
];




export default function Quiz() {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleTimeout();
    }
  }, [timeLeft]);

  const handleTimeout = () => {
    Swal.fire('Time\'s up!', `The correct answer was ${flagData[currentQuestion].negara}`, 'warning');
    setInput("");
    setCurrentQuestion(currentQuestion + 1);
    setTimeLeft(10);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentFlag = flagData[currentQuestion];
    if (input.toLowerCase() === currentFlag.negara.toLowerCase() || currentFlag.alternatif.map(alt => alt.toLowerCase()).includes(input.toLowerCase())) {
      Swal.fire('Correct!', '', 'success');
      setScore(score + 1);
    } else {
      Swal.fire('Wrong!', `The correct answer was ${currentFlag.negara}`, 'error');
    }
    setInput("");
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(10);
    }, 1000); 
  };

  return (
    <div className="flex justify-center items-center flex-col mt-12">
      {currentQuestion < flagData.length ? (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-green-200 to-blue-400 bg-opacity-90 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">Flag Quiz</h1>
          <img src={flagData[currentQuestion].image} alt="Flag" className="w-full h-auto mb-4 rounded-md shadow-md" />
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter country name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
          <p className="text-center text-white">Time Left: {timeLeft} seconds</p>
          <p className="text-center text-white">Question: {currentQuestion + 1} / {flagData.length}</p>
          <p className="text-center text-white">Score: {score} / {flagData.length}</p>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-green-200 to-blue-400 bg-opacity-90 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">Quiz Completed!</h1>
          <p className="text-center text-white">Your final score is {score} / {flagData.length}</p>
          <button
            onClick={() => { setScore(0); setCurrentQuestion(0); setTimeLeft(10); }}
            className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}
