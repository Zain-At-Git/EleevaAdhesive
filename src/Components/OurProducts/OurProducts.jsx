import React from 'react'

function OurProducts() {
    return (
        <section class="bg-[#fff6e9]
         py-10 px-[5%] text-center">
            <div class="container mx-auto">
                <h2 class="text-orange-600 text-[1.8rem] font-bold mb-4">Our Products</h2>

                <p class="text-base sm:text-lg md:text-xl leading-relaxed text-center max-w-[90%] mx-auto mb-8 text-gray-900">

                    Eleeva offers a premium range of advanced super glues. Whether you're repairing a broken item, crafting
                    something new, or powering up industrial workflows—our products deliver
                    <strong class="font-bold"> long-lasting, instant grip.</strong>
                </p>

                <div class="flex flex-wrap justify-center gap-5">

                    <div class="product-item w-[220px] border  border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <img src="/images/images/elfy1.png" alt="GMSA Super Glue 50 GMS" class="w-full h-auto p-2" />
                        <div class="product-caption bg-[#004AAD] text-white p-2">
                            <h4 class="text-sm font-bold m-0">GMSA</h4>
                            <p class="text-xs  tracking-wide capitalize">Super Glue 50 GMS</p>
                        </div>
                    </div>
                    <div class="product-item w-[220px] border  border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <img src="/images/images/elfy1.png" alt="GMSA Super Glue 50 GMS" class="w-full h-auto p-2" />
                        <div class="product-caption bg-[#004AAD] text-white p-2">
                            <h4 class="text-sm font-bold m-0">GMSA</h4>
                            <p class="text-xs  tracking-wide capitalize">Super Glue 50 GMS</p>
                        </div>
                    </div>

                    <div class="product-item w-[220px] border  border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <img src="/images/images/elfy4.png" alt="GMSA Super Glue 50 GMS" class="w-full h-auto p-2" />
                        <div class="product-caption bg-[#004AAD] text-white p-2">
                            <h4 class="text-sm font-bold m-0">GMSA</h4>
                            <p class="text-xs  tracking-wide capitalize">Super Glue 50 GMS</p>
                        </div>
                    </div>

                    <div class="product-item w-[220px] border  border-gray-300 rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                        <img src="/images/images/elfy1.png" alt="GMSA Super Glue 50 GMS" class="w-full h-auto p-2" />
                        <div class="product-caption bg-[#004AAD] text-white p-2">
                            <h4 class="text-sm font-bold m-0">GMSA</h4>
                            <p class="text-xs  tracking-wide capitalize">Super Glue 50 GMS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default OurProducts