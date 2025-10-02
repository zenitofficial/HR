
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[250px] sm:min-h-[350px] flex flex-col justify-between"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}background-section3.png')` }}
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start text-white">
              <img
                src={`${import.meta.env.BASE_URL}no_bg.png`}
                alt="Pulse Robot Logo"
                className="h-12 w-auto mb-4 sm:mb-0 sm:h-6 md:h-20 mr-0 sm:mr-3 mx-auto sm:mx-0"
              />
              {/* Se quiser algum texto ao lado da logo, insira aqui */}
              <span className="text-white text-xl font-medium"></span>
            </div>

            <div
              style={{
                overflow: "hidden",
                maxHeight: "80px",
                marginTop: "10px",
              }}
            >
              <h2
                style={{ marginBottom: "0px", padding: "0px 0px 80px" }}
                className="font-playfair text-white italic font-thin text-4xl sm:text-5xl md:text-7xl py-0 px-0 text-center lg:text-7xl"
              >
                Made By AI & Human
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;

