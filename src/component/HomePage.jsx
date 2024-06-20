import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const HomePage = () => {
  const [input, setInput] = useState("");

  const navigate = useNavigate()

  const submitHandler = () => {
    navigate(`/room/${input}`)
  };

  return (
    <>
      <h1 className="absolute top-24 left-[22%] text-7xl text-yellow-600 ">
        Welcome to Video Chat App
      </h1>
      <div className="absolute top-[40%] left-[35%]">
        <input
          className=" w-[300px] h-[60px] border-4 border-[#183498] m-3 px-4 rounded-3xl text-xl"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Your Name"
        />
        <button
          className="m-3 py-3 px-8 bg-[#1b3aa9] text-zinc-900 text-2xl rounded-3xl"
          onClick={submitHandler}
        >
          Join
        </button>
      </div>
    </>
  );
};

export default HomePage;
