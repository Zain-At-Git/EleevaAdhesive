import React from 'react';

function Manufacturing() {
  return (
    <section className="text-center bg-[#f1f4d3] px-[5%] py-8">
      <span className="uppercase text-[#ff5900] font-bold text-xs">Support System</span>
      <h2 className="text-2xl font-semibold mt-2">Manufacturing Insights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {/* Image 1 - Skew from bottom-right */}
        <div className="relative cut-bottom-right">
          <div className="overflow-hidden">
            <img
              src="images/images/rubber1.png"
              alt="High Quality Control"
              className="w-full h-52 object-cover transform  origin-bottom-right rounded"
            />
          </div>
          <div className="absolute bottom-2 centre bg-white text-[#ff5900] px-2 py-1 text-xs font-bold rounded shadow text-left">
  High Quality Control
  <br />
  <small className="text-[10px] font-normal">Every batch is tested for performance</small>
</div>

        </div>

        {/* Image 2 - Skew from bottom-left */}
        <div className="relative">
          <div className="overflow-hidden cut-bottom-left">
            <img
              src="images/images/rubber2.jpg"
              alt="Industrial Bonding Tech"
              className="w-full h-52 object-cover transform origin-bottom-left rounded"
            />
          </div>
          <div className="absolute bottom-2 left-4 bg-white text-[#ff5900] px-2 py-1 text-xs font-bold rounded shadow">
            Industrial Bonding Tech
            <br />
            <small className="text-[10px] font-normal">Formulated to meet factory-level needs</small>
          </div>
        </div>

        {/* Image 3 - Skew from top-right */}
        <div className="relative">
          <div className="overflow-hidden cut-top-right">
            <img
              src="images/images/rubber3.png"
              alt="Accuracy & Consistency"
              className="w-full h-52 object-cover transform  origin-top-right rounded"
            />
          </div>
         <div className="absolute bottom-2 left-2 bg-white text-[#ff5900] px-2 py-1 text-xs font-bold rounded shadow text-left">
  Accuracy & Consistency
  <br />
  <small className="text-[10px] font-normal">Consistent grip, zero failure rate</small>
</div>

        </div>

        {/* Image 4 - Skew from top-left */}
        <div className="relative">
          <div className="overflow-hidden cut-top-left">
            <img
              src="images/images/rubber4.png"
              alt="Swift Processing"
              className="w-full h-52 object-cover transform  origin-top-left rounded"
            />
          </div>
          <div className="absolute bottom-2 left-4 bg-white text-[#ff5900] px-2 py-1 text-xs font-bold rounded shadow">
            Swift Processing
            <br />
            <small className="text-[10px] font-normal">Fast production & custom packaging solutions</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Manufacturing;
