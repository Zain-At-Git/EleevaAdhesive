import React from 'react';

function LowerBar() {
  return (
    <div className="flex justify-center text-center bg-[#001f3f] text-white text-[16px] leading-tight items-center ">
      {/* Left box - 40% */}
      <div className="w-[40%] py-6 px-2 flex flex-col justify-center items-center">
        <span className="font-semibold">Green Manufacturing</span>
        <small>Low-impact processes & eco-safe resins</small>
      </div>

      {/* Middle (orange) box - 20%, taller */}
      <div className="w-[20%] py-8 px-4 text-base font-bold bg-[#ff5900] text-white flex flex-col justify-center items-center  z-10 shadow-lg my-[-12px]">
        <span>Precision Engineering</span>
        <small className="text-sm font-normal">Lab-tested bonding precision</small>
      </div>

      {/* Right box - 40% */}
      <div className="w-[40%] py-6 px-2 flex flex-col justify-center items-center">
        <span className="font-semibold">Cutting-Edge Technology</span>
        <small>Instant-set adhesion under pressure</small>
      </div>
    </div>
  );
}

export default LowerBar;
