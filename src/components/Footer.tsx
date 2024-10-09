import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-12 md:pb-36 pb-9 px-8 lg:px-16 font-clash">
            <div className=" flex md:flex-row flex-col lg:gap-28 md:gap-14 gap-7 md:items-start items-center min-h-[350px]">
                <div className='flex flex-col w-full md:w-1/2 gap-[26px] md:items-start items-center'>
                    <h2 className='font-corinthia leading-[65px] text-[110px]'>thisuix</h2>
                    <p className="font-normal text-base leading-[26px] max-w-[456px]">
                        Lorem Ipsum is simply dummy text of the printing and br typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <div className='flex flex-col md:w-1/2 sm:w-3/4 w-full min-h-[350px]'>

                    <div className='flex justify-between'>
                        <div className='mr-5'>
                            <h3 className="font-bold md:text-2xl sm:text-xl text-lg mb-4">Pages</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-base font-normal hover:underline">Home</a></li>
                                <li><a href="#" className="text-base font-normal hover:underline">About Us</a></li>
                                <li><a href="#" className="text-base font-normal hover:underline">Contact Us</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold md:text-2xl sm:text-xl text-lg mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-base font-normal hover:underline">Privacy Policy</a></li>
                                <li><a href="#" className="text-base font-normal hover:underline">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold my-4">Subscribe</h3>
                        <form className="flex items-center text-black overflow-hidden relative">
                            <input
                                type="email"
                                placeholder="Input your email address in here"
                                className="h-[54px] sm:h-[74px] px-4 py-2 w-full focus:outline-none text-base font-bold bg-[#FFFFFF21] border border-white border-opacity-65 rounded-lg text-white placeholder-white placeholder:font-bold placeholder:text-[14px] font-cabinet "
                            />
                            <button type="submit" className="bg-primary absolute sm:w-[54px] sm:h-[54px] w-[35px] h-[35px] shadow-[0px_8px_21px_0px_#E8752529] rounded-lg right-[2%] flex justify-center items-center hover:bg-[rgba(93,190,140,0.8)] transition-all duration-300">
                                <img src="/link-icon.png" alt="" className="filter invert w-[70%]" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="md:mt-[72px] mt-4 text-center font-bold sm:text-xl text-base font-cabinet">
                © 2023 - Thisuix. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
