import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { SocketContext } from '../contexts/appSocket';
import flagDataNew from '../flags.json'



export default function Quiz() {
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft, setTimeLeft] = useState(10);
  const [isCounting,setIsCounting] = useState(false);


  const socket = useContext(SocketContext);

  // useEffect(() => {
  //   if (timeLeft > 0) {
  //     const timer = setInterval(() => {
  //       setTimeLeft(timeLeft - 1);
  //     }, 1000);
  //     return () => clearInterval(timer);
  //   } else {
  //     handleTimeout();
  //   }
  // }, [timeLeft]);

  useEffect(() => {
    // Listen for count updates
    if(timeLeft>0){
      socket.on('count', (newCount) => {
        setTimeLeft(newCount);
      });

    }else{
      handleTimeout()
    }


    return () => {
      socket.off('count');
    };
  }, []);

  const handleTimeout = () => {
    Swal.fire('Time is up!', `The correct answer was ${flagDataNew[currentQuestion].name}`, 'warning');
    setInput("");
    setCurrentQuestion(currentQuestion + 1);
    socket.on('count', (newCount) => {
      setTimeLeft(newCount)
  })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentFlag = flagDataNew[currentQuestion];
    if (input.toLowerCase() === currentFlag.name.toLowerCase()) {
      Swal.fire('Correct!', '', 'success');
      setScore(score + 1);
    } else {
      Swal.fire('Wrong!', `The correct answer was ${currentFlag.name}`, 'error');
    }
    setInput("");
    setTimeout(() => {
      setCurrentQuestion(currentQuestion + 1);
      socket.on('count', (newCount) => {
        setTimeLeft(newCount);
      });
    }, 2000); 
  };

  return (
    <div
    className=" w-screen h-screen bg-[url('./assets/9.jpg')] bg-cover bg-no-repeat bg-center flex justify-center pb-20" 
    style={{ alignItems: "center" }}
  >
    <div className="flex justify-center items-center flex-col mt-12">
      {currentQuestion < flagDataNew.length ? (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-green-300 to-blue-300 bg-opacity-90 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-center text-gray">Flag Quiz</h1>
          <img src={flagDataNew[currentQuestion].imageUrl} alt="Flag" className="w-full h-auto mb-4 rounded-md shadow-md" />
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
          <p className="text-center text-black">Time Left: {timeLeft} seconds</p>
          <p className="text-center text-black">Question: {currentQuestion + 1} / {flagDataNew.length}</p>
          <p className="text-center text-black">Score: {score} / {flagDataNew.length}</p>
        </div>
      ) : (
        <div className="max-w-md mx-auto mt-8 p-6 bg-gradient-to-br from-green-200 to-blue-400 bg-opacity-90 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold mb-4 text-center text-white">Quiz Completed!</h1>
          <p className="text-center text-white">Your final score is {score} / {flagDataNew.length}</p>
          <button
            onClick={() => { setScore(0); setCurrentQuestion(0); setTimeLeft(10); }}
            className="w-full px-4 py-2 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Restart Quiz
          </button>
        </div>
      )}

    </div>
    </div>
  );
}
