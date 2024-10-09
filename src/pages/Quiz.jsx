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
    alternatif: []
  },
  { 
    id: 3, 
    negara: "Singapura", 
    image: "https://flagcdn.com/w320/sg.png",
    alternatif: ["Singapore"]
  },
  { 
    id: 4, 
    negara: "Thailand", 
    image: "https://flagcdn.com/w320/th.png",
    alternatif: ["Siam"]
  },
  { 
    id: 5, 
    negara: "Filipina", 
    image: "https://flagcdn.com/w320/ph.png",
    alternatif: ["Philippines"]
  },
  { 
    id: 6, 
    negara: "Vietnam", 
    image: "https://flagcdn.com/w320/vn.png",
    alternatif: []
  },
  { 
    id: 7, 
    negara: "Jepang", 
    image: "https://flagcdn.com/w320/jp.png",
    alternatif: ["Japan", "Nippon"]
  },
  { 
    id: 8, 
    negara: "Korea Selatan", 
    image: "https://flagcdn.com/w320/kr.png",
    alternatif: ["South Korea"]
  },
  { 
    id: 9, 
    negara: "China", 
    image: "https://flagcdn.com/w320/cn.png",
    alternatif: ["Tiongkok", "Republik Rakyat Tiongkok", "People's Republic of China"]
  },
  { 
    id: 10, 
    negara: "India", 
    image: "https://flagcdn.com/w320/in.png",
    alternatif: ["Bharat"]
  }
];



const score= [
  {name1:0},
  
];

export default function Quiz() {

    const [input, setInput] = useState("")
    const [score, setScore] = useState(0)

  return (
    <>
        {flagData.map(el=>(
            <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4 text-center">Flag Quiz</h1>
            <img src={el.image} alt="Flag" className="w-full h-auto mb-4 rounded" />
            <form onSubmit="" className="mb-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter country name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Submit
              </button>
            </form>
            <p className="text-center">Question: 1 / 4</p>
            <p className="text-center">Score: {score} / 4</p>
          </div>
        ))}
    </>
  );
}