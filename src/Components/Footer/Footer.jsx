import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between max-w-full mx-auto p-4 gap-4">

                {/* Left Side: Logo and Paragraphs */}
                <div className="w-full md:w-1/3 p-4 text-left">
                    <img src="/images/images/logo.png" alt="Eleeva Logo" className="mb-4 w-20 h-20" />
                    <p className="text-gray-600 mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus, luctus nec ullamcorper mattis,
                        pulvinar dapibus.
                    </p>
                    <p className="text-gray-600">
                        In consequat non cursus bibendum leo tortor adipiscing vestibulum sivarus sit nisi amet consequat vertra
                        posuere amet.
                    </p>
                </div>

                {/* Right Side: Footer Sections */}
                <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-4">

                    {/* Section 1 */}
                    <div className="p-4 flex-1 min-w-[150px]">
                        <h3 className="text-gray-500 mb-2 text-base font-semibold">RESOURCE</h3>
                        <ul className="list-none p-0 text-sm text-gray-400 space-y-2">
                            <li>FAQs</li>
                            <li>Material Guides</li>
                            <li>Distributor Info</li>
                        </ul>
                        <h3 className="text-gray-500 mt-4 mb-2 text-base font-semibold">SUPPORT POLICIES</h3>
                        <ul className="list-none p-0 text-sm text-gray-400 space-y-2">
                            <li>Shipping Policy</li>
                            <li>Returns</li>
                            <li>Reseller Program</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div className="p-4 flex-1 min-w-[150px]">
                        <h3 className="text-gray-500 mb-2 text-base font-semibold">ABOUT US</h3>
                        <ul className="list-none p-0 text-sm text-gray-400 space-y-2">
                            <li>Our Vision</li>
                            <li>Manufacturing Process</li>
                            <li>Meet the Team</li>
                            <li>Vision and Mission</li>
                            <li>Testimonial</li>
                            <li>Meet Our Teams</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div className="p-4 flex-1 min-w-[150px]">
                        <h3 className="text-gray-500 mb-2 text-base font-semibold">PRODUCT</h3>
                        <ul className="list-none p-0 text-sm text-gray-400 space-y-2">
                            <li>DIY</li>
                            <li>Industrial</li>
                            <li>Crafting</li>
                            <li>Repair Kits</li>
                            <li>Super Glue Bundles</li>
                        </ul>
                    </div>

                </div>
            </div>


            <footer className="bg-[#ff5900] text-white py-2 w-full">
                <div className="max-w-full mx-auto flex justify-center items-center flex-wrap px-5">
                    <div className="flex  text-left space-x-4">
                        <a href="#" className="text-white text-lg">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="#" className="text-white text-lg">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="#" className="text-white text-lg">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                    <p className="text-xs ml-4 mt-1 sm:mt-0">© All rights reserved Eleeva</p>
                </div>
            </footer>

        </div>
    )
}

export default Footer
