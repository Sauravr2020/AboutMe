import React from "react";

function About() {
  return (
    <div className="flex flex-col md:w-full md:h-screen perspective-1000">
      {/* Navbar */}
      <div className="w-full h-16 bg-white border-b border-gray-300 flex items-center justify-between px-6 shadow-xl transform rotate-x-2">
        <h1 className="text-gray-800 text-xl font-bold">꧁༒༺☠︎☬S҉₳𝖀𝕽₳V҉☠︎☬༒꧂</h1>
        <div
          tabIndex={0}
          role="button"
          className="flex items-center justify-center rounded-full p-2 shadow-xl transform rotate-x-2">
          <div className="w-12 h-12 rounded-full overflow-hidden shadow-xl">
            <img
              className="w-full h-full object-cover"
              alt="Avatar"
              src="sks.jpg"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center mt-6 space-y-2 px-4 transform rotate-x-2">
        <p className="text-lg text-center">Introduction</p>
        <h1 className="text-3xl text-center">About me</h1>
      </div>

      {/* Content and Profile Image */}
      <div className="flex flex-col md:flex-row justify-center items-start mt-8 space-y-6 md:space-y-0 md:space-x-8 px-4">
        {/* Profile Image */}
        <div className="w-full md:w-[200px] h-[500px] md:h-[280px] bg-white flex items-start justify-center overflow-hidden shadow-xl border-b border-gray-300 transform rotate-x-4 translate-z-4">
          <img
            className="object-cover w-full h-full mr-5"
            src="Profile.png"
            alt="Profile"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col transform rotate-x-2">
          <p className="text-base mb-4 px-4 md:px-6 py-4 shadow-md">
            I am an experienced Frontend Developer with over a decade of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          {/* Three smaller divs */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-[130px] h-[120px] bg-white shadow-xl border-b border-gray-300 flex flex-col items-center justify-center p-2 text-center transform rotate-x-2 translate-z-4">
              <i className="fa-solid fa-code text-xl mb-2"></i>
              <p className="text-xs font-semibold mb-2">Languages</p>
              <p className="text-xs">HTML, CSS, JavaScript, ReactJS</p>
            </div>
            <div className="w-full md:w-[130px] h-[120px] bg-white shadow-xl border-b border-gray-300 flex flex-col items-center justify-center p-2 text-center transform rotate-x-2 translate-z-4">
              <i className="fa-solid fa-graduation-cap text-xl mb-2"></i>
              <p className="text-xs font-semibold mb-2">Education</p>
              <p className="text-xs">BCA, Chandigarh University</p>
            </div>
            <div className="w-full md:w-[130px] h-[120px] bg-white shadow-xl border-b border-gray-300 flex flex-col items-center justify-center p-2 text-center transform rotate-x-2 translate-z-4">
              <i className="fa-solid fa-briefcase text-xl mb-2"></i>
              <p className="text-xs font-semibold mb-2">Projects</p>
              <p className="text-xs">Built more than 5 projects</p>
            </div>
            <div className="w-full md:w-[130px] h-[120px] bg-white shadow-xl border-b border-gray-300 flex flex-col items-center justify-center p-2 text-center transform rotate-x-2 translate-z-4">
              <i className="fa-solid fa-star text-xl mb-2"></i>
              <p className="text-xs font-semibold mb-2">Hobbies</p>
              <p className="text-xs">Gaming, Badminton, Traveling, Gym</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
