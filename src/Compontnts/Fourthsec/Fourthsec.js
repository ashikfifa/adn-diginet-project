import React from 'react';
import bgimg from "./img/sunset.jpg"
const Fourthsec = () => {
  return (
    <div className="container mx-auto px-9 pb-20">
    <div className="bg-cover bg-col bg-no-repeat bg-center h-64 w-full" style={{ backgroundImage: `url(${bgimg})`,backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold">You can contribute to make<br/> the environment greener!</h1>
        <div className="mt-6">
          <button className="bg-lightgreen hover:bg-lightgreen text-white font-bold py-2 px-4 rounded">Join as a voluteer</button>
          <button className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded ml-4">Donate</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Fourthsec;
