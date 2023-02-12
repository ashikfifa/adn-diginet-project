import React from "react";
import { useState } from "react";
const Secondsec = () => {
  const [para, setPara] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere"
  );
  const [color, setColor] = useState("");
  const [selectedOption, setSelectedOption] = useState(1);
  const text = ["first", "second"];
  const handleOnclickOver = () => {
    setPara(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere"
    );
    setColor("true");
  };
  const handleOnclickImp = () => {
    setPara("Lorem Lorem Impact");
  };

  const handleOnclickWht = () => {
    setPara("Lorem Lorem What");
  };
  return (
    <>
      <div className="container mx-auto p-10 pb-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="...">
            <p className="lg:pt-8 md:pt-2 text-4xl font-bold text-black ">
              How you can contribute to protect Earth
            </p>
            <p className="text-justify lg:pl-0 pt-5 sm:pl-3 md:pl-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>

          <div className="...">
            <div className="flex pt-7 pl-0 md:pl-6">
              <div
                className={`w-1/3 cursor-pointer text-center p-5 border-b ${
                  selectedOption === 1
                    ? "border-3 border-green-500"
                    : "border-none"
                }`}
                onClick={() => setSelectedOption(1)}
                onClickCapture={handleOnclickOver}
              >
                Overview
              </div>
              <div
                className={`w-1/3 cursor-pointer text-center p-5 border-b ${
                  selectedOption === 2
                    ? "border-3 border-green-500"
                    : "border-none"
                }`}
                onClick={() => setSelectedOption(2)}
                onClickCapture={handleOnclickImp}
              >
                Impact
              </div>
              <div
                className={`w-1/3 cursor-pointer text-center p-5 border-b ${
                  selectedOption === 3
                    ? "border-3 border-green-500"
                    : "border-none"
                }`}
                onClick={() => setSelectedOption(3)}
                onClickCapture={handleOnclickWht}
              >
                What You Get
              </div>
            </div>

            <div>
              <p className="mt-4 pl-0 md:pl-6 ">{para}</p>
            </div>
          </div>
        </div>

        <hr className="mt-5 border-gray-200"/>
      </div>
    </>
  );
};

export default Secondsec;
