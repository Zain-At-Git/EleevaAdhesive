import React from 'react'

function AboutCorporate() {
  return (
 <section className="min-h-screen flex items-center justify-center px-6 py-10 bg-white mx-90">
  <div className="flex flex-col lg:flex-row items-center gap-8 max-w-7xl mx-auto">
    {/* Image Column */}
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <img
        src="images/images/aboutcorpic.jpg"
        alt="Workers"
        className="h-[200px] object-cover rounded-lg shadow-md clip-bottom-left"
      />
      <img
        src="images/images/aboutcorpic2.jpg"
        alt="Warehouse"
        className="h-[200px] object-cover rounded-lg shadow-md clip-top-right"
      />
    </div>

    {/* Text Column */}
    <div className="text-center lg:text-left max-w-2xl">
      <span className="uppercase text-orange-500 font-semibold tracking-wide">About Corporate</span>
      <h1 className="text-2xl lg:text-3xl font-bold mt-2 mb-4">
        Empowering Global Fixes. Supporting Smart Solutions.
      </h1>
      <p className="mb-4">
        Bison is a Pakistani adhesive brand trusted around the globe — known for producing next-generation glue
        solutions with unmatched precision, power, and usability.
      </p>
      <p className="mb-4">
        We support industries and homes with cutting-edge adhesive science that simplifies, strengthens, and
        speeds up everyday tasks — from tiny household fixes to full-scale manufacturing.
      </p>
      <p className="mb-4">
        <strong className="inline-flex items-center gap-2 text-green-600">
          <img src="https://img.icons8.com/ios-filled/24/228B22/leaf.png" alt="Eco Icon" />
          Eco-Friendly Manufacturing
        </strong><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit et elit ut luctus, luctus nec ultricies mauris, pulvinar dapibus.
      </p>
      <p>
        <strong className="inline-flex items-center gap-2 text-orange-500">
          <img src="https://img.icons8.com/color/48/FFA500/gear.png" alt="Tech Icon" />
          Advanced Grip Formulas
        </strong><br />
Lorem ipsum dolor sit amet, consectetur adipiscing elit et elit ut luctus, luctus nec ultricies mauris, pulvinar dapibus.      </p>
    </div>
  </div>
</section>




  )
}

export default AboutCorporate