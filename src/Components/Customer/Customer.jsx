import React from 'react'

function Customer() {
    return (
        <section class="px-[5%] py-10 text-left">
            <span class="block mb-2 text-orange-500 font-bold">Our Customer</span>
            <h2 class="text-2xl mb-5">What People Say
                About Eleeva</h2>
            <div class="relative w-full m-0 p-0">
                <img src="https://m.media-amazon.com/images/I/81kAIHNs4uL.jpg" alt="Customer using glue"
                    class="w-full h-[65vh] object-cover block" />
                <div class="absolute top-4 left-4 bg-black/85 text-white p-4 max-w-[20%] rounded-lg">
                    <h3 class="mt-0 mb-2 text-lg">Best IndustriaTech</h3>
                    <p class="text-sm leading-relaxed mb-3">Best grip I’ve ever seen. Used it to fix my ceramic lamp, and it held like new.</p>
                    <div class="flex items-center">
                        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Customer"
                            class="w-9 h-9 rounded-full mr-2" />
                        <div class="flex flex-wrap">
                            <strong >Ayrton Kenizhio    </strong>
                            <span>Interior Decorator</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customer