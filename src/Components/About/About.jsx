

function About() {
  return (
    <section class="relative w-full overflow-hidden pt-20">
      <img src="/images/images/banner.png" alt="Adhesive Banner" class="w-full h-auto object-cover block" />

      <div class="absolute top-80 left-[5%] -translate-y-1/2 z-20">
        <div class="mt-[10vw] ml-[5vw] space-x-4">
          <a href="#"
            class="inline-block bg-orange-600 text-white font-bold py-2 px-5 rounded text-sm  transform  hover:bg-transparent hover:text-black">
            View Products
          </a>

          <a href="#"
            class="inline-block bg-white text-orange-600 font-bold py-2 px-5 rounded text-sm transition duration-300 transform hover:scale-110 hover:bg-gray-100 hover:text-orange-700">
            Shop Now
          </a>
        </div>
      </div>
    </section>




  )
}

export default About