import React from 'react'

function Infobar() {
  return (
     <section class="flex flex-wrap justify-around bg-[#004aad] text-white px-[5%] py-4 text-sm font-bold text-center gap-2">
  <div class="flex-1 min-w-[200px] text-bold">
    Award Winning Service 
    <span class="block font-normal mt-1">Customer Satisfaction Guarantee</span>
  </div>
  <div class="flex-1 min-w-[200px]">
    Track & Schedule Deliveries 
    <span class="block font-normal mt-1">Fast Dispatch, Safe Handling</span>
  </div>
  <div class="flex-1 min-w-[200px]">
    Under $20 MOQ + Free Worldwide Shipping 
    <span class="block font-normal mt-1">On First Order</span>
  </div>
</section>

  )
}

export default Infobar